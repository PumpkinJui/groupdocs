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
- **最新版本** 1.0（正式版） | 1.1 - Pre 1（测试版）
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

## 最新版本更新日志 - 1.1 - Pre 1

新年快乐！我们计划**在元宵节发布 1.1 的正式版本**，而今天我们正式将 1.1 的第一个预发布版本端上来了！今天的更新中，我们带来了你可能感兴趣的两个新功能 —— **主动旁观和旁观传送**功能！前者是《冒险小世界：剑之试炼》已经加入过的一个功能，它允许玩家在对战前就自主选择是否参与这一局对战，而后者则是我们为旁观者方便追踪玩家动向而推出的全新功能！

祝你在新版本中偷床顺利 >:)

![1.1_pre_1](/resources/bedwars/update_log/1.1_pre_1.png)

### 旁观模式

- #7 新增主动旁观模式！
  - 可以在「设置 - 旁观模式设置」中启用，以允许主动旁观
  - 在开启了旁观模式的情况下，玩家可以使用一个新物品以打开主动旁观的设置 UI，在此 UI 中玩家可以选择不旁观、仅下局旁观、或之后的所有游戏都旁观
  - 选择了*仅下局旁观*或*之后的所有游戏都旁观*的玩家，会在开始游戏后自动归为旁观模式
  - 开启主动旁观后不能选队，已选队伍的信息会消失
  - 如果在开启了主动旁观的情况下，房主禁用了主动旁观功能，则会警告已开启了主动旁观的玩家，之后的游戏需注意参与
- #46 现在旁观者可以抬头以打开传送 UI！
  - 可以在「设置 - 旁观模式设置」中启用，以允许旁观传送
  - 便于玩家观察某个玩家的行动

### 漏洞修复

- #80 修复了无法破坏蕨的问题
- #84 修复了每当玩家变化且人数不足时就会警告人数不足的问题
- #85 修复了使用铁傀儡右键箱子会放置铁傀儡的问题
- #86 修复了床自毁会提示所有玩家的问题，现在不再对旁观玩家提示床自毁
- #87 修复了在手机端可以先将商店物品放到空栏位再直接拿出的问题
- 修复了在地图屋顶中可以冲毁铁轨和花盆的问题
- 修复了在地图乐园中可以冲毁地毯的问题

### 技术性

#### 概述

- 更新了资源包的 UUID，请所有使用此资源包的玩家注意重新安装包，**我们建议所有玩家彻底删除旧版包并使用新版的包**
- 将资源包的版本切换为`1.1.5`
- 现在使用标签分辨不同旁观模式设置的玩家：
  - `spectatorMode:none`或无`spectatorMode:`前缀标签的玩家：不旁观
  - `spectatorMode:nextGame`：仅下局旁观，当游戏开始后将自动移除此标签
  - `spectatorMode:always`：之后的所有游戏都旁观

#### 库文件

- **新增** `lib.FormButtonComponent.visible: boolean | undefined`属性，以便控制显示的按钮是否需要显示出来，默认值为`true`

#### 起床战争主文件

- **新增** `BedwarsSystem.isReleaseVersion: boolean`属性，用于指定此版本是否为稳定版本，这会影响某些设置的显示
- **新增** `BedwarsSystem.informAllPlayers(message: string | minecraft.RawMessage | (string | minecraft): void`静态方法，用于对所有玩家播放通知类消息
- **新增** `BedwarsSystem.getPlayers(): minecraft.Player[]`方法，用于获取非主动旁观的玩家
- **新增** `BedwarsSystem.getPlayerAmount(): number`方法，用于获取非主动旁观的玩家人数
- **新增** `BedwarsSettings.gaming.spectatorMode`属性，以控制旁观玩家的可用功能，有如下属性：
  - `spectateActivelyEnabled: boolean`：是否启用主动旁观模式
  - `headUpTeleportEnabled: boolean`：是否启用旁观传送功能
- **新增** `BedwarsSettings.gaming.killBonus`属性，以控制击杀奖励（但未实装相关功能），有如下属性：
  - `enabled: boolean`：是否给予击杀者以击杀奖励
  - `mode: number`：击杀奖励模式，`0`：直接给予资源，`1`：玩家的全部物品直接散落
  - `loseLevelTierInExpMode: 0 | 1 | 2`：经验模式损失资源，损失的资源将给予击杀者，`0`：不损失，`1`：损失一半，`2`：完全损失
  - `playerCanThrowItemsInVoid: boolean`：虚空玩家可扔物品
- **新增** `BedwarsSettings.BedwarsSettings.showSpectatorModeSettingsUI(player: minecraft.Player, system: BedwarsSystem): void`静态方法，用于显示旁观模式的 UI
- **新增** `BedwarsMap.getAllPlayerData(options: PlayerDataOptions | undefined): BedwarsPlayer[]`方法，用于获取所有起床战争玩家的信息
  - `options: PlayerDataOptions | undefined`：用于筛选特定的玩家信息，可用条件包括：
    - 处于特定队伍内（`includeTeams?: data.BedwarsTeamType[] | undefined`），指定后将会额外筛选队伍，否则不筛选
    - 不处于特定队伍内（`excludeTeams?: data.BedwarsTeamType[] | undefined`），指定后将会额外筛选队伍，否则不筛选
    - 包含死亡玩家（`includeDeadPlayer?: boolean | undefined`），默认值为`true`
    - 包含淘汰玩家（`includeEliminated?: boolean | undefined`），默认值为`true`
    - 包含旁观玩家（`includeSpectator?: boolean | undefined`），默认值为`true`，需注意另外四项不筛选旁观玩家，如果不选定旁观玩家需单独指定此项
    - 只包含已淘汰玩家（`onlyIncludeEliminated?: boolean | undefined`），默认值为`false`
- **新增** `BedwarsMap.addSpectator(player: minecraft.Player): void`方法，用于新增旁观玩家
- **更名** `BedwarsMap.getBedwarsPlayer()` → `BedwarsMap.getPlayerData()`
- **新增** `BedwarsMode.removeSelectedTeam(player: minecraft.Player, resetNpcItems?: boolean): void`方法，用于移除玩家的选队信息，并可选是否重置 NPC 的物品
- **新增** `BedwarsMode.timelineSpectatorHeadUpTeleport(): void`方法，为旁观传送的主逻辑
- **新增** `BedwarsPlayer.setEliminated(): void`方法，设置玩家为已淘汰
- **移动** 将`BedwarsMode.nextEvent`移动到`BedwarsMap`类下
- **新增** 多个触发游戏事件的方法
  - `BedwarsMap.triggerDiamondTier2Event(): void`：触发事件：钻石生成点 II 级
  - `BedwarsMap.triggerDiamondTier3Event(): void`：触发事件：钻石生成点 III 级
  - `BedwarsMap.triggerEmeraldTier2Event(): void`：触发事件：绿宝石生成点 II 级
  - `BedwarsMap.triggerEmeraldTier3Event(): void`：触发事件：绿宝石生成点 III 级
  - `BedwarsMap.triggerBedDestructionEvent(): void`：触发事件：床自毁
  - `BedwarsMap.triggerDeathMatchEvent(): void`：触发事件：绝杀模式
- **新增** `BedwarsMap.updateNextEvent(id?: "diamond_2" | "emerald_2" | "diamond_3" | "emerald_3" | "bed_destruction" | "death_match" | "game_over" | undefined, name?: "钻石生成点 II 级" | "绿宝石生成点 II 级" | "钻石生成点 III 级" | "绿宝石生成点 III 级" | "床自毁" | "绝杀模式" | "游戏结束" | undefined, countdown?: number): void`，以更新下一个事件的信息
- **更改** 将`BedwarsMode.functionWaiting()`时间线化，现在人数检测是每秒进行一次，而非玩家退出或进入时进行一次
  - 这是因为随着多项设置的更新，比如等待设置、主动旁观设置等，原来的人数判断逻辑变得越来越复杂，故而采用循环检查的方式，虽然会带来一点额外的性能负载，但我们坚信这不会对您的服务器或设备造成任何影响
