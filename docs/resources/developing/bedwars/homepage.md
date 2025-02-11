---
sidebar_position: 1
title: 主页
description: 仿照 Hypixel 在基岩版上做的起床战争！
author: 量筒
---

# 量筒的起床战争

起床战争是一款能够适用于任何地图的附加包，是基于 Hypixel 起床战争的特性而开发的资源。

处于更新状态，目前处于前期测试阶段。

---

## 基本信息

- **作者** 一只卑微的量筒（**@量筒**）
- **制作人表** 详情见[制作人表页面](credits)
- **版本需求** 1.21.0+
- **资源类型** 附加包
- **最新版本** 1.0 - Pre 2（测试版）
- **更新日志** 详情见[更新日志页面](update_log)
- **漏洞汇报** 详情见[漏洞与建议汇报页面](bugs)

---

## 下载

目前来说，本附加包并没有正式发布，但您可以在 GitHub 按照引导下载。也可以在群内直接下载此附加包。

- [GitHub](https://github.com/YZBWDLT/Bedwars)

---

## 群内测试

目前本资源处于活跃更新状态。本资源将保持在本群的[测试 I 服](../../../servers/server_settings)开展测试。

该服务器采用白名单机制，需要参加测试的成员，请确保您的名字出现在[服务器成员登记表](../../../servers/registered_members)中，否则将无法进入游戏。

该服务器目前采用 Minecraft 最新版本，如果您在进入服务器时显示「过期的客户端！」，请在[下载国际基岩版 Minecraft](../../../tools/urls/mcbe.md)中更新你的 Minecraft 。

---

## 相关视频

本资源在 @极筑工坊 的 B 站账号发布了[第一期 demo 视频](https://www.bilibili.com/video/BV1Jv421C7ev)。

---

## 最新版本更新日志 - 起床战争附加包 1.0 - RC 1

晚上好！这次的更新，我们修复了一些你们所关心的漏洞。一起来看看吧，明天没有问题的话，我们就正式发布啦！

### 更改与漏洞修复

- 修复了第二次进入地图存档，或重新加载服务器后，会有部分实体残留的问题。现在，在完成地图加载后会再次尝试清除一次实体。
- 修复了旁观者会阻止资源生成的问题。
- 现在正在掉落的玩家不再能扔出物品。
- 现在如果玩家在商人附近的 4 格范围内，将锁定物品（以前是 3.5 格）。
- 现在搭桥蛋最多只能搭到边界的 5 格以内。
- 现在末影珍珠不再能够出界。
- 现在重生点设置到最高高度的 7 格以上（以前是 5 格），并且检测卡在聊天栏的玩家的检测半径改为了 2 格（以前是 4 格）。因此，修复了玩家在(0, 最高高度, 0)附近会被错判为重生玩家的漏洞。
- 现在弓在命中后，会对射击者和被射击者播放经验球的音效。

### 底层更新

- 行为包的清单文件`manifest.json`现在更新到了`1.0.3`版本。
- 资源包的清单文件`manifest.json`现在更新到了`1.2.5`版本。
- **更改** 将`events/gaming/`文件夹重命名为`events/classic/`文件夹。
- **更改** 重命名`BedwarsMap`类方法`init() {}`→`gameReady() {}`，用于转换游戏状态并调用游戏前事件。
- **新增** `BedwarsMap`类方法`gameStart() {}`，用于转换游戏状态并调用游戏时事件。
- **新增** `BedwarsMap`类方法`removeEntityOutOfBorder(entityId,range) {}`，用于移除边界外的实体。
- **更改** 现在`BedwarsMap`类方法`gameOver() {}`，用于转换游戏状态并调用游戏后事件，同时杀龙。
- **移除** `BedwarsMap`类方法`generateMap() {}`，因为该方法在全局仅调用了 1 次。现在相关代码已直接写入`events/classic/beforeGaming.js`。
- **移除** `BedwarsMap`类方法`teamIslandInit() {}`，因为该方法在全局仅调用了 1 次。现在相关代码已直接写入`events/classic/beforeGaming.js`。
- **移除** `BedwarsMap`类方法`assignPlayersRandomly() {}`，因为该方法在全局仅调用了 1 次。现在相关代码已直接写入`gameStart() {}`方法。
- **移除** `BedwarsMap`类方法`setTrader() {}`，因为该方法在全局仅调用了 1 次。现在相关代码已直接写入`gameStart() {}`方法。
- **更改** 移动`playerItemLock() {}`函数，从`events/classic/trading.js`→`event/classic/itemLock.js`，该新文件用于控制物品的锁定。
- **新增** `removeEnderPearl() {}`函数，位于`events/items/enderPearl.js`，用于移除出界的末影珍珠。
- **新增** `playSoundWhenShot(event) {}`函数，位于`events/items/bow.js`，用于对射击者和被射击者播放经验球的音效。
