---
sidebar_position: 1
---

# 服务器设定

## 说明

- 请务必遵守[群规](../rules/rules_main_text)中关于服务器的所有规定。  

:::info[群规节选]

 **第四十九条** 对于生存服务器而言，申请加入的新成员需要满足以下几点中的任意一条： 

（一）管理员；

（二）积极测试地图，贡献较大的；

（三）管理员推荐，且表现良好的；

（四）除以上情况外，有纯生存经验的，经过管理员在群内随机提问的关于纯生存的问答测试 (可自行查阅相关资料，一经作答原则上不得更改答案)，表现良好，并且经管理员一致审核同意的。

其中，对于第三款，若管理员推荐的成员在生存服中因违规被罚第一档到第二档的，推荐该成员的管理员应当连带被处罚一档；若管理员推荐的成员在生存服中因违规被罚第三档到第五档的，推荐该成员的管理员应当引咎撤除管理员身份并处罚二档。

:::

- 各服务器使用白名单机制。若想参与各服务器的建设工作，请在群内艾特群主登记（艾特一次即可），以添加白名单。
- 温馨提醒：尽量不要尝试连接没有给出的端口。在 NAT 机器上，可能会连接到其他服务器 (共享公网 IP)；如果是独享公网 IP 的机器，可能会被设置的陷阱拦截。具体操作见 [2023 年，我们是如何应对端口扫描的](../about/archives/2023_port_scanning_solution)。
- 鉴于中国大陆特殊的网络环境，如下地址均采用 DNSSEC 确保解析安全。如果你的设备不支持 DNSSEC (表现为无法解析)，则可以将末尾的 `xiaozhiyuqwq.top` 换为 `nekoawa.com`。（目前监测到出现过解析污染的地区：江苏苏州。）
- 所有游戏服务器仅支持 IPv4。如果您的设备仅限 IPv6，则建议联系您的 ISP 启用 IPv4 支持。可在 [IPW](https://ipw.cn/) 查询是否支持 v4/v6。

## 如何设定

### 简化版

**注意：仅 PC 和移动端支持自行添加服务器。**

1. 登录你的 Xbox 账号
2. 点击游戏 — 服务器，划到列表最下面，点添加服务器 (如有提示请直接忽略，并点「确定」)
3. 名称随便填 (给你自己看的)，地址和端口参考下面的对应服务器填
4. 点「保存」，在服务器列表内会出现「其他服务器」，下方有一服务器，名称为刚才填入的名称；点服务器名称，再点「加入服务器」。如有提示请直接忽略，并点「确定」

### 官方版

来自 [How to Play Minecraft: Bedrock Edition Multiplayer](https://help.minecraft.net/hc/en-us/articles/4410316619533-How-to-Play-Minecraft-Bedrock-Edition-Multiplayer)：

> #### How to play on an online server
>
> 1. From the title screen, select Play
> 2. Go to the Servers tab
> 3. Select which partner server you would like to join
> 4. If the server you want to join is not in the partner list, you can scroll to the bottom and click Add Server (PC and mobile only)
> 5. Input the server information
>    - You can get the server name, address, and port from the server owner
>    - For Minecraft servers that are safe to join and fun for all ages, check out [our official Minecraft server listing site](https://findmcserver.com/).

## 卡顿处理方案

1. 查看[宕机看板](https://status.nekoawa.com/)。
2. 生存服进不去先换备用线路：`rain2.cvm.xiaozhiyuqwq.top`。
3. 如有条件，在命令行执行下方命令后截图发群：  
   - Windows，管理员  
     `tracert -p <端口> -P udp <地址>`  
   - Linux，管理员  
     `sudo traceroute -p <端口> -P udp <地址>`

---

## 生存服 - III 周目

> 原版生存，无作弊，可获取成就。永远保持最新正式版。  
  欢迎在生存服务器开拓天地，实现你的小梦想哦！

- 地址 - rain.cvm.xiaozhiyuqwq.top
- 端口 - 20230
- 版本 - 1.21.50

## 测试服

> 供测试群内部成员测试新技术或新地图的服务器，不常开启。

### 测试服 - I

- 地址 - rain.cvm.xiaozhiyuqwq.top
- 端口 - 20000
- 版本 - 1.21.50

### 测试服 - II

- 地址 - rain.cvm.xiaozhiyuqwq.top
- 端口 - 30000
- 版本 - 1.21.50

### 测试服 - III

- 地址 - rain.cvm.xiaozhiyuqwq.top
- 端口 - 40000
- 版本 - 1.21.50

## 起床战争服

> 基于本群资源[量筒的起床战争](../resources/developing/bedwars/homepage)而开服。  
  目前处于最新测试版，欢迎各位成员前来测试，友谊第一，比赛第二！禁止作弊哦！

- 地址 - apple.cvm.xiaozhiyuqwq.top
- 端口 - 11451
- 版本 - 1.21.50
