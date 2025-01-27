---
sidebar_position: 1
title: 主页
description: 仿照 Hypixel 在基岩版上做的起床战争！
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
- **最新版本** Alpha 1.0_02（测试版）
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

## 最新版本更新日志 - 起床战争附加包 Alpha 1.0_02

嗨！我们这次更新引入了全新的 8 队模式，以及一些新的机制以更加还原 Hypixel 。下面是更新日志。

### 新地图

- Glacier 冰川，8 队地图
  - 8 队地图中的物价略有调整，详情请见Hypixel服务器内售价情况
- Rooftop 屋顶，8 队地图
- Amazon 亚马逊，8 队地图

### 商品物价更改

- 物价更改表如下：

| 商品 | 以前的价格 | 现在的价格 |
| --- | --- | --- |
| 钻石剑 | 4 绿宝石 | 3 绿宝石 |
| 床虱 | 30 铁锭 | 24 铁锭 |
| 海绵 | 6 金锭 | 3 金锭 |
| 水桶 | 6 金锭 | 3 金锭 |

### 最低高度限制

- 现在所有地图都存在**最低高度限制**，玩家将不再允许在50格以下放置方块

### 地图生成

- 现在地图的加载时间视地图规模而决定
- 现在地图的加载剩余时间会在屏幕右侧信息板上公示

### 资源生成

- 现在所有地图默认情况下将一次性生成 5 个铁（少数地图除外）
- 现在平均每个铁的生成间隔从 8 游戏刻（0.4 秒）改为了 6 游戏刻（0.3 秒）
- 现在平均每个金的生成间隔从 120 游戏刻（6 秒）改为了 60 游戏刻（3 秒）
- 在单挑模式下，平均每个铁的生成间隔为 20 游戏刻（1 秒）
- 在单挑模式下，平均每个金的生成间隔为 120 游戏刻（6 秒）

### 漏洞修复

- 修复了喝下隐身药水过期后不能正确显示盔甲的问题

### 底层更新

- 更新了`manifest.json`使其显示更详细的描述

#### `methods.js`

- **拆分** 将本文件拆分为 `methods.js`、`maps.js`、`team.js`、`shopitem.js`
- **新增** `centerPosition(pos)`，用于将坐标中心化
  - `pos: Vector3`，接受一个位置，输出`x`和`z`加`0.5`的新坐标
  - 适用于生成实体时所接受的坐标
- **更改** `itemInfo(itemId,options)`现在是公开的

#### `events.js`

- **更改** 优化了`trapFunction()`的警报陷阱，使其更易读
- **更改** 合并了`waitingHallFunction()`、`resetMapFunction()`、`mapLoadFunction()`、`waitingFunction()` → `waitingFunction()`
- **更改** 现在`playerUseItemOnHeightLimitEvent(event)`提供了对最低高度的支持

#### `maps.js`

- 拆自`methods.js`和`constants.js`，保留以下内容：
  - `BedwarsMap`类
  - `shuffleArray(array)`
  - `regenerateMap(mapId)`
  - `createMap***()`
  - `validMapsFor2Teams`
  - `validMapsFor4Teams`
  - `validMapsFor8Teams`
- **新增** `map()`，获取当前地图信息
- **新增** 变量`playerCouldIntoShop: Boolean`，玩家是否能够进入商人区域
  - 因此，大部分地图中的`player_into_shop`的函数被移除
- **更改** 现在`createMapArchway()`内部使用的变量使用正确的名称`mapArchway`而非`mapCarapace`

#### `team.js`

- 拆自`methods.js`和`constants.js`，保留以下内容：
  - `validTeams`
  - `BedwarsTeam`类

#### `shopitem.js`

- 拆自`methods.js`和`constants.js`，保留以下内容：
  - `shopitemType`
  - `traderType`
  - `Shopitem`类
  - `blocksAndItemsShopitems`
  - `weaponAndArmorShopitems`
  - `teamUpgradeShopitems`

#### `BedwarsMap`类

- 现在将所需要的变量放到了类体中，而非构建器中，并添加了注释以标记变量用途
- **新增** `isSolo()`方法，用于判断地图是否为单挑模式
  - 当队伍数超过4队后，则认为是单挑模式的地图
- **新增** `loadInfo`对象
  - `isLoading`：地图是否处于加载状态
  - `clearingLayer`：正在清除的高度层
    - 因此，原有变量`resetMapCurrentHeight`被移除
  - `clearTimePerLayer`：清空地图时，间隔多长时间清除下一层，单位：游戏刻
  - `structureLoadTime`：加载结构所需的时间，单位：游戏刻
    - 因此，原有变量`structureLoadCountdown`被移除
  - `setTeamIslandTime`：设置队伍岛屿颜色和床所需的时间，单位：游戏刻
- **新增** `heightLimit`对象
  - `max`：地图最高高度限制，默认值为`110`
    - 因此，原有变量`highestBlockLimit`被移除
  - `min`：地图最低高度限制，默认值为`50`
- **更改** `addSpawner(resourceType,pos)`，现在接受`pos:Vector3`而非`x`、`y`、`z`的三个数
- **更改** 现在`gameStage`的标记为`0`：游戏前，`1`：游戏时，`2`：游戏后

#### `BedwarsTeam`类

- 现在将所需要的变量放到了类体中，而非构建器中，并添加了注释以标记变量用途
- **重命名** `trapCooldown` → `trapInfo`，记录该队陷阱信息
- **重命名** `trapCooldown.isEnabled` → `trapInfo.cooldownIsEnabled`，陷阱是否正处于冷却状态
- **重命名** `trapCooldown.value` → `trapInfo.cooldown`，陷阱的冷却倒计时（单位：游戏刻）
- **重命名** `alarming.isEnabled` → `trapInfo.isAlarming`，警报是否启用
- **重命名** `alarming.value` → `trapInfo.alarmedTimes`，警报的音效次数
- **重命名** `getForgeSpeedBonus()` → `getForgeBonus()`，因为锻炉不光对速度有所提升，还对容量有所提升
- **移除** `playerList`，因其未发挥实际作用，可由`getTeamMember()`代替
- **移除** `getRotation()`，将该方法整合到了`setBed()`的`rotation()`中

#### `BedwarsPlayer`类

- **更改** 现在`show8TeamsScoreboard()`拥有功能，显示8队起床战争信息

#### `Shopitem`类

- 现在将所需要的变量放到了类体中，而非构建器中，并添加了注释以标记变量用途
- 新增`costResourceAmountInSolo: Number`，记录在单挑模式下消耗的资源数
  - 通过构建器的`options.costResourceAmountInSolo`传入
  - 默认值为`0`
  - 如果该值为`0`或更小的值，则在单挑模式下将使用正常模式下的消耗的资源数
  - 如果该值为`1`或更大的值，则在单挑模式下将使用该值作为消耗的资源数
- 新增`getCostResourceAmount(): Number`方法，用于输出该商品实际所需要的资源数
