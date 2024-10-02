# 入群必读

## 群规

入群后必须遵守本群群规，违反群规者将会接受群规所规定的各类处罚。

群规位于[此页面](rules.md)。

## 如何反馈 bug

测试中如有发现 bug，请在群内汇报。  
拥有 GitHub 账号的群成员，可直接在对应地图仓库，通过 Issues 功能汇报 bug。

## 服务器成员信息表

所有进入群服务器的成员信息由管理员登记在此。

信息表位于[此页面](registered_members.md)。

## 关于 Microsoft 账号

注册微软账号时默认使用邮箱作为登录首选项，手机号码需要手动设置为登录首选项。因此，请牢记您登录所用的邮箱。

如果您想要设置手机号为登录首选项，请访问[登录首选项 (live.com)](https://account.live.com/SignInPreferences?amru=names%2FManage)。该操作需要登录。

如果您忘记了邮箱，请访问：

- [微软邮箱账户忘记](https://answers.microsoft.com/zh-hans/outlook_com/forum/all/%E5%BE%AE%E8%BD%AF%E9%82%AE%E7%AE%B1%E8%B4%A6/aa7ba219-e9ac-458d-bcbf-9883b80b1c84)
- [我不记得我的Microsoft帐户了，我该怎么做](http://answers.microsoft.com/zh-hans/outlook_com/forum/oaccount-omyinfo/%E6%88%91%E4%B8%8D%E8%AE%B0%E5%BE%97%E6%88%91/f09cac26-826a-44ac-a441-b77d3660ec17) (此文章中使用 Xbox 玩家名称找回账户的链接已失效。)
- [查找 Microsoft 帐户电子邮件地址](https://support.xbox.com/zh-CN/help/account-profile/manage-account/forgot-microsoft-account-solution)
- [你忘记了你的 Microsoft 账户用户名](https://support.microsoft.com/zh-cn/account-billing/%E4%BD%A0%E5%BF%98%E8%AE%B0%E4%BA%86%E4%BD%A0%E7%9A%84-microsoft-%E8%B4%A6%E6%88%B7%E7%94%A8%E6%88%B7%E5%90%8D-b2049472-3b8f-27d3-61c6-67a668453f4c)

## 关于 Android 手机上的存档

> ❗ 请务必注意此条，以防止你的存档丢失。

首先，**强烈推荐**将文件存储位置由「应用程序 (Application)」改为「外部 (External)」。这可以使存档在文件管理中可见，并能轻松导入、备份和导出。

然后，**强烈推荐**将存档及其他资源定期备份。这可以有效防止无意及有意的破坏；令人痛心地，这已经经历过多次必要性验证，从个人存档到集体项目。

之后，如果你的游戏版本位于 1.18 及以上，**强烈推荐**在手机管家的垃圾清理中为 Minecraft 设置白名单。具体原因详见[这篇帖子](https://klpbbs.com/thread-26933-1-1.html)。已经令人痛心地证实，这一问题即使到了国际基岩版 1.20.0 仍然存在。*如果你的手机没有「设置白名单」的功能，就把这件事牢牢记住，垃圾清理时把 Minecraft 手动取消勾选。*

最后，**一定不要**在没有导出所有存档文件的情况下，卸载 Minecraft，不管出于什么理由！*除非你出于销毁你所有存档的理由。*

*每一句「令人痛心地」，都意味着本群至少有一名测试员因该原因彻底失去了他/她的存档。*

## 关于文件存储位置

> 这一部分假定你已经将文件存储位置改为了「外部」。

根据 [Minecraft Worlds Lost When Using External Storage on Android Devices I Minecraft Help](https://help.minecraft.net/hc/en-us/articles/4411299967629) 和 [Managing Data and Game Storage in Minecraft | Minecraft Help](https://help.minecraft.net/hc/en-us/articles/4411299967629) 两篇文章：

| 操作系统 | 版本 | 路径 |
| --- | --- | --- |
| Android | 1.17 及以下 | /games/com.mojang/ |
| Android | 1.18 及以上 | /Android/data/com.mojang.minecraftpe/files/games/com.mojang/ |
| Windows | 全版本 | %localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\ |
| iOS | 全版本 | /On My iPhone/Minecraft/games/com.mojang/ |

### 常见问题解答

#### 我不会使用 `%localappdata%`

- 你可以使用快捷键 `Win+R`，一般情况下会弹出一个「运行」窗口。把这个路径粘贴进去，然后点击「确定」。
- 你可以把这个路径复制到 Windows 文件资源管理器的地址栏，然后按回车。「Windows 资源管理器」就是你随便打开一个文件夹会弹出来的那个窗口，也可以在桌面双击「此电脑」一类的图标打开。「地址栏」就是那个窗口在靠上位置显示当前路径的长条，点击空白区域粘贴进去回车就行了。
- 你可以手动找到下面的路径：`C:\Users\<YOUR USERNAME>\AppData\Local`。此路径通常与 `%localappdata%` 等效。可能需要打开「显示隐藏项目」等设置项，因此并不推荐这一方法。

#### 我不想反复回来找这个路径

- 你可以把这个文件夹固定到「快速访问」菜单，这样就可以在资源管理器左侧的侧边栏里面一键直达了。右键这个文件夹，然后选择这个名字的菜单项就可以了，应该在靠上的位置。你也可以直接把它拖到「快速访问」里面。
- 如果你就是不想用左侧边栏，或者你使用的 Windows 版本尚未支持这一功能，你可以创建一个指向这个文件夹的快捷方式。你可以在这个文件夹上右键→发送到→桌面快捷方式；也可以打开你想要快捷方式存在的位置，然后按住 `Alt`，把这个文件夹拖入快捷方式的文件夹；或者在你想要快捷方式存在的位置右键→新建→快捷方式→填入路径→填入名称→完成。

## 关于皮肤

- **强烈建议**关闭「仅允许受信任的皮肤」设置项，以保证在游玩服务器等过程中，其他人的自定义皮肤可以正常显示。该设置项默认为开。
- 具体设置项位置：游戏主界面→设置→档案→仅允许受信任的皮肤。
- 如果你希望自己的皮肤在制作的地图中被使用或被鸣谢，请将皮肤文件上传至「群文件-群成员皮肤」，并最好标注你更习惯于使用「粗壮」模型还是「纤细」模型。
  - 如果你希望自己的皮肤出现在网易版，请务必保证上传的皮肤为原创，否则可能被网易版强行改成默认皮肤 (Steve, Alex, etc.)。
