---
sidebar_position: 5
description: 本部作品使用的关卡模板。
authors: [量筒]
---

# 地图文档

import '/src/css/treeview.css';
import FileType from "/src/components/type/file";

这是《冒险小世界：剑之试炼》4.2 版本的底层数据等的文档，供读者查阅。

:::warning[适用版本]

本文档仅适用于版本 Beta 4.2_01b。

本文的内容将始终服务于本地图的最高版本，这意味着本文档中的内容可能会随着地图更新而随时变动。对于更低版本，因为底层已全面更新，所以下文内容将有大半不再适用于旧版本，我们也不会提供文档支持。

:::

<!-- markdownlint-disable MD033 -->

## 各关卡架构

点击文件名称可以查看对应文件的模板。

<treeview>

- <FileType type="folder" name="levels"/>：所有关卡的功能函数。
  - <FileType type="folder" name="start"/> <FileType type="folder" name="end"/>：起始村庄剧情和结束剧情。
    - <FileType type="folder" name="stage(Y)"/>：关卡 0-`(Y)`（起始村庄剧情）或 10-`Y`（结束剧情），代表第`Y`段剧情或大阶段
      - <FileType type="folder" name="events"/>：关卡内事件，可能由外部触发或内部触发，触发后通常用于单次执行某函数
        - [<FileType type="file" name="player_rejoin.mcfunction"/>](#玩家退出重进村庄-player_rejoinmcfunction)：当玩家在该关卡下退出重进时执行的函数，执行者为该玩家，执行位置为该玩家所在的位置。
      - [<FileType type="file" name="after_gaming.mcfunction"/>](#游戏后时间线村庄-after_gamingmcfunction)：对话结束后运行的时间线，用于在剧情完成后（`data.levelCompleted == 1`）时调用的时间线循环函数。通常该时间线会处于非流逝状态。若需启用流逝状态，应在本关的完成关卡函数下声明启用时间流逝。
      - [<FileType type="file" name="complete.mcfunction"/>](#完成关卡村庄-completemcfunction)：对话结束时运行的函数，用于完成一段村庄关卡的剧情。通常在游戏时时间线中的特定时间点下调用。
      - [<FileType type="file" name="gaming.mcfunction"/>](#游戏时时间线村庄-gamingmcfunction)：对话过程中运行的时间线。用于在剧情期间（`data.levelCompleted == 0`）时调用的时间线循环函数。可通过`time.timeline`获取时间线的值，以在特定时间段执行命令。
      - [<FileType type="file" name="start.mcfunction"/>](#开始关卡村庄-startmcfunction)：对话启动时运行的函数，用于开始一段村庄关卡的剧情。通常在游戏后时间线中按照特定条件调用。
  - <FileType type="folder" name="chapter(X)"/>：试炼中关卡，特指第`(X)`章（某神殿）。
    - <FileType type="folder" name="level0"/>：关卡`(X)`-0。
      - <FileType type="folder" name="events"/>：关卡内事件，可能由外部触发或内部触发，触发后通常用于单次执行某函数
        - [<FileType type="file" name="player_rejoin.mcfunction"/>](#玩家退出重进x-0-player_rejoinmcfunction)：当玩家在该关卡下退出重进时执行的函数，执行者为该玩家，执行位置为该玩家所在的位置。
      - [<FileType type="file" name="after_gaming.mcfunction"/>](#游戏后时间线x-0-after_gamingmcfunction)：用于在剧情完成后（`data.levelCompleted == 1`）时调用的时间线循环函数。通常该时间线会处于非流逝状态。然而，在玩家使用传声石结晶后，可能会使得时间线处于流逝状态（具体条件见函数`aw/items/acoustic_stone_crystal.mcfunction`）。
      - [<FileType type="file" name="complete.mcfunction"/>](#完成关卡x-0-completemcfunction)：用于完成一段章节起始关卡的剧情。通常在游戏时时间线中在特定时间点下调用，或者直接在纯战斗模式下无条件调用。
      - [<FileType type="file" name="gaming.mcfunction"/>](#游戏时时间线x-0-gamingmcfunction)：关卡过程中运行的时间线，用于在剧情期间（`data.levelCompleted == 0`）时调用的时间线循环函数。可通过`time.timeline`获取时间线的值，以在特定时间段执行命令。
      - [<FileType type="file" name="start.mcfunction"/>](#开始关卡x-0-startmcfunction)：用于开始一段章节起始关卡的剧情。通常在上一章的最后一关的游戏后时间线中按照特定条件调用。
    - <FileType type="folder" name="level(Y)"/>：关卡`(X)`-`(Y)`，`(Y)`为 0 时为此章节（神殿）的起始关卡
      - <FileType type="folder" name="events"/>：关卡内事件，可能由外部触发或内部触发，触发后通常用于单次执行某函数
        - [<FileType type="file" name="player_rejoin.mcfunction"/>](#玩家退出重进x-y-player_rejoinmcfunction)：当玩家在该关卡下退出重进时执行的函数，执行者为该玩家，执行位置为该玩家所在的位置。
        - <FileType type="file" name="player_die.mcfunction"/>：当玩家在该关卡下死亡时执行的函数，执行者为该玩家，执行位置为该玩家所在的位置。
      - <FileType type="folder" name="waves"/>：关卡的所有波潮数据
        - [<FileType type="file" name="wave_(wave).mcfunction"/>](#波潮数据x-y-wave_nmcfunction)：第`(wave)`波时执行的函数，用于在被调用时召唤怪物生成器，并设置波潮数据。关卡不同波潮的数据应分别存储到该关卡的`waves/wave_(波数).mcfunction`内。
      - <FileType type="folder" name="timelines"/>：关卡的分时间线，为关卡的其他循环执行的功能
      - [<FileType type="file" name="after_gaming.mcfunction"/>](#游戏后时间线x-y-after_gamingmcfunction)：用于在剧情完成后（`data.levelCompleted == 1`）时调用的时间线循环函数。通常该时间线会处于非流逝状态。然而，在玩家使用传声石结晶后，可能会使得时间线处于流逝状态（具体条件见函数`aw/items/acoustic_stone_crystal.mcfunction`）。
      - [<FileType type="file" name="complete.mcfunction"/>](#完成关卡x-y-completemcfunction)：用于完成一个关卡。通常在本关的游戏时时间线中当怪物被清空时（`data.monsterAmount == 0`）调用。
      - [<FileType type="file" name="fail.mcfunction"/>](#关卡失败x-y-failmcfunction)：用于使一个关卡失败。通常在本关的游戏时时间线中当不存在存活玩家（`data.alivePlayerAmount == 0`）调用。
      - [<FileType type="file" name="gaming.mcfunction"/>](#游戏时时间线x-y-gamingmcfunction)：用于在游戏期间（`data.levelCompleted == 0`）时调用的时间线循环函数。通常该时间线会处于非流逝状态。若需启用流逝状态，应在本关的开始关卡函数下声明启用时间流逝。
      - [<FileType type="file" name="start.mcfunction"/>](#开始关卡x-y-startmcfunction)：用于启动并初始化一个关卡。通常在上一关的游戏后时间线中按照特定条件调用。

</treeview>

## 关卡模板

在以下关卡模板中，以圆括号括起来的部分`(content)`代表该部分是需要修改的地方。此外，使用关卡模板时应注意灵活变通，在不同的关卡可能需增删代码，以适应关卡需求。

### 村庄关卡（0-Y/10-Y）

在村庄剧情中时使用的模板。

#### 开始关卡（村庄） `start.mcfunction`

[↗ 回到各关卡架构](#各关卡架构)

其中，调用的通用函数将设置为：

- 剧情期间（`data.levelCompleted = 0`）
- 对话状态（锁定玩家视角，禁止与 NPC 交互，禁止 HUD，流逝时间线，存在多个玩家时施加隐身）

```mcfunction showLineNumbers title="aw/levels/open/stage(Y)/start.mcfunction"
# ===== 开始关卡 =====
# 0-(Y) | (剧情梗概)

# 设置关卡 ID
scoreboard players set level data (Y)

# 调用通用函数
function aw/lib/events/levels/start_open

# 传送玩家
(tp @a ... facing ...)

# (其他功能)
(...)
```

#### 完成关卡（村庄） `complete.mcfunction`

[↗ 回到各关卡架构](#各关卡架构) | [↗ 查看重生点数据](#各关重生点或检查点位置)

其中，调用的通用函数将设置为：

- 剧情完成（`data.levelCompleted = 1`）
- 非对话状态（开放玩家视角，允许与 NPC 交互，允许 HUD，时间线停止流逝，解除隐身）

```mcfunction showLineNumbers title="aw/levels/open/stage(Y)/complete.mcfunction"
# ===== 完成关卡 =====
# 0-(Y) | (剧情梗概)

# 设置重生点
spawnpoint @a (本关重生点)

# 调用通用函数
function aw/lib/events/levels/complete_open

```

#### 游戏时时间线（村庄） `gaming.mcfunction`

[↗ 回到各关卡架构](#各关卡架构)

其中，`## [(时间点)] (模块)：(功能)`作为一个注释标签，用于声明在该剧情下的该时间点执行了什么额外命令，并在其他`(模块)`下完善具体功能。

```mcfunction showLineNumbers title="aw/levels/open/stage(Y)/gaming.mcfunction"
# ===== 关卡游戏时时间线 =====
# 0-(Y) | (剧情梗概)

# --- 剧情 ---
execute if score timeline time matches (时间点) run tellraw @a {"rawtext":[{"text":"* (人物颜色代码)(人物)： §7(剧情)"}]}
## [(时间点2)] (模块)：(功能)

# --- (模块) ---

## [(时间点2)] (功能)
execute if score timeline time matches (时间点2) run (...)

# --- 剧情结束 ---
execute if score timeline time matches (时间点) run function aw/levels/open/stage(Y)/complete


```

#### 游戏后时间线（村庄） `after_gaming.mcfunction`

[↗ 回到各关卡架构](#各关卡架构) | [↗ 查看重生点数据](#各关重生点或检查点位置)

```mcfunction showLineNumbers title="aw/levels/open/stage(Y)/after_gaming.mcfunction"
# ===== 关卡游戏后时间线 =====
# 0-(Y) | (剧情梗概)

# --- 检查玩家进入下一个关卡 ---
execute positioned (下关重生点或特定地点) if entity @a[r=(区域)] run function aw/levels/open/stage((Y)+1)/start

```

#### 玩家退出重进（村庄） `player_rejoin.mcfunction`

[↗ 回到各关卡架构](#各关卡架构) | [↗ 查看重生点数据](#各关重生点或检查点位置)

```mcfunction showLineNumbers title="aw/levels/open/stage(Y)/after_gaming.mcfunction"
# ===== 玩家退出重进 =====
# 0-(Y) | (剧情梗概)

# --- 通用 ---

# --- 完成剧情前 ---

## 设置玩家的重生点
execute if score levelCompleted data matches 0 run spawnpoint @s (上关重生点)
## 传送玩家到剧情点
execute if score levelCompleted data matches 0 run tp @s (本关剧情点)
## 设置玩家的相机视角
execute if score levelCompleted data matches 0 if score timeline time matches (时间点) run (camera @s set minecraft:free ...)
## 设置为隐身 | 仅限多人时运行
execute if score levelCompleted data matches 0 if score playerAmount data matches 2.. run effect @s invisibility 3600 0 true
## 设置玩家的权限
execute if score levelCompleted data matches 0 run inputpermission set @s camera disabled
execute if score levelCompleted data matches 0 run inputpermission set @s movement disabled
## 设置玩家的 HUD
execute if score levelCompleted data matches 0 run hud @s hide all

# --- 完成剧情后 ---

## 设置玩家的重生点
execute if score levelCompleted data matches 1 run spawnpoint @s (本关重生点)
## 传送玩家到重生点 | 仅限多人时运行
execute if score levelCompleted data matches 1 if score playerAmount data matches 2.. run tp @s (本关重生点)

```

### 章节开始关卡（X-0）

#### 开始关卡（X-0） `start.mcfunction`

[↗ 回到各关卡架构](#各关卡架构)

其中，调用的通用函数将设置为：

- 剧情期间（`data.levelCompleted = 0`）
- 对话状态（锁定玩家视角，禁止与 NPC 交互，禁止 HUD，流逝时间线，存在多个玩家时施加隐身）
- 补充玩家的箭和药水
- 播放标题和音效
- 清除所有的怪物、生成器、御风珠、门（同时会打开门）、引导点和带有`aw:marker_type="name"`实体属性的标记

```mcfunction showLineNumbers title="aw/levels/chapter(X)/level0/start.mcfunction"
# ===== 开始关卡 =====
# (X)-0 | (章节名)神殿

# --- 关卡参数 ---
## 关卡 ID
scoreboard players set chapter data (X)
scoreboard players set level data 0

# --- 玩家处理 ---

## 播放标题 | 应先于[调用通用函数]模块
titleraw @a title {"rawtext":[{"translate":"(章节颜色代码)§l((章节名)，加空格) 神 殿"}]}
## 在剧情模式下传送玩家
execute if score storyMode settings matches 1 run (tp @a ...)

# --- 调用通用函数 ---
function aw/lib/events/levels/start_chapter

# --- 生成各关的门 ---
## (X)-1
(summon aw:door (x y z) (0|90) 0 aw:set_(desert|forest|lake|frost|redstone|hill|final)_door)
(summon aw:door (x y z) (0|90) 0 aw:set_(desert|forest|lake|frost|redstone|hill|final)_door)
## (X)-2
(summon aw:door (x y z) (0|90) 0 aw:set_(desert|forest|lake|frost|redstone|hill|final)_door)
(summon aw:door (x y z) (0|90) 0 aw:set_(desert|forest|lake|frost|redstone|hill|final)_door)
## (X)-3
(summon aw:door (x y z) (0|90) 0 aw:set_(desert|forest|lake|frost|redstone|hill|final)_door)
(summon aw:door (x y z) (0|90) 0 aw:set_(desert|forest|lake|frost|redstone|hill|final)_door)
## (X)-4
(summon aw:door (x y z) (0|90) 0 aw:set_(desert|forest|lake|frost|redstone|hill|final)_door)
(summon aw:door (x y z) (0|90) 0 aw:set_(desert|forest|lake|frost|redstone|hill|final)_door)
## (X)-5
(summon aw:door (x y z) (0|90) 0 aw:set_(desert|forest|lake|frost|redstone|hill|final)_door)
(summon aw:door (x y z) (0|90) 0 aw:set_(desert|forest|lake|frost|redstone|hill|final)_door)

# --- 生成章节名 ---
# 应后于[调用通用函数]模块
summon aw:marker -83 1 -2 0 0 aw:set_chapter_name "(章节颜色代码)(章节名)神殿"

```

#### 完成关卡（X-0） `complete.mcfunction`

[↗ 回到各关卡架构](#各关卡架构) | [↗ 查看重生点数据](#各关重生点或检查点位置)

其中，调用的通用函数将设置为：

- 剧情完成（`data.levelCompleted = 1`）
- 非对话状态（开放玩家视角，允许与 NPC 交互，允许 HUD，时间线停止流逝，解除隐身）

```mcfunction showLineNumbers title="aw/levels/chapter(X)/level0/complete.mcfunction"
# ===== 完成关卡 =====
# (X)-0 | (章节名)神殿

# 设置重生点
spawnpoint @a (本关重生点)

# 调用通用函数
function aw/lib/events/levels/complete_chapter

# 生成引导点
summon aw:destination (下一关重生点)

```

#### 游戏时时间线（X-0） `gaming.mcfunction`

[↗ 回到各关卡架构](#各关卡架构)

其中，`## [(时间点)] (模块)：(功能)`作为一个注释标签，用于声明在该剧情下的该时间点执行了什么额外命令，并在其他`(模块)`下完善具体功能。

```mcfunction showLineNumbers title="aw/levels/chapter(X)/level0/gaming.mcfunction"
# ===== 关卡游戏时时间线 =====
# (X)-0 | (章节名)神殿

# --- 剧情 ---

execute if score timeline time matches (时间点) run tellraw @a {"rawtext":[{"text":"* (人物颜色代码)(人物)： §7(剧情)"}]}
## [(时间点2)] (模块)：(功能)

# --- (模块) ---

## [(时间点2)] (功能)
execute if score timeline time matches (时间点2) run (...)

# --- 剧情结束 ---
## 纯战斗模式下直接跳过剧情
execute if score storyMode settings matches 0 run function aw/levels/chapter(X)/level0/complete
## [(时间点)] 结束剧情
execute if score timeline time matches (时间点) run function aw/levels/chapter(X)/level0/complete

```

#### 游戏后时间线（X-0） `after_gaming.mcfunction`

[↗ 回到各关卡架构](#各关卡架构) | [↗ 查看重生点数据](#各关重生点或检查点位置)

```mcfunction showLineNumbers title="aw/levels/chapter(X)/level0/after_gaming.mcfunction"
# ===== 关卡游戏后时间线 =====
# (X)-0 | (章节名)神殿

# --- 检查玩家进入下一个关卡 ---
execute positioned (下关重生点) positioned ~-0.95~-1~-0.95 as @a[dx=0.9,dy=3,dz=0.9,tag=!spectator,scores={deathState=0}] at @s run function aw/levels/chapter(X)/level1/start
execute positioned (下关重生点) positioned ~-2~-1~-2 as @e[dx=3,dy=3,dz=3,type=aw:wind_pearl] run kill @s

# --- 剧情 ---
execute if score timeline time matches (时间点) run tellraw @a {"rawtext":[{"text":"* (人物颜色代码)(人物)： §7(剧情)"}]}
execute if score timeline time matches (时间点2).. run function aw/lib/modify_data/timeline/disable_time_lapse

```

#### 玩家退出重进（X-0） `player_rejoin.mcfunction`

[↗ 回到各关卡架构](#各关卡架构) | [↗ 查看重生点数据](#各关重生点或检查点位置)

```mcfunction showLineNumbers title="aw/levels/open/stage(Y)/after_gaming.mcfunction"
# ===== 玩家退出重进 =====
# (X)-0 | (章节名)神殿

# --- 完成剧情前 ---

## 设置玩家的重生点
execute if score levelCompleted data matches 0 run spawnpoint @s (上关重生点)
## 传送玩家到剧情点
execute if score levelCompleted data matches 0 run tp @s (本关剧情点)
## 设置玩家的相机视角
execute if score levelCompleted data matches 0 if score timeline time matches (时间点) run (camera @s set minecraft:free ...)
## 设置为隐身 | 仅限多人时运行
execute if score levelCompleted data matches 0 if score playerAmount data matches 2.. run effect @s invisibility 3600 0 true
## 设置玩家的权限
execute if score levelCompleted data matches 0 run inputpermission set @s camera disabled
execute if score levelCompleted data matches 0 run inputpermission set @s movement disabled
## 设置玩家的 HUD
execute if score levelCompleted data matches 0 run hud @s hide all

# --- 完成剧情后 ---

## 设置玩家的重生点
execute if score levelCompleted data matches 1 run spawnpoint @s (本关重生点)
## 传送玩家到重生点 | 仅限多人时运行
execute if score levelCompleted data matches 1 if score playerAmount data matches 2.. run tp @s (本关重生点)

```

### 常规关卡（X-Y）

#### 开始关卡（X-Y） `start.mcfunction`

[↗ 回到各关卡架构](#各关卡架构)

其中，调用的通用函数将设置为：

- 关卡参数：
  - 关卡期间（`data.levelCompleted = 0`）
  - 第 1 波（`data.wave = 1`）
  - 补充玩家的箭和药水
  - 启用时间线
- 玩家处理：
  - 自动播放标题为关卡号
  - 传送所有玩家到第一个进入的玩家处
  - 更改玩家游戏模式（不会在开发者模式下生效）
  - 回满血量
  - 如果多次失败，则提供 BUFF
  - 如果正处于对话状态（`data.timeLapse != 0`），则终止对话
- 关门，封闭关卡
- 清除所有的怪物、御风珠、引导点

```mcfunction showLineNumbers title="aw/levels/chapter(X)/level(Y)/start.mcfunction"
# ===== 开始游戏 =====
# (X)-(Y) | 必须由初次进入的玩家执行

# --- 关卡参数 ---
## 关卡 ID
scoreboard players set level data (Y)
## 最大波数
scoreboard players set maxWave data (最大波数)

# --- 生成怪物 ---
function aw/levels/chapter(X)/level(Y)/waves/wave_1

# --- 调用通用函数 ---
# 必须由初次进入的玩家执行
function aw/lib/events/levels/start_level

# --- 关卡特殊功能 ---
## (功能)
(...)

```

#### 完成关卡（X-Y） `complete.mcfunction`

[↗ 回到各关卡架构](#各关卡架构) | [↗ 查看重生点数据](#各关重生点或检查点位置)

其中，调用的通用函数将设置为：

- 关卡参数
  - 关卡结束（`data.levelCompleted = 1`）
  - 补充玩家的箭和药水
  - 启用时间线
  - 本关失败次数归零（`data.failedCount.thisLevel = 0`）
- 玩家处理：
  - 播放标题为已完成关卡，并播放音效
  - 复活已死亡的玩家，并移除他们的旁观身份（标签`spectator`）
  - 回满血量
  - 设置重生点
- 开门，开放关卡
- 清除所有的怪物、生成器和御风珠

``` mcfunction showLineNumbers title="aw/levels/chapter(X)/level(Y)/complete.mcfunction"
# ===== 完成关卡 =====
# (X)-(Y)

# --- 调用通用函数 ---
execute positioned (本关重生点) run function aw/lib/events/levels/complete_level

# --- 获得新物品 ---
function aw/system/controller/items
tellraw @a {"rawtext":[{"text":"§l§a(X)-(Y)已完成！§r\n§f你已获得 (带颜色的物品名) §f！"}]}

# --- 生成引导点 ---
summon aw:destination (下一关重生点)

# --- 关卡特殊功能 ---
# (功能)
(...)

```

下表是`(带颜色的物品名)`的可用格式。

| 稀有度 | 物品颜色示例 |
| :---: | :---: |
| 普通 | §a[物品名] |
| 稀有 | §b[物品名] |
| 史诗 | §d[物品名] |
| 传奇 | §e[物品名] |

#### 关卡失败（X-Y） `fail.mcfunction`

[↗ 回到各关卡架构](#各关卡架构) | [↗ 查看重生点数据](#各关重生点或检查点位置)

其中，调用的通用函数将设置为：

- 关卡参数
  - 回退关卡数（`data.level -= 1`）
  - 关卡结束（`data.levelCompleted = 1`）
  - 补充玩家的箭和药水
  - 启用时间线
  - 增加本关失败次数（`data.failedCount.thisLevel += 1`）和总失败次数（`data.failedCount.allLevels += 1`）
- 玩家处理：
  - 播放标题为关卡失败，并播放音效
  - 如果关卡失败达到一定次数，提示玩家将在下一局获得 BUFF
  - 复活已死亡的玩家，并移除他们的旁观身份（标签`spectator`）
  - 回满血量
- 开门，开放关卡
- 清除所有的怪物、生成器和御风珠

**注意**：在`重新开放关卡`模块中，不宜开放出口。

```mcfunction showLineNumbers title="aw/levels/chapter(X)/level(Y)/fail.mcfunction"
# ===== 未完成关卡 =====
# (X)-(Y)

# --- 调用通用函数 ---
execute positioned (上关重生点) run function aw/lib/events/levels/fail_level

# --- 生成引导点 ---
summon aw:destination (本关重生点)

# --- 关卡特殊功能 ---
# (功能)
(...)

```

#### 游戏时时间线（X-Y） `gaming.mcfunction`

[↗ 回到各关卡架构](#各关卡架构)

**有关本地图旁观区域的说明**：本地图的旁观机制已经全面升级，采用 1.19.50 的旁观模式。每个关卡都有一个独特的旁观区，已死亡的旁观玩家（含标签`spectator`的玩家）将被严格限制在这个区域内。该区域是由该关卡外壳和内部贴墙实体方块改为屏障而构造的，并处于每关正上方 80 格处。

在**大部分情况下**，以下 3 个模块（`检查怪物是否全部清除`、`检查存活玩家数目`、`阻止旁观模式的玩家出界`）是**必选**的，在非特殊情况下应全部保留且不宜做过多更改。

```mcfunction showLineNumbers title="aw/levels/chapter(X)/level(Y)/gaming.mcfunction"
# ===== 关卡游戏时时间线 =====
# (X)-(Y)

# --- 检查怪物是否全部清除 ---
## 第 1 波 -> 第 2 波
execute unless entity @e[type=aw:spawner] if score wave data matches 1 if score monsterAmount data matches 0 run function aw/levels/chapter(X)/level(Y)/waves/wave_2
## 第 2 波 -> 第 3 波
execute unless entity @e[type=aw:spawner] if score wave data matches 2 if score monsterAmount data matches 0 run function aw/levels/chapter(X)/level(Y)/waves/wave_3
## 第 3 波 -> 第 4 波
execute unless entity @e[type=aw:spawner] if score wave data matches 3 if score monsterAmount data matches 0 run function aw/levels/chapter(X)/level(Y)/waves/wave_4
## 第 4 波 -> 第 5 波
execute unless entity @e[type=aw:spawner] if score wave data matches 4 if score monsterAmount data matches 0 run function aw/levels/chapter(X)/level(Y)/waves/wave_5
## 第 (n) 波 -> 关卡完成
execute unless entity @e[type=aw:spawner] if score wave data matches (n) if score monsterAmount data matches 0 run function aw/levels/chapter(X)/level(Y)/complete

# --- 检查存活玩家数目 ---
# 如果存活玩家数目为 0，则触发关卡失败函数
execute if score alivePlayerAmount data matches 0 run function aw/levels/chapter(X)/level(Y)/fail

# --- 阻止旁观模式的玩家出界 ---
# 不处理正处于死亡状态的玩家
# 在该关卡上方80格的位置存在与该房间同样大小的屏障外壳，只要眼部检查到上方80格为屏障就立刻判定为出界
execute as @a[tag=spectator,scores={deathState=0}] at @s anchored eyes if block ~~80~ barrier positioned (本关重生点) run function aw/lib/events/player_out_of_border
# 阻止部分因网络波动的玩家意外在上一关以冒险模式重生（#110，见https://github.com/YZBWDLT/Adventure-World-4/issues/110）
# 无论何种情况，玩家实际上在上一关的位置都是不符合预期的
execute as @a positioned (上关重生点) if entity @s[r=2] run tp @s (本关重生点)

```

---

如果关卡中含有中型或大型岩浆怪，应当启用关卡完成倒计时来避免岩浆怪分裂的相关问题。在`检查怪物是否全部清除`模块中的前两行新增命令：

```mcfunction showLineNumbers title="检查怪物是否全部清除"
## 关卡完成倒计时
execute if score levelCompleteCountdown time matches 1.. if score monsterAmount data matches 0 run scoreboard players remove levelCompleteCountdown time 1
execute if score levelCompleteCountdown time matches 1.. unless score monsterAmount data matches 0 run scoreboard players set levelCompleteCountdown time 60

```

然后，在对应波潮的完成条件中新增`if score levelCompleteCountdown time matches ..0`条件。并且，为了能够使得分裂出来的岩浆怪的名称正确显示，还需要添加一个新模块`重命名岩浆怪`：

```json showLineNumbers title="重命名岩浆怪"
# --- 重命名岩浆怪 ---
function aw/lib/events/rename_magma_cube

```

#### 游戏后时间线（X-Y） `after_gaming.mcfunction`

[↗ 回到各关卡架构](#各关卡架构) | [↗ 查看重生点数据](#各关重生点或检查点位置)

**注意**：`检查玩家进入下一个关卡`中有可能会出现跨章，例如 1-3 的下一关是 2-0 而不是 1-4。

```mcfunction showLineNumbers title="aw/levels/chapter(X)/level(Y)/after_gaming.mcfunction"
# ===== 关卡游戏后时间线 =====
# (X)-(Y)

# --- 检查玩家进入下一个关卡 ---
execute positioned (下关重生点) positioned ~-0.95~-1~-0.95 as @a[dx=0.9,dy=3,dz=0.9,tag=!spectator,scores={deathState=0}] at @s run function aw/levels/chapter(X)/level((Y)+1)/start
execute positioned (下关重生点) positioned ~-2~-1~-2 as @e[dx=3,dy=3,dz=3,type=aw:wind_pearl] run kill @s

# --- 剧情 ---
execute if score timeline time matches (时间点) run tellraw @a {"rawtext":[{"text":"* (人物颜色代码)(人物)： §7(剧情)"}]}
execute if score timeline time matches (时间点2).. run function aw/lib/modify_data/timeline/disable_time_lapse

```

#### 波潮数据（X-Y） `wave_n.mcfunction`

[↗ 回到各关卡架构](#各关卡架构) | [↗ 查看重生点数据](#各关重生点或检查点位置)

**注意**：部分怪物不分等级。详见[怪物生成器](#怪物生成器)。

适用于第 1 波的模板：

```mcfunction showLineNumbers title="aw/levels/chapter(X)/level(Y)/waves/wave_1.mcfunction"
# ===== 第 1 波 =====

# --- 更新波数信息 ---
execute positioned -83 1 -2 run function aw/lib/events/levels/wave_1

# --- 生成怪物生成器 ---

## (怪物1)
summon aw:spawner (位置) 0 0 aw:spawn_((怪物1)ID)_((怪物1)等级)
## (怪物2)
summon aw:spawner (位置) 0 0 aw:spawn_((怪物2)ID)_((怪物2)等级)
## (怪物3)
summon aw:spawner (位置) 0 0 aw:spawn_((怪物3)ID)_((怪物3)等级)
## (怪物4)
summon aw:spawner (位置) 0 0 aw:spawn_((怪物4)ID)_((怪物4)等级)
## (怪物5)
summon aw:spawner (位置) 0 0 aw:spawn_((怪物5)ID)_((怪物5)等级)

# --- (功能) ---
(...)

```

适用于第 2 波及更高波的模板：

```mcfunction showLineNumbers title="aw/levels/chapter(X)/level(Y)/waves/wave_(m).mcfunction"
# ===== 第 (m) 波 =====

# --- 波潮完成通用函数 ---
execute positioned (本关重生点) run function aw/lib/events/levels/complete_wave

# --- 更新波数信息 ---
execute positioned -83 1 -2 run function aw/lib/events/levels/wave_(m)

# --- 生成怪物生成器 ---

## (怪物1)
summon aw:spawner (位置) 0 0 aw:spawn_((怪物1)ID)_((怪物1)等级)
## (怪物2)
summon aw:spawner (位置) 0 0 aw:spawn_((怪物2)ID)_((怪物2)等级)
## (怪物3)
summon aw:spawner (位置) 0 0 aw:spawn_((怪物3)ID)_((怪物3)等级)
## (怪物4)
summon aw:spawner (位置) 0 0 aw:spawn_((怪物4)ID)_((怪物4)等级)
## (怪物5)
summon aw:spawner (位置) 0 0 aw:spawn_((怪物5)ID)_((怪物5)等级)

# --- (功能) ---
(...)

```

#### 玩家退出重进（X-Y） `player_rejoin.mcfunction`

[↗ 回到各关卡架构](#各关卡架构) | [↗ 查看重生点数据](#各关重生点或检查点位置)

```mcfunction showLineNumbers title="aw/levels/open/stage(Y)/after_gaming.mcfunction"
# ===== 玩家退出重进 =====
# (X)-(Y)

# --- 通用 ---

## 传送玩家到重生点处 | 仅限多人模式下运行
execute if score playerAmount data matches 2.. run tp @s (本关重生点)

# --- 完成关卡前 ---

## 设置玩家的重生点
execute if score levelCompleted data matches 0 run spawnpoint @s (上关重生点)
## 设置玩家为旁观模式 | 仅限多人模式下运行
execute if score levelCompleted data matches 0 if score playerAmount data matches 2.. run tellraw @s {"rawtext":[{"translate":"§e检测到您重新进入游戏，已将您调整为旁观者。在下一波开始后，您便可以参与游戏。"}]}
execute if score levelCompleted data matches 0 if score playerAmount data matches 2.. run tag @s add spectator
execute if score levelCompleted data matches 0 if score playerAmount data matches 2.. run gamemode spectator @s

# --- 完成关卡后 ---

## 设置玩家的重生点
execute if score levelCompleted data matches 1 run spawnpoint @s (本关重生点)

```

## 关卡数据

### 各关重生点或检查点位置

[↗ 回到完成关卡（村庄）](#完成关卡村庄-completemcfunction) | [↗ 回到游戏后时间线（村庄）](#游戏后时间线村庄-after_gamingmcfunction) | [↗ 回到玩家退出重进（村庄）](#玩家退出重进村庄-player_rejoinmcfunction)

[↗ 回到完成关卡（X-0）](#完成关卡x-0-completemcfunction) | [↗ 回到游戏后时间线（X-0）](#游戏后时间线x-0-after_gamingmcfunction) | [↗ 回到玩家退出重进（X-0）](#玩家退出重进x-0-player_rejoinmcfunction)

[↗ 回到完成关卡（X-Y）](#完成关卡x-y-completemcfunction) | [↗ 回到游戏后时间线（X-Y）](#游戏后时间线x-y-after_gamingmcfunction) | [↗ 回到玩家退出重进（X-Y）](#玩家退出重进x-y-player_rejoinmcfunction) | [↗ 回到关卡失败（X-Y）](#关卡失败x-y-failmcfunction) | [↗ 回到波潮数据（X-Y）](#波潮数据x-y-wave_nmcfunction)

**有关本地图的重生点的说明**：本地图各关都有自己独特的重生点。重生点通常设置在任务点入口或房间入口处，同时兼顾下面两种任务：

1. 检查玩家是否靠近任务点或房间；
2. 设置玩家的重生点。

**应设定只有通过关卡后，才能将重生点设置到本关重生点处**。这是因为，如果直接把重生点设置到本关区域时，会在重生后且关卡失败后，使玩家重新复活到本关判定区，从而造成严重问题。这也就意味着，当进行关卡时（比如 1-2），玩家实际会重生在 1-1 的重生点处。在多人模式下，可由旁观机制将超出区域限制的玩家拉回来。

| | X-0 | X-1 | X-2 | X-3 | X-4 | X-5 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 0-Y（村庄剧情） | —— | -27 6 -48 | -26 1 -37 | 36 1 -22 | -16 1 82 | -18 -3 99 |
| 1-Y | -117 1 -6 | -117 2 16 | -126 6 52 | -137 12 33 | —— | —— |
| 2-Y | -79 19 26 | -75 19 60 | -72 1 69 | -143 -20 61 | —— | —— |
| 3-Y | -173 -20 30 | -188 -20 29 | -172 -20 11 | -163 -20 28 | -170 -14 23 | —— |
| 4-Y | -173 18 -8 | -168 18 -20 | -156 8 -1 | -156 -11 14 | -141 -30 6 | —— |
| 5-Y | -95 -30 -6 | —— | —— | —— | —— | —— |
| 6-Y | -81 -30 -28 | -76 -30 -48 | -80 -18 -48 | -75 -36 -15 | -75 -38 22 | —— |
| 7-Y | 完成前<br/>-87 -39 96<br/>完成后<br/>-119 -16 103 | -119 -16 103 | -161 -17 110 | -194 -17 97 | -225 -17 99 | -225 -47 44 |
| 10-Y（完结剧情） | —— | -27 7 -48 | -27 7 -48 | -16 1 82 | —— | —— |

## 地图变量

### 玩家数据

| 变量名 | 含义 | 允许值 | 默认值 |
| :---: | --- | :---: | :---: |
| `deathCount.@s` | 玩家当前死亡次数 | `0`- | `0` |
| `deathState.@s` | 玩家当前死亡状态 | `0`：存活，`1`：刚刚死亡（还未记录死亡榜），`2`：长期死亡 | `0` |
| `health.@s` | 玩家生命值 | 整数 | 实时判断 |
| `killCount.@s` | 玩家击杀数 | `0`- | `0` |
| `isOnline.@s` | 玩家是否在线 | `0`：刚进入游戏，`1`：在线 | `1` |
| `gameId.@s` | 玩家当前的游戏 ID，与`data.gameId`一致时则为本次游戏 | `1000`-`9999` | 在可选范围内随机 |

### `active`

| 变量名 | 含义 | 允许值 | 默认值 |
| :---: | --- | :---: | :---: |
| `active.sound` | 音效播放器类型，按不同值播放不同的音效 | `0`：禁用，`1`-：启用 | `0` |
| `active.timeline` | 时间线是否启用 | `0`：禁用，`1`-：启用 | `0` |

### `data`

| 变量名 | 含义 | 允许值 | 默认值 |
| :---: | --- | :---: | :---: |
| `data.alivePlayerAmount` | 存活的玩家人数 | `0`- | 实时判断 |
| `data.allowAcousticStoneCrystal` | 是否启用传声石结晶 | `0`：禁用，`1`：启用 | `0` |
| `data.allowNpcInteraction` | NPC 是否允许交互 | `0`：禁用，`1`：启用 | `1` |
| `data.allowRemoveItemEntity` | 是否允许移除掉落物实体 | `0`：不允许，`1`：允许 | `1` |
| `data.allowTpPlayerWhenStart` | 是否允许在开始游戏时传送玩家 | `0`：不允许，`1`：允许 | `1` |
| `data.chapter` | 当前正在进行的章节数 | `0`：开始前&村庄，`1`-`7`：游戏章节，`10`：结束后的村庄 | `0` |
| `data.client` | 当前使用的客户端 | `0`：国际版，`1`：中国版 | `0` |
| `data.failedCount.allLevels` | 总失败次数 | `0`- | `0` |
| `data.failedCount.thisLevel` | 本关的失败次数 | `0`- | `0` |
| `data.gaming` | 是否正在 X-Y（1\<=X\<=7, Y!=0）的游玩状态 | `0`：未处于游玩状态，`1`：正处于游玩状态 | `0` |
| `data.gameId` | 本局游戏 ID，与玩家的`gameId.@s`一致时则为本次游戏 | `1000`-`9999` | 在可选范围内随机 |
| `data.hasCheat` | 是否有玩家启用了创造模式作弊 | `0`：无，`1`：有 | `0` |
| `data.keepValue` | 进行时间线设置时是否保留原有的时间线值 | `0`：不保留，`1`：保留 | `0` |
| `data.level` | 当前正在进行的章节所属的关卡 | `0`-`5` | `0` |
| `data.levelCompleted` | 关卡是否完成 | `0`：进行中，`1`：已完成 | `1` |
| `data.maxWave` | 本关目前最大波数 | `1`-`5` | `1` |
| `data.monsterAmount` | 怪物数，在 4-4 排除守卫者 | `0`- | 实时判断 |
| `data.playerAmount` | 玩家总人数 | `0`- | 实时判断 |
| `data.potionUsed` | 是否有玩家使用过主药水或副药水 | `0`：没有，`1`：有 | `0` |
| `data.timeLapse` | 时间线是否启用时间流逝 | `0`：禁用，`1`-：启用 | `0` |
| `data.wave` | 本关目前所处波数 | `1`-`5` | `1` |

### `record`

| 变量名 | 含义 | 允许值 | 默认值 |
| :---: | --- | :---: | :---: |
| `settings.developerMode` | 开发者模式是否启用 | `0`：禁用，`1`：启用 | `0` |
| `record.achievement.multiPlayer.difficulty4` | 多人成就[挑战极限]的获取状态 | `0`：未获取，`1`：已获取 | `0` |
| `record.achievement.multiPlayer.finishMap` | 多人成就[齐心协力]的获取状态 | `0`：未获取，`1`：已获取 | `0` |
| `record.achievement.multiPlayer.killLessThan50` | 多人成就[躺赢]的获取状态 | `0`：未获取，`1`：已获取 | `0` |
| `record.achievement.multiPlayer.killMoreThan200` | 多人成就[全靠我带飞]的获取状态 | `0`：未获取，`1`：已获取 | `0` |
| `record.achievement.multiPlayer.neverDied` | 多人成就[人多力量大]的获取状态 | `0`：未获取，`1`：已获取 | `0` |
| `record.achievement.multiPlayer.speedrun` | 多人成就[势如破竹]的获取状态 | `0`：未获取，`1`：已获取 | `0` |
| `record.achievement.singlePlayer.difficulty2` | 单人成就[挑战自我]的获取状态 | `0`：未获取，`1`：已获取 | `0` |
| `record.achievement.singlePlayer.difficulty3` | 单人成就[举步维艰]的获取状态 | `0`：未获取，`1`：已获取 | `0` |
| `record.achievement.singlePlayer.difficulty4` | 单人成就[这不可能！]的获取状态 | `0`：未获取，`1`：已获取 | `0` |
| `record.achievement.singlePlayer.finishMap` | 单人成就[神剑的恩惠]的获取状态 | `0`：未获取，`1`：已获取 | `0` |
| `record.achievement.singlePlayer.neverDied` | 单人成就[让田英睡觉去吧！]的获取状态 | `0`：未获取，`1`：已获取 | `0` |
| `record.achievement.singlePlayer.noPotion` | 单人成就[纯天然]的获取状态 | `0`：未获取，`1`：已获取 | `0` |
| `record.achievement.singlePlayer.speedrun` | 单人成就[别挡道，我很急！]的获取状态 | `0`：未获取，`1`：已获取 | `0` |
| `record.bestTime.multiPlayer.difficulty1.minute` | 单人模式的最佳游戏时间（难度 1，单位：分钟） | `0`- | `9999` |
| `record.bestTime.multiPlayer.difficulty1.second` | 单人模式的最佳游戏时间（难度 1，单位：秒） | `0`- | `59` |
| `record.bestTime.multiPlayer.difficulty2.minute` | 单人模式的最佳游戏时间（难度 2，单位：分钟） | `0`- | `9999` |
| `record.bestTime.multiPlayer.difficulty2.second` | 单人模式的最佳游戏时间（难度 2，单位：秒） | `0`- | `59` |
| `record.bestTime.multiPlayer.difficulty3.minute` | 单人模式的最佳游戏时间（难度 3，单位：分钟） | `0`- | `9999` |
| `record.bestTime.multiPlayer.difficulty3.second` | 单人模式的最佳游戏时间（难度 3，单位：秒） | `0`- | `59` |
| `record.bestTime.multiPlayer.difficulty4.minute` | 单人模式的最佳游戏时间（难度 4，单位：分钟） | `0`- | `9999` |
| `record.bestTime.multiPlayer.difficulty4.second` | 单人模式的最佳游戏时间（难度 4，单位：秒） | `0`- | `59` |
| `record.bestTime.singlePlayer.difficulty1.minute` | 单人模式的最佳游戏时间（难度 1，单位：分钟） | `0`- | `9999` |
| `record.bestTime.singlePlayer.difficulty1.second` | 单人模式的最佳游戏时间（难度 1，单位：秒） | `0`- | `59` |
| `record.bestTime.singlePlayer.difficulty2.minute` | 单人模式的最佳游戏时间（难度 2，单位：分钟） | `0`- | `9999` |
| `record.bestTime.singlePlayer.difficulty2.second` | 单人模式的最佳游戏时间（难度 2，单位：秒） | `0`- | `59` |
| `record.bestTime.singlePlayer.difficulty3.minute` | 单人模式的最佳游戏时间（难度 3，单位：分钟） | `0`- | `9999` |
| `record.bestTime.singlePlayer.difficulty3.second` | 单人模式的最佳游戏时间（难度 3，单位：秒） | `0`- | `59` |
| `record.bestTime.singlePlayer.difficulty4.minute` | 单人模式的最佳游戏时间（难度 4，单位：分钟） | `0`- | `9999` |
| `record.bestTime.singlePlayer.difficulty4.second` | 单人模式的最佳游戏时间（难度 4，单位：秒） | `0`- | `59` |
| `record.mapCompletedTimes` | 地图通关次数 | `0`- | `0` |

### `settings`

| 变量名 | 含义 | 允许值 | 默认值 |
| :---: | --- | :---: | :---: |
| `settings.developerMode` | 开发者模式是否启用 | `0`：禁用，`1`：启用 | `0` |
| `settings.difficulty` | 地图难度 | `1`-`4` | `1` |
| `settings.extraDifficulty` | 额外地图难度，直接累加到地图难度（基础值）上 | `-3`-`3` | `0` |
| `settings.storyMode` | 剧情模式是否启用 | `0`：禁用，`1`：启用 | `0` |

### `time`

| 变量名 | 含义 | 允许值 | 默认值 |
| :---: | --- | :---: | :---: |
| `time.levelCompleteCountdown` | 关卡完成倒计时，在怪物全部被消灭后还有多久完成关卡，仅在部分有岩浆怪的关卡中使用（单位：游戏刻） | `0`-`60` | `0` |
| `time.sound` | 音效播放器，为 0 时触发特定音效（单位：游戏刻） | `0`- | `0` |
| `time.tick` | 每刻增加 1 分，每秒重置 1 次（单位：游戏刻） | `0`-`19` | `0` |
| `time.timeline` | 时间线，到达特定值后触发命令或函数（单位：游戏刻） | `0`- | `0` |
| `time.playedSecond` | 玩家游玩的时长，仅限开始游戏后记录（单位：秒） | `0`- | `0` |
| `time.playedMinute` | 玩家游玩的时长，仅限开始游戏后记录（单位：分钟） | `0`- | `0` |

### 标签型变量

| 变量名 | 含义 | 默认值 |
| :---: | --- | :---: |
| `outOfBorder` | 玩家是否在旁观模式下出界 | `false` |
| `spectator` | 玩家是否在游戏中死亡，成为旁观者 | `false` |
| `supplyArrow` | 是否为玩家提供箭 | `false` |
| `supplyAllPotions` | 是否为玩家提供药水（全种类） | `false` |

## NPC 等人物

### NPC 名称颜色

| 人物 | 人物颜色代码 |
| :---: | :---: |
| 林乐（我） | §f |
| 田英 | §b |
| 米云溪 | §c |
| 张宇 | §e |
| 其他 NPC | §e |

### NPC 事件

| 事件 ID | 描述 |
| :--- | :--- |
| `aw:interacted` | 该 NPC 正被交互，当`data.allowNpcInteraction == 1`时执行交互事件函数`aw/entities/npc/interacted` |
| `aw:see_player` | 允许 NPC 迅速面向玩家 |
| `aw:ignore_player` | 禁止 NPC 面向玩家，维持当前朝向 |
| `aw:remove_immediately` | 立刻无声地移除 NPC |
| `aw:author_(作者ID)` | 召唤对应 XBoxID 的作者，应为全小写，空格以下划线代替，例如召唤 kuanpan 9527 应写为`aw:author_kuanpan_9527`，详情见游戏内事件 |
| `aw:npc_(NPC名字)` | 召唤对应名字的 NPC，例如召唤米云溪应写为`aw:npc_miyunxi`，详情见游戏内事件 |
| `aw:state_(NPC状态)` | 令 NPC 进入某种动画状态，例如使 NPC 站立应写为`aw:state_stand`，详情见游戏内事件 |
| `aw:animation_(NPC名字)` | 令 NPC 播放某种特定动画，例如使 NPC 说话应写为`aw:animation_speak`，详情见游戏内事件 |

## 怪物生成器

| 怪物 | `event`定义 | `aw:monster_type`对应的 ID |
| :---: | :--- | :---: |
| 僵尸 | `aw:spawn_zombie_(1\|2\|3\|4)` | `1` |
| 小僵尸 | `aw:spawn_zombie_baby_(1\|2\|3\|4)` | `2` |
| 尸壳 | `aw:spawn_husk` | `3` |
| 小尸壳 | `aw:spawn_husk_baby` | `4` |
| 僵尸猪灵 | `aw:spawn_zombified_piglin_(1\|2\|3\|4)` | `5` |
| 溺尸 | `aw:spawn_drowned_(1\|2\|3)` | `6` |
| 三叉戟溺尸 | `aw:spawn_drowned_trident` | `7` |
| 骷髅 | `aw:spawn_skeleton_(1\|2\|3\|4)` | `8` |
| 骷髅敢死队 | `aw:spawn_skeleton_sword_(1\|2)` | `9` |
| 流浪者 | `aw:spawn_stray_(1\|2\|3\|4)` | `10` |
| 蜘蛛 | `aw:spawn_spider_(1\|2\|3\|4)` | `11` |
| 洞穴蜘蛛 | `aw:spawn_cave_spider_(1\|2\|3\|4)` | `12` |
| 苦力怕 | `aw:spawn_creeper_(energy\|hard\|normal\|speed)` | `13` |
| 守卫者 | `aw:spawn_guardian` | `14` |
| 猪灵 | `aw:spawn_piglin_(1\|2\|3\|4)` | `15` |
| 猪灵蛮兵 | `aw:spawn_piglin_brute` | `16` |
| 疣猪兽 | `aw:spawn_hoglin_(1\|2\|3\|4)` | `17` |
| 蠹虫 | `aw:spawn_silverfish_(1\|2\|3\|4)` | `18` |
| 岩浆怪 | `aw:spawn_magma_cube_(small\|middle\|large)` | `19` |
| 恶魂 | `aw:spawn_ghast` | `20` |
| 女巫 | `aw:spawn_witch` | `21` |
| 骷髅王 | `aw:spawn_skeleton_king` | `22` |
| 远古守卫者 | `aw:spawn_elder_guardian` | `23` |
| 烈焰之魂 | `aw:spawn_blaze_king` | `24` |
| 唤魔法师 | `aw:spawn_evoker` | `25` |
| 带盾僵尸 | `aw:spawn_zombie_shield` | `26` |

## 当前已知问题 & Todo list

[↗ 跳转到 Github Issue](https://github.com/YZBWDLT/Adventure-World-4/issues)

- **全局**
  - **成就**
    - [ ] 加一个2-2不使用底部机关通过的成就？
    - [ ] 加一个2-3不受伤通过的成就？
  - **怪物生成**
    - [ ] 召唤音效声音太大，可考虑更换一个召唤音效
- 2-3 是否启用倒计时机制？
