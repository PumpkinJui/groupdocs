# 函数系统 v2 文档

> **提示**  
  该文章正在编写中。在该窗口被移除前，请不要对文章内容进行进一步的修改与提交。
  
## 包性质

本包为行为包。

我们建议您把此包和「标记实体和文本展示实体」结合使用，效果更好。否则，其中的部分内容可能需要您的单独适配。

## 使用说明

* 本包已经搭建了一套较为初步的底层函数命令系统，以便您基于此底层系统编写命令。

* 在下文，我们把 a 记分板上名为 b 的追踪目标记为`a.b`。
    * 例如，检测`a.b`的分数是否为1，为`/execute if score b a matches 1`。

### 系统函数 `system/`

系统函数是本包搭建的最基础的运行系统。本包循环执行函数`system/main`，执行以下功能：

#### 时间控制器

它将控制`time.tick`每 1 刻加`1`分，在`0`-`19`之间循环。

因此，您可以使用`execute if score tick time matches <0-19之间的任意一个整数> run <命令>`来每秒执行一次指定命令。

#### 时间线

> **提示**  
  该文章正在编写中。在该窗口被移除前，请不要对文章内容进行进一步的修改与提交。

#### 音效控制器

当玩家传送后的瞬间执行`/playsound`命令会导致玩家无法听见这声音，音效控制器因此而生。

音效控制器有启用机制和时间线机制。

##### 启用机制

仅当音效控制器处于激活状态下，才会延时播放音效。不同的音效控制器状态，会导致播放不同的音效。音效控制器文件位于`system/controller/sound`。

> **注意**  
  这要求您必须确保您要执行的`/playsound`命令在音效控制器文件中注册过。

音效控制器的启用，由`active.sound`控制。

##### 时间线机制

音效控制器的时间值，由`time.sound`记录。

若时间值为`1`或更大的值，则`time.sound`会每刻自减以进行倒计时，当倒计时归零后，系统会自动将启用状态改为`0`，并且`time.sound`会改为一个非零的值。

> **注意**  
  在启用音效控制器之前，请先保证`time.sound`为一个非零的值。

##### 一些例子

在 30 种死法 2 中使用的音效控制器文件如下。

```
# ===== 音效播放器 =====
# 该控制器将按照不同的active.sound值执行不同的音效效果。
# <!> 注意：该函数仅当音效播放器启用后执行

# --- 音效倒计时 ---
scoreboard players remove sound time 1

# --- 音效事件 ---
# 当音效倒计时为0后执行

## 1 | random.orb | 音调1
execute if score sound time matches 0 if score sound active matches 1 as @a at @s run playsound random.orb @s ~~~ 1 1
## 2 | random.orb | 音调2
execute if score sound time matches 0 if score sound active matches 2 as @a at @s run playsound random.orb @s ~~~ 1 2
## 3 | mob.villager.yes | 音调1
execute if score sound time matches 0 if score sound active matches 3 as @a at @s run playsound mob.villager.yes @s ~~~ 1 1
## 4 | mob.villager.no | 音调1
execute if score sound time matches 0 if score sound active matches 4 as @a at @s run playsound mob.villager.no @s ~~~ 1 1
## 5 | mob.cat.meow | 音调0.75
execute if score sound time matches 0 if score sound active matches 5 as @a at @s run playsound mob.cat.meow @s ~~~ 1 0.75
## 6 | random.anvil_break | 音调0.5
execute if score sound time matches 0 if score sound active matches 6 as @a at @s run playsound random.anvil_break @s ~~~ 1 0.5
## 7 | random.levelup | 音调1
execute if score sound time matches 0 if score sound active matches 7 as @a at @s run playsound random.levelup @s ~~~ 1 1
## 8 | random.levelup | 音调2
execute if score sound time matches 0 if score sound active matches 8 as @a at @s run playsound random.levelup @s ~~~ 1 2
## 9 | smithing_table.use | 音调1
execute if score sound time matches 0 if score sound active matches 9 as @a at @s run playsound smithing_table.use @s ~~~ 1 1
## 10 | hard_achievement_complete | 音调1，音量0.5
execute if score sound time matches 0 if score sound active matches 10 as @a at @s run playsound hard_achievement_complete @s ~~~ 0.5 1
## 11 | random.pop | 音调1
execute if score sound time matches 0 if score sound active matches 11 as @a at @s run playsound random.pop @s ~~~ 1 1
## 12 | random.anvil_land | 音调1
execute if score sound time matches 0 if score sound active matches 12 as @a at @s run playsound random.anvil_land @s ~~~ 1 1
## 13 | random.glass | 音调1
execute if score sound time matches 0 if score sound active matches 13 as @a at @s run playsound random.glass @s ~~~ 1 1

# --- 重置音效播放器 ---
# 当音效倒计时为0后执行
execute if score sound time matches 0 run function lib/modify_states/sound/reset
```

这样，当启用状态为`13`时，倒计时结束后将播放玻璃破碎的音效。

#### 反作弊系统

> **注意**  
  此函数无条件地循环执行。

您可以在其中插入您需要的反作弊命令。下面提供了一些您可能需要的反作弊字段。

```
# --- 游戏模式限制 ---
# 仅在非开发者模式下执行
execute unless score developerMode settings matches 1 as @a[m=!adventure] run gamemode adventure @s
```

```
# --- 禁止玩家放船 ---
kill @e[family=boat]
```

```
# --- 禁止玩家投掷末影珍珠 ---
kill @e[family=ender_pearl]
```

```
# --- 禁止玩家搭建传送门 ---
execute as @a at @s run fill  -5 -5 -5 5 5 5 air replace portal
execute as @a at @s run fill  -5 -5 -5 5 5 5 air replace end_portal
```

#### 反退出系统

> **注意**  
  此函数无条件地循环执行。

此函数将检测玩家是否为重进地图的玩家，如果是，则该玩家的`isOnline.@s`将被改为`0`，这样，您就可以通过反退出系统令退出重进的玩家执行特定的命令，防止他们对您的地图造成严重打击。

如果您对此系统的运行机理感兴趣，您可自行查看对应函数的命令了解详情。

### 库函数 `lib/`

库函数是在您的资源各处都多次调用的，由几条简单的命令组成的函数。

如果您在编写函数的过程中，发现了一些您可能需要不断使用的重复的命令，您就可以将它们打包为一个库函数。

使用库函数的好处很多，最大的优点莫过于「**一次更改，全局生效**」！

在库函数中装了一些您可能需要的获取数据、或更改数据的函数。

#### 获取数据的函数

1. 获取玩家数目（`lib/get_data/amount_player`），它会将玩家数目输出到变量`data.playerAmount`中。

2. 获取玩家客户端为国际版还是网易版（`lib/get_data/client`），它会将目前服务端正在使用的版本输出到变量`data.client`中，`0`代表国际版，`1`代表中国版。

3. 获取玩家是否在游戏意义上地存活（`lib/get_data/player_is_alive`）。使用此函数后，仍然存活的玩家（即未处于死亡状态）将拥有`isAlive`标签。

4. 获取玩家是否退出重进（`lib/get_data/player_is_online_before`和`lib/get_data/player_is_online_after`）。这是反退出系统的基础函数，请勿修改。

5. 获取玩家状态是站立、潜行、爬行和游泳、睡觉（`lib/get_data/player_state`），并将这状态输出到变量`state.@s`中。`0`代表站立，`1`代表潜行，`2`代表爬行，`3`代表睡觉。

#### 更改数据的函数

1. 初始化所有记分板数值（`lib/modify_data/init/data`）。您需要将您需要的变量在此进行注册。

2. 初始化所有 gamerule（`lib/modify_data/init/gamerule`）。您可按需修改这些值。

#### 更改时间线、剧情线、音效控制器状态的函数

> **提示**  
  该文章正在编写中。在该窗口被移除前，请不要对文章内容进行进一步的修改与提交。

以下是包自带的更改时间线、剧情线、音效控制器状态的函数。**我们建议使用这些库函数更改它们的状态！**

1. 设置时间线状态（`lib/modify_states/timeline/`），其中带`_keep`的是不会更改`time.timeline`值的函数。

2. 设置音效控制器状态（`lib/modify_states/sound/`）。

##### 一些例子

- 延时播放`random.orb`音效：

```
function lib/modify_states/sound/random_orb
```

#### 自定义库函数

您在开发过程中一定会遇到需要重复使用某几条命令的情况。在这种情况下，我们强烈建议您打包成一个库函数，并在您需要的时候重复调用。如果您要编写一个库函数，您可以按照下面的格式编写：

```
# ===== <函数功能> =====
# <函数具体功能>

# 调用此方法时：
# · 执行者为<某实体>
# · 执行位置为<某位置>
# 输出结果：
# · <会造成的某种结果，例如记分板数值的输出>

# --- <功能> ---
<具体命令>
```

##### 例子 - 延时播放`random.levelup`音效

这个实例并没有在包中给出，但我们可以模仿已有的内容进行编写。首先你需要打开音效控制器文件，包中的内容如下：

```
# ===== 音效播放器 =====
# <!> 注意：该函数仅当音效播放器启用后执行

# --- 音效倒计时 ---
scoreboard players remove sound time 1

# --- 音效事件 ---
# 当音效倒计时为0后执行
execute if score sound time matches 0 if score sound active matches 1 as @a at @s run playsound random.orb @s ~~~ 1 1

# --- 重置音效播放器 ---
# 当音效倒计时为0后执行
execute if score sound time matches 0 run function lib/modify_states/sound_player/reset
```

您可以在「音效事件」模块中加入下面一行：

```
execute if score sound time matches 0 if score sound active matches 2 as @a at @s run playsound random.levelup @s ~~~ 1 1
```

即在音效控制器启用状态为`2`时执行`playsound random.levelup @s ~~~ 1 1`命令。然后，在库文件夹（`lib/modify_states/sound/`）中创建一个新的函数`random_levelup.mcfunction`，写入以下内容：

```
# ===== 播放升级音效 =====
# 用于延时播放升级音效。

# 调用此方法时：
# · 执行者任意
# · 执行位置任意
# 输出结果：
# · 3刻后播放升级音效

# --- 启用音效播放器 ---

## 启用音效播放器
scoreboard players set sound active 2
## 将音效播放器时间重置
scoreboard players set sound time 3
```
时间参数是您可以自定义的。这样，您便可以通过使用下面的命令延时播放这个音效：
```
function lib/modify_states/sound/random_levelup
```

##### 例子 - 30 种死法 2 中的一个给予物品的库函数

位于`lib/modify_data/reset_and_quit`。在该地图中，重置与退出物品是经常要给予的物品，因此需要使用这样的库函数不断地重复调用。

```
# ===== 重置与退出 =====
# 用于给予玩家重置与退出

# 调用此方法时：
# · 执行者为玩家
# · 执行位置任意
# 输出结果：
# · 若玩家没有重置与退出物品，则给予玩家重置与退出

# --- 清除物品 ---
function lib/modify_data/item/clear

# --- 给予重置与退出 ---
give @s[hasitem={item=wstd:reset,quantity=0}] wstd:reset 1 0 { "item_lock": { "mode": "lock_in_inventory" } }
give @s[hasitem={item=wstd:quit,quantity=0}] wstd:quit 1 0 { "item_lock": { "mode": "lock_in_inventory" } }
replaceitem entity @s[hasitem={item=wstd:play_music,quantity=0}] slot.inventory 8 wstd:play_music 1 0 { "item_lock": { "mode": "lock_in_inventory" } }
```
