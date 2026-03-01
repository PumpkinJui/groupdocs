---
description: 仿照 Hypixel 在基岩版上做的起床战争！
authors: [量筒]
tags: [developing]
---

# 量筒的起床战争

起床战争是一款能够适用于任何地图的附加包，是基于 Hypixel 起床战争的特性而开发的资源。

处于更新状态，目前已发布到多个平台，于元宵节正式发布。

---

## 基本信息

- **作者** 一只卑微的量筒（**@量筒**）
- **制作人表** 详情见[制作人表页面](credits)
- **版本需求** 1.21.100+
- **资源类型** 附加包
- **最新版本** 1.0（正式版） | 1.1 - RC 1（测试版）
- **更新日志** 详情见[更新日志页面](update_log/1_1)
- **漏洞汇报** 详情见[GitHub Issues](https://github.com/YZBWDLT/Bedwars/issues)

---

## 下载

有多种途径都可以下载或找到本附加包，也可以在群内直接下载此附加包。

### 网盘

- [123云盘](https://www.123912.com/s/t3TqVv-NGhkh)
- [蓝奏云（密码：1zhb）](https://wwaa.lanzouo.com/b0065t26ni)

### 各大论坛或平台

- [GitHub](https://github.com/YZBWDLT/Bedwars)（更新测试版）
- [KLPBBS](https://klpbbs.com/thread-157754-1-1.html)
- [MineBBS](https://www.minebbs.com/resources/be-1-21-pvp.10589/)
- [TITAIKE](https://www.titaike.cn/6245.html)

---

## 群内测试

目前本资源处于活跃更新状态。本资源将保持在本群的[起床战争服](../../servers/server_settings)开展测试。

该服务器采用白名单机制，需要参加测试的成员，请确保您的名字出现在[服务器成员登记表](../../servers/registered_members)中，否则将无法进入游戏。

该服务器目前采用 Minecraft 最新版本，如果您在进入服务器时显示「过期的客户端！」，请在[下载国际基岩版 Minecraft](../../tools/urls/mcbe.md)中更新你的 Minecraft 。

---

## 相关视频

本资源在 @极筑工坊 的 B 站账号发布了[第一期 demo 视频](https://www.bilibili.com/video/BV1Jv421C7ev)。

---

## 最新版本更新日志 - 1.1 - RC 1

发布此发布候选版以为后天的正式发布做准备。欢迎继续测试此版本，我们将修复已被发现的严重问题或容易处理的小问题，如果此版本未发现以上问题，将作为正式版发布！

### 漏洞修复

- #82 修复了在被铁傀儡、蠹虫攻击后，不会解除隐身效果的问题
- #94 现在开始游戏后不再提示无效队伍已被淘汰
- #95 现在使用特定资源包一次性扔出所有商店物品后，不再导致商店物品可被获取

### 技术性

#### 库文件

- **新增** `lib.FormLabelComponent.visible: boolean | undefined`属性，以便控制显示的标签是否需要显示出来，当前仅限 active 类 UI 可用，默认值为`true`

#### 起床战争主文件

- **更改** 为`BedwarsTeam.setEliminated()`新增了一个`showMessage?: boolean`参数，以便控制队伍在被淘汰后是否显示消息
- **新增** `BedwarsPlayer.removeInvisibilityEffect(): boolean`，以尝试移除玩家的隐身状态，并返回是否成功移除
