---
sidebar_position: 4
---

# 如何隐藏游戏内真名

## 前言

### 为什么要写这篇 HOWTO

Minecraft Bedrock Edition 中的许多功能都需要登录 Xbox Live 账户才能使用，包括但不限于获取成就和市场内容、添加好友、加入多人游戏和服务器等——简而言之，不登录基本只能玩单机。而 Xbox Live 是由~~米哈游自主研发的一款全新开放世界冒险游戏~~微软开发的一个平台，因此其账户和~~米哈游~~微软账户相同，即相互关联且使用同一套账户密码。

注册微软账户时需要填写姓名，很多玩家便老老实实填上了自己的真实姓名。但 Xbox 默认设置为「所有人」可以看到你的真实姓名——很遗憾很少有人注意到了这点——导致**很多玩家正在实名冲浪**。这意味着其他人可以在他们的某些界面中看到你的真实姓名，在此不举例说明。这可能是基于国外网络环境对实名社交的偏好所设计的，但在国内网络环境有些水土不服。

### 受众

如果你符合以下两个条件：

- [x] 在注册微软账户时使用了自己的真实姓名
- [x] 不想让自己的真实姓名被他人知道

我们**强烈建议**你跟着以下步骤操作一遍，检查自己是否关闭了显示真实姓名，以保护隐私与个人信息安全。

### 兼容性

此 HOWTO 针对 Minecraft Bedrock Edition (相对于 Minecraft Java Edition)。所有的参考文档均未提及 Java 版，且实际测试中并未发现 Java 版与 Xbox 有任何关联。

如无说明，所有操作均在浏览器中进行。这意味着任意设备均可执行所有操作。

如果你还需要一个浏览器……不折腾的选择是 Edge，全平台均可使用。

Microsoft 和 Xbox 相关的网站可能加载缓慢，但不像 GitHub 和 Steam 那样几乎访问不上去。如遇到加载问题，请耐心等待。

## 一般操作步骤

1. 前往 [Xbox 设置 - 隐私和在线安全](https://www.xbox.com/zh-CN/user/settings/privacy-and-safety)页面。
2. 如果你还没有登录，登录微软账户后才能进行下一步操作。如果你忘记了微软账户，请查看[关于 Microsoft 账号](../../about/archives/microsoft_account)
3. 向下滚动，找到「其他人可以看到你的真实姓名」选项。选择「仅限我」。
4. 继续向下滚动，点击「提交」。(一定要点提交！！)

![hide_name](/tools/howto/hide_name.jpg)

## 家长控制操作步骤

如果访问上述链接使你被重定向到[为什么我无法更改隐私设置？](https://support.xbox.com/zh-CN/help/family-online-safety/online-safety/manage-app-privacy-settings-xbox-one)，你使用的账户为「Xbox 家庭组成员的子女帐户」(下文简称「家长控制账户」)。

微软通过注册账户时填写的出生日期来判断玩家是否未成年。对于 Minecraft，未成年玩家 (或「分级超出年龄限制」?) 将无法使用多人游戏 (包括服务器?) 等功能。

在此情况下，为了使用相关功能，需要将此账户加进一个家庭组，并通过家长的微软账户开启相关权限。更多关于如何加入家庭组、开启相关权限的说明，见：

- [Set Up Microsoft Family Accounts for Minecraft Multiplayer Games | Minecraft Help](https://help.minecraft.net/hc/en-us/articles/4408968616077)
- [Managing Multiplayer Game Access for a Child Account in Minecraft | Minecraft Help](https://help.minecraft.net/hc/en-us/articles/24302916594701)
- [管理成员的安全设置以访问《我的世界》功能 | Xbox Support](https://support.xbox.com/zh-CN/help/family-online-safety/online-safety/manage-a-members-safety-settings-to-access-minecraft-features)

相似地，如果你使用的是家长控制账户，需要登录家长的账户才能关闭这一选项。以下内容假定你知道家长账户使用的邮箱和密码。（什么

1. 保持现有的浏览器页面不动，再打开另一个浏览器。如果没有另一个浏览器，就打开当前浏览器的隐私模式。
2. 打开一般操作步骤中的链接，并登录家长账户。
3. 点击你的账户。
4. 剩下的应该和一般操作步骤一样了。记得点提交。

<details>

<summary>家长账户是什么来着？</summary>

如果你很早以前就把多人游戏之类的权限都打开了，并忘了当时用的是哪个家长账户……请登录你的邮箱，搜索发件人为 `familysafety@microsoft.com` 的邮件。在加入家庭组时，微软会向你的邮箱发送邀请邮件，里面包含了家长账户的邮箱。

</details>

## 结语

恭喜你，悬着的心终于可以落地了！如果你不放心，欢迎联系任何你信得过的管理员，请 TA 帮你确认真实姓名是否隐藏，并为你保密。

## 参考文档

- [管理 Xbox 在线安全和隐私设置 | Xbox Support](https://support.xbox.com/zh-CN/help/family-online-safety/online-safety/manage-online-safety-and-privacy-settings-xbox-one)
