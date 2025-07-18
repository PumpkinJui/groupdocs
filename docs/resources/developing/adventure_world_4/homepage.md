---
sidebar_position: 1
title: 主页
description: 《冒险世界：苏醒》的续作，一张完美适配多人的丰富PVE地图！
---

# 冒险小世界：剑之试炼

冒险小世界：剑之试炼是一张规模中等偏大的地图。该地图于 2024 年劳动节期间发布，是基于狂野巴豆的冒险世界系列第 4 部作品，属于「冒险世界：苏醒」的 DLC 。处于更新状态，并发布于多个平台。

关于冒险世界系列的其他地图，参见：

- [冒险世界：逃离](../adventure_world_1/homepage)
- [冒险世界：苏醒](../adventure_world_2/homepage)
- [冒险世界：迷失](../adventure_world_3/homepage)
- 冒险小世界：剑之试炼（本页面）
- [冒险世界：筑梦](../../developing/adventure_world_5/homepage)

---

## 基本信息

- **作者** 狂野巴豆（**@巴豆**）、一只卑微的量筒（**@量筒**）、o绿叶o（**@绿叶**）
- **制作人表** 详情见[制作人表页面](credits)
- **版本需求** 1.20.30+（4.1） | 1.21.0+（4.2+）
- **资源类型** 地图 - PVE 地图
- **最新版本** 4.1（正式版） | Alpha 4.2_01（测试版）
- **更新日志** 详情见[更新日志页面](update_log/4_2)
- **漏洞汇报** 详情见[GitHub Issues](https://github.com/YZBWDLT/Adventure-World-4/issues)

---

## 下载

有多种途径都可以下载或找到本地图。

### 网盘

- [123云盘](https://www.123pan.com/s/t3TqVv-77Tkh.html)
- [百度网盘](https://pan.baidu.com/s/1lt-ji0If782TgV_NsLq1gQ?pwd=mxsj)
- [蓝奏云](https://wwf.lanzouo.com/iqnmX20gubje)

### 各大论坛或平台

- [GitHub](https://github.com/YZBWDLT/Adventure-World-4)
- [KLPBBS](https://klpbbs.com/thread-137174-1-1.html)
- [MineBBS](https://www.minebbs.com/resources/1-20-30-pve.8392/)
- [TITAIKE](https://www.titaike.cn/5041.html)
- 中国版资源中心

---

## 最新版本更新日志 - 冒险小世界：剑之试炼 Alpha 4.2_01 发布

晚上好！今天我们发布 4.2 的第一个版本。在该版本中，我们进行了类似于 30 种死法 2 2.4 版本的工作——将所有命令新语法化。同时，引入了很多从 1.18.30\~1.21.0 的新游戏机制，来看看这次的更新内容吧\~！

**紧急发布了 Alpha 4.2_01b，以修复一个手机版在 HUD 隐藏后，不显示操控键位而无法操作的问题。手机版玩家应当下载此版本。**

### 游戏内容

#### 玩家物品

- 现在使用御风珠来代替绳枪，以和冒险世界（包括冒险世界：筑梦）系列的其他类似物品保持一致
  - 同时，移除了物品准星
- 现在物品是每秒检测一次，并供应缺少的物品的，而不再是在特定时机检测并供应了
- 现在钻石头盔和钻石靴子不再需要玩家手持一次，是直接给予的了
- 现在弓箭秒杀骷髅可以正确地计入击杀数

#### 关卡

- 现在当失败达到 10 次后，会提供一个抗性提升 V（无敌）的效果
- 更名：烈焰之魂 -> 烈焰王
- 对 6-4 中烈焰王的技能进行了全面削弱，以降低无药通关的难度：
  - 涨落岩浆的间隔由 8\~20 秒延长为了 15\~30 秒
  - 恢复血量的间隔由 3 秒延长为了 6 秒
  - 召唤怪物的间隔由 3\~10 秒（二阶段）和 3\~5 秒（三阶段）延长为了 6\~10 秒（二阶段）和 6\~8 秒（二阶段）
  - 随机传送的间隔由 6\~10 秒延长为 10\~15 秒
- 现在仅限有中型或大型岩浆怪的波潮会启用关卡完成倒计时，而不再为有岩浆怪的关卡全关启用关卡倒计时。
  - 这个更改会使一些关卡的进程（例如 7-1、7-2）更顺滑一些。
- 现在在 7-5 中，当 BOSS 使用火球攻击时，不再能使用盾挡住这次伤害。

#### 信息板

- 现在不再尝试实时监测玩家位置，因其实用用途不大。因此，右侧信息板也不再实时返回玩家所处关卡位置
- 现在不再在怪物生成后检查最大怪物数
- 现在死亡榜可以记录一切死亡的数据，而不光是仅在游戏中记录死亡数据了
- 现在药水不再显示当前上限
- 现在不再会在玩家手持物品时，来回在物品信息和关卡信息之间闪了

#### 观战

- 现在游戏外的死亡次数也可以正常计入了
- 移除了观战区，现在使用旁观模式进行旁观

#### 剧情

- 重新设计了全部剧情的相机镜头
- 统一了中国版和国际版的剧情内容，不再单独做出适配
- 移除了一个严重违规成员的制作人表
- 现在在结束剧情中，田英将告知玩家的死亡次数，而不再是总的关卡失败次数
- 现在成就不再能多次获取
- 现在成就必须在非作弊模式下才能获取
- 现在最佳时间将分为单人和多人，不再共用
  - 例如，以前如果单人模式打难度 2，花费了 70 分钟，多人打难度 2 花了 35 分钟，那么最佳时间就会是难度 2 为 35 分钟
  - 现在同样的情况下，将分别记录为单人难度 2 花了 70 分钟和多人难度 2 花了 35 分钟。

### 漏洞修复

- 尝试修复了在 6-4 中的变速齿轮（TPS 疑似严重降低）问题
- 修复了玩家可能会在进入游戏时就直接被判定为死亡的问题
- 修复了 6-2 的门放错位置的问题

### 底层更新

- 全面采用新版`/execute`语法
- 全面采用中国版脚本和国际版脚本配合函数系统
- 在群文档新增了一个文档，以供有需求的开发者查阅

#### 附加包

- 合并了`BP_aw_main`、`BP_aw_main_international`和`BP_aw_main_netease`为`BP_adventure_world`
- 合并了`RP_aw_main`、`RP_aw_music_pack`为`RP_adventure_world_main`
- 更名了`RP_aw_netease`为`RP_adventure_world_netease`
- 新增了`RP_adventure_world_international`
- 移除了`BP_aw_main_old`
- 现在`manifest.json`的最小引擎版本均为`1.21.0`

#### 物品

- 现在每种物品都使用`1.20.50`的格式版本
- 将`aw:hookshot`改为了`aw:wind_pearl`
- 移除了`aw:enable_crosshair`，因现在使用御风珠
- 移除了`aw:main_potion_used`和`aw:vice_potion_used`物品
- 移除了`aw:summon_monsters`物品，因现在可直接调用各关卡的`waves/`函数

#### 方块

- 现在每种方块都使用`1.20.50`的格式版本

#### 实体

- 移除了`player.json`，现在和玩家相关的检测都通过脚本进行
- 合并了`aw:npc`和`aw:npc_author`为`aw:npc`，并使用了实体属性
- 因生成器逻辑较为复杂，现在使用独立的实体`aw:spawner`生成怪物，不再使用`aw:marker`

#### 脚本

- 现在对地图分别添加了国际版和中国版的脚本支持
- 现在脚本用于御风珠的碰撞判定
- 现在物品的使用都依托于脚本进行检测，而不再使用玩家动画控制器
- 现在击杀判定依托于脚本进行检测，而不再使用玩家实体文件
- 现在玩家喝下药水依托于脚本进行检测，而不再使用`using_converts_to`的物品检测

#### 标记实体

- 现在所有的记分板变量都使用假名代替，移除了大量用于存储变量的标记
- 现在使用带以下`aw:level`实体属性的标记实体：
  - `this`：作为玩家的重生点
  - `next`：作为玩家进入下一关的检测点
  - `prev`：作为玩家在上一关的重生点
  - 游戏开始后，`this` -> `prev`，`next` -> `this`
  - 游戏失败后，`prev` -> `this`，`this` -> `next`
  - 游戏胜利后，删除`prev`，新建`next`

#### 记分板变量

- **新增**
  - `deathState: 0 | 1 | 2`记分板，用于记录玩家的死亡状态
    - `deathState.@s`=`0`：未处于死亡状态
    - `deathState.@s`=`1`：刚刚死亡，但还未记录死亡榜
    - `deathState.@s`=`2`：长期死亡，还未复活
  - `health`记分板，用于记录玩家或实体的血量。
  - `data.allowPotionSupply: 0 | 1`，用于标记允许补充药水
  - `data.allowArrowSupply: 0 | 1`，用于标记允许补充箭
    - 为`1`时，箭控制器不但补充箭，并且清除当前世界中的所有实体箭
  - `data.allowAcousticStoneCrystal: 0 | 1`，用于标记是否允许补充传声石结晶
  - `data.allowHud: 0 | 1`，用于标记是否启用 HUD
  - `data.allowRemoveItemEntity: 0 | 1`，用于标记是否移除物品掉落物
  - `data.allowTpPlayerWhenStart: 0 | 1`，用于标记开始关卡时是否传送玩家，默认为`1`
  - `data.gaming: 0 | 1`，是否正在 X-Y（1\<=X\<=7, Y!=0）的游玩状态，`0`：未处于游玩状态，`1`：正处于游玩状态，默认为`0`
  - 标签`outOfBorder`，用于判断旁观模式的玩家是否越界
- **更名**：
  - 记分板`deathTimes` -> 记分板`deathCount`
  - 记分板`killAmount` -> 记分板`killCount`
  - `data.maxPlayersAmount` -> `data.playerAmount`
  - `data.alivePlayersAmount` -> `data.alivePlayerAmount`
  - `data.failedTimes` -> `data.failedCount.thisLevel`
  - `data.allFailedTimes` -> `data.failedCount.allLevels`
  - `data.storyMode` -> `settings.storyMode`
  - `data.difficulty` -> `settings.difficulty`
  - `data.difficultyAdder` -> `settings.extraDifficulty`
  - `data.developerMode` -> `settings.developerMode`
  - `time.levelCompleteDelay` -> `time.levelCompleteCountdown`
  - 标签`potionUsed` -> `data.potionUsed`
  - 标签`cheated` -> `data.hasCheat`
  - `record.achievement.singlePlayer_completeMap` -> `record.achievement.singlePlayer.finishMap`
  - `record.achievement.multiPlayer_completeMap` -> `record.achievement.multiPlayer.finishMap`
  - `record.achievement.singlePlayer.notDied` -> `record.achievement.singlePlayer.neverDied`
- **拆分**：
  - 记分板变量`isAlive.@s` -> 标签变量`spectator`，新值与旧值的对应关系为：
    - `isAlive.@s`=`0` -> `data.levelCompleted`=`0`&&`spectator`
    - `isAlive.@s`=`1` -> `data.levelCompleted`=`0`&&!`spectator`
    - `isAlive.@s`=`2` -> `data.levelCompleted`=`1`
    - `isAlive.@s`=`3` -> 被抛弃，不再使用原来的判定方法
  - `data.gameId`，因其在诸多方面（包括数值分解、屏蔽词）等方面都造成了诸多不便
    - 现在使用`data.chapter`、`data.level`和`data.levelCompleted`代替
  - `xxx.timeline`、`xxx.dialogue` -> `xxx.timeline`、`data.allowNpcInteraction`
- **移除**：
  - `hookshot`记分板，现在使用脚本代替。
  - `data.hookshotAmount`，现在使用脚本代替。
  - `bossStage`记分板，现在使用记分板和脚本代替。
  - `isAlive`标签，现在用`deathState`代替。
  - `data.realDeadPlayersAmount`，因为现在可以直接使用`unless entity`检测相关玩家
  - `temp`、`temp2`、`temp3`记分板，现在使用`data`下的各`temp.`变量代替
  - `position.@s`，现在不再实时监测玩家所处位置，因其过于复杂且消耗性能
  - `data.maxMonsterAmount`，现在不再在怪物生成后检查最大怪物数
  - `time.@s`，现在不再监控玩家处于死亡状态下的时长

#### 关卡 ID

- 现在村庄的 ID 有下面的新的对应关系。
  - 现在`data.level`是从`1`开始算起的，阶段是基于`data.level`判断的
  - 合并了从见到张宇到获取传声石结晶的剧情为一个阶段

  | 游戏ID`data.temp.gameId` | 以前的游戏ID`data.temp.gameId` | 意义 |
  | :---: | :---: | --- |
  | `010`/`011` | `3` | |
  | `020`/`021` | `4` | |
  | `030`/`031` | `5` | |
  | `040`/`041` | `6~8` | |
  | `050`/`051` | `9`/`99` | 开幕 |
  | `709` | `701` | 剑之神殿剧情完成 |
  | `1010`/`1011` | `1001`~`1002` | |
  | `1020`/`1021` | `1003` | |
  | `1030`/`1031` | `1004` | |

#### 函数文件

- 现在采用函数系统：主包 v3 模板
- 根据新版的函数系统重构了文件架构，因此有大量的文件被重命名、移除、移动或新增，这里不再对函数文件的所有具体更改详细阐述，只对其中的主要更改进行必要解释
- 现在全体函数文件都采用了一个命名空间`aw`，以防和其他包体冲突
- 入口文件改为了`aw/system/main.mcfunction`，并采用了`1.21.0`的格式版本
- 在库方法代码内采用新版注释格式，更加简短，且能够避免重复描述行为，以及对前文应使用的`/execute`命令做出进一步指导
  - 以前：

    ```mcfunction
    # ===== (功能) =====
    # (功能描述)

    # 调用此方法时：
    # · 执行者(应设置的执行者)
    # · 执行位置(应设置的执行位置)
    # 输出结果：
    # · (声明更改的变量的值，或输出的变量)

    ```

  - 现在：

    ```mcfunction
    # ===== (功能) =====
    # (功能描述)
    # 调用此方法时：(无需修饰)/(需修饰……为……（execute ……）)

    ```

### 当前已知的问题

以下是当前地图内已知的问题。如果您遇到此问题，可以无视，等待后续版本解决。

- 在多人模式下，当玩家使用自己的第一人称视角时，会看到正在显示的玩家的脸（不会影响正在显示的玩家）
- 结束屋的玩家在移动时，是无动画平移过去的
- 在多人模式下，处于旁观模式的玩家可以从角落卡出房间
