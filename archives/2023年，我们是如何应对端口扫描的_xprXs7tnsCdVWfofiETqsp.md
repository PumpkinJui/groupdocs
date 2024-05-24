# 2023年，我们是如何应对端口扫描的

## 写在前面

2023年夏天，我们的服务器主机遭到前所未有的端口扫描和撞库攻击。我们的各项业务，尤其是内网穿透业务受到了严重的损害。这篇文章写于2024年，此时、我们的各项业务均正常运行。

本文仅作为知识沉淀，用于回顾我们当时经历了什么、又做了些什么。当然，难免会有些遗漏和错误。

## 背景

- **我们的服务器主机**：我们的服务器主机是租用的腾讯云轻量应用服务器，使用windows server操作系统。
- **什么是端口扫描**：通过向目标主机的一系列端口号发送探测数据包，探测目标主机开放了哪些网络服务（端口）。广泛应用于网络安全审核、网络管理以及恶意目的如寻找入侵系统的入口点。
- **什么是撞库攻击**：是一种网络攻击手段，其基本原理是攻击者利用大量用户名和密码组合，尝试在其他网服务上登录，以期找到匹配的账户。
- **为什么我们要防御撞库攻击**：我们的服务器主机不仅部署了mc服务器，还部署了内网穿透节点。内网穿透连接着一个开放了远程登录的Windows主机的3389端口，由于是内网穿透的缘故，在该主机上查询登录日志全部来源于本机（即来源ip为：`127.0.0.1`），难以通过白名单的形式进行防御。

## 我们的应对措施

### 撞库攻击

我们的服务器主机也遭遇了撞库攻击，攻击者大量向3389尝试登陆。

在linux上有一个知名的软件叫Fail2ban，主要用于保护服务器和网络服务免受暴力破解攻击。对许多服务，如：ssh、nginx都有规则器。但是由于我们的主机是Windows系统，所以无法运行这个软件。

但是，我们发现了一个小众的开源软件：wail2ban，虽然这个仓库在2020年已经被存档，但是在2023年的时候，我们发现非常实用。

![wail2ban仓库主页](https://resource-share.xiaozhiyuqwq.top/wp-content/uploads/2024/05/20240523202418.png "wail2ban仓库主页")

而且使用也非常简单：

- 如果需要配置白名单，在`wail2ban_config.ini`中配置来源ip即可，也可以填写ip段；
- 如果需要修改封禁策略，在`wail2ban.ps1`修改即可。

![在 wail2ban.ps1 中修改封禁策略](https://resource-share.xiaozhiyuqwq.top/wp-content/uploads/2024/05/20240523202727.png "在 wail2ban.ps1 中修改封禁策略")

### 端口扫描

在网上搜索时，有一篇文章我觉得说的很对。既然端口扫描是通过发包来检测哪些端口开着，那么我们设置陷阱即可。设置陷阱，也就是随机监听一些没有使用的端口，如果有IP进行连接，那么就说明这些IP很有可能归属于攻击者。

我们使用了Snort，这是一个具有多平台、实时流量分析、网络IP数据包记录等特性的强大的网络入侵检测、防御系统。

之后我们让Snort输出日志，再编写一个powershell脚本（因为确实时间隔得比较长了，具体如何操作已经忘记，加之笔者身体和精神状态都不太良好，所以Snort的具体操作，还请使用网络研究。），用来封禁来源IP。

```powershell
# 最后修改时间
# 20230911
# 设置文件路径  
$logFilePath = 'C:\Users\ServerOperator\Desktop\Snort\log\alert.ids'  
# 设置已经被检测过的 ip 文件位置  （需要创建一个TXT文件）
$liphasbanlistFilePath = 'C:\Users\ServerOperator\Desktop\Snort\banip.txt'  
# 设置间隔时间（秒）  
$interval = 60 
# 设置白名单IP  
$whitelist = @('0.0.0.0', '0.0.0.0')  # 白名单IP  
$iphasbanlist = @()  
while ($true) {     
    $logContent = Get-Content -Path $logFilePath  
    Write-Host "已经开始了新的一次检测。" 
    foreach ($line in $logContent) {  
        $IP = ($line -split ' ' | Where-Object {$_ -like '[0-9]*.[0-9]*.[0-9]*.[0-9]*'})
        $IP = ($IP -split ':' | Where-Object {$_ -like '[0-9]*.[0-9]*.[0-9]*.[0-9]*'})
        $IP = $IP[0]
        $banListContent = Get-Content -Path $liphasbanlistFilePath  
        if ($banListContent -contains $IP) {  
            Write-Host $IP" 已经位于 banip.txt 文件之中。"  
        } else {    
            if ($whitelist -contains $IP) {  
                Write-Output $IP" 是一个位于白名单列表的 IP 地址。"  
            } else {  
                $banip = $IP  
                netsh advfirewall firewall add rule name="auto_powershell_ipban_$banip" dir=in protocol=any action=block remoteip=$banip description=$banip" 这是从 snort 日志中得出的访问 ip 。我们已经将其封禁。如果这是一个错误，请您 Windows 防火墙中手动禁用这一条规则，谢谢您！:)"  
                Write-Output $banip" 不是一个存在于白名单列表的 IP 地址。我们已经将其封禁。如果这是一个错误，请您手动禁用这一条规则，谢谢您！:)" 
                $iphasbanlist += $IP
                $iphasbanlist | Out-File -FilePath $liphasbanlistFilePath -Encoding ASCII   
            }
        }    
    }
    Clear-Content $logFilePath -Force  
    Start-Sleep -s $interval  
}
```

当然，这段脚本还是存在硬伤的。我们没有打算保留日志，所以最后直接清除了日志文件，这不是最佳的方法。如果有可能，请保留日志文件。（因为日志文件过大，在运行了三周后，这个脚本运行一次CPU负载率全核高达40%，所以我们就直接删除了日志文件）

并且这一段脚本需要用管理员权限运行，因为使用`netsh`命令创建一个新的Windows防火墙规则需要管理员权限。

## 参考资料

- [GitHub - fail2ban/fail2ban: Daemon to ban hosts that cause multiple authentication errors](https://github.com/fail2ban/fail2ban "GitHub - fail2ban/fail2ban: Daemon to ban hosts that cause multiple authentication errors")
- [GitHub - glasnt/wail2ban: fail2ban, for windows.](https://github.com/glasnt/wail2ban "GitHub - glasnt/wail2ban: fail2ban, for windows.")
- [Snort - Network Intrusion Detection & Prevention System](https://www.snort.org/ "Snort - Network Intrusion Detection & Prevention System")

