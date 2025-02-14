---
sidebar_position: 2
description: 附加包的可用命令。
---

# 可用命令

该附加包可以使用命令来设置一些可选项。您可以使用这些命令以进行设置和调整包的运行方式，从而改变您的游玩体验。

## 基本格式

您能够使用的命令格式为

```text
/scriptevent <命令>
```

- 每个`<命令>`都有可接受的参数，如果您不填写这些参数，那么您将获得该命令的帮助信息和当前的默认值。
- 如果填写了无效的`<命令>`，那么会报错并返回所有可用的命令。

## 可用命令列表

所有`<命令>`列表如下。

### `bs:minWaitingPlayers <等待人数>`

控制至少需要多少玩家方可开始游戏。

- `<等待人数>`：整数，默认值为`2`。不允许小于`2`的值。

**例** `/scriptevent bs:minWaitingPlayers 5`：当玩家达到5人后开始倒计时。

### `bs:gameStartWaitingTime <时间>`

控制玩家达到规定人数后，多久后开始游戏。

- `<时间>`：整数，默认值为`400`。单位：游戏刻。

**例** `/scriptevent bs:gameStartWaitingTime 1200`：当玩家达到规定人数后，开始60秒的倒计时。

### `bs:resourceMaxSpawnTimes <资源类型> <最大生成数>`

控制各类资源的最大生成数。

- `<资源类型>`：仅允许`iron`、`gold`、`diamond`、`emerald`。
- `<最大生成数>`：整数，不同资源的默认值分别为`72`、`7`、`8`、`4`。

**例** `/scriptevent bs:resourceMaxSpawnTimes gold 10`：将金锭的最大生成数改为10个。

### `bs:respawnTime <玩家类型> <重生时长>`

控制玩家（包括普通玩家或退出重进的玩家）的重生时间。

- `<玩家>`：仅允许`normalPlayers`（普通玩家）、`rejoinedPlayers`（重进玩家）
- `<重生时长>`：整数，默认值为：普通玩家`110`、重进玩家`200`。单位：游戏刻。

**例** `/scriptevent bs:respawnTime rejoinedPlayers 1000`：退出重进的玩家需要在50秒后方可重生。

### `bs:invalidTeamCouldSpawnResources <可生成资源>`

控制无效队伍是否允许生成资源。无效队伍是指在开始游戏后，没有分配到队员的队伍。

- `<可生成资源>`：布尔值，默认值为`true`。

**例** `/scriptevent bs:invalidTeamCouldSpawnResources false`：禁止无效队伍生成资源。

### `bs:randomMap <地图类型> <允许生成>`

控制特定队伍数的地图是否允许生成。

- `<地图类型>`：仅允许`allow2Teams`、`allow4Teams`、`allow8Teams`
- `<允许生成>`：布尔值，默认值均为`true`。

**例** `/scriptevent bs:randomMap allow4Teams false`：禁止4队地图生成。

### `bs:regenerateMap <生成地图>`

立即生成地图。

- `<生成地图>`：仅允许`true`或`(地图ID)`。如果填为`true`，将随机生成一张地图；如果填为`(地图ID)`，将生成特定地图ID的地图。下表显示了所有地图的相关信息。不允许生成在`bs:randomMap`命令中被禁用的地图。

| 地图ID | 地图名称 | 地图类型 |
| --- | --- | --- |
| `cryptic` | 神秘 | 2队经典 |
| `frost` | 极寒 | 2队经典 |
| `garden` | 花园 | 2队经典 |
| `ruins` | 废墟 | 2队经典 |
| `picnic` | 野餐 | 2队经典 |
| `lion_temple` | 狮庙 | 2队经典 |
| `orchid` | 兰花 | 4队经典 |
| `chained` | 铁索连环 | 4队经典 |
| `boletum` | 蘑菇岛 | 4队经典 |
| `carapace` | 甲壳 | 4队经典 |
| `archway` | 拱形廊道 | 4队经典 |
| `aquarium` | 水族馆 | 4队经典 |
| `glacier` | 冰川 | 8队经典 |
| `rooftop` | 屋顶 | 8队经典 |
| `amazon` | 亚马逊 | 8队经典 |
| `deadwood` | 莲叶 | 8队经典 |
| `picnic_capture` | 野餐 | 2队夺点 |

**例** `/scriptevent bs:regenerateMap true`：立即生成一张随机地图。
`/scriptevent bs:regenerateMap lion_temple`：立即生成地图狮庙（必须在2队地图启用情况下才能生成）。

### `bs:creativePlayerCanBreakBlocks <可破坏方块>`

控制原版玩家是否可以破坏原版方块。

- `<可破坏方块>`：布尔值，默认值为`false`。

**例** `/scriptevent bs:creativePlayerCanBreakBlocks false`：禁止创造模式玩家破坏方块。
