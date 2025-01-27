---
sidebar_position: 2
description: 查看本地图的所有更新日志。
---

# 更新日志

:::tip

为保证和原始更新日志一致，日志文本无须遵守格式规范，且不作相关调整。

:::

---

## 版本列表

- Exp 版本
  - [Exp 1.0_01](#exp-10_01)
- Alpha 版本
  - [Alpha 1.0_01](#alpha-10_01)
  - [Alpha 1.0_02](#alpha-10_02)

---

## Exp 1.0_01

> 发布于 24.02.22 。该版本的更新内容来自于第一期 demo 视频，更新日期亦来自于该视频。

是的，你没看错！我们在基岩版上实现了Hypixel起床战争的诸多功能！虽然有一些小功能还没能实现，或者受限于基岩版而无法实现，不过我们还是实现了很多有意思的功能并做出了这期演示。

注：本期演示均是找了@一只卑微的量筒 的嚎测试员们进行的测试，都是2队模式，地图均来自原版Hypixel。考虑到地图目前仍在开发，因此暂不发布。录的素材不是很多，只录了四局，我们的PVP水平跟各路大佬肯定没法比，下饭操作不喜勿喷，剪辑水平也不咋样，望各位观众老爷将就看吧qwq

当前地图仍在开发，想来体验体验的可以在我们的GitHub仓库下载体验一下（地址：[https://github.com/YZBWDLT/Bedwars](https://github.com/YZBWDLT/Bedwars)）；等到我们认为地图足够稳定，内容足够丰富之后会找各个渠道发布，当然我们也会尽量适配网易（虽然适配网易还是有一定难度的）

===== 我们目前已经实现的功能 =====

- 床破坏判定；
- 更高精度的击杀判定（即行为包上的底层判定，可以判断击杀者和击杀类型，相比纯命令法精度大幅提高，虽然也逃不掉误判）；
- 资源生成点，其中绿宝石点和钻石点有悬浮文本和旋转模型；
- 场景不可破坏的处理；
- 记分板显示自己的数据（事实上那不是记分板，那是快捷栏标题，它遇UI文件变高变大（（
- 队服（这个真的比你们想象的要难，事实上所有队服都是自定义的物品！）；
- 商店（包括Hypixel所有的道具和团队升级，部分功能会有一定的缺失或偏差）；
- 基于addon的火球与搭桥蛋；
- 魔法牛奶（不清除玩家药效）和隐身药水（隐身药水可以隐藏盔甲）；
- 同队队友无法伤害；
- 铁傀儡和蠹虫（仅攻击敌方，不攻击队友）；
- 防合成机制；
- 防退出重进机制（非本局玩家自动调旁观，本局玩家重进自动死亡重生）；
- 全套流程（资源点升级；床破坏；绝杀模式；游戏自动结束）；
- 地图自动重置系统；
- 随机地图选择系统（目前加入了3张Hypixel的原版地图，均做了防爆防破坏处理）
- 等等等。

喜欢我们的视频或者想要支持我们的，请给我们点个赞吧！非常感谢大家的支持！

地图制作：@一只卑微的量筒

视频制作：@一只卑微的量筒

极筑工坊出品，未经许可禁止转载

## Alpha 1.0_01

> 发布于 24.10.07 。

你好！我们在今天正式公布我们的起床战争附加包的 Alpha 版本！我们在这个版本中采用了基岩版的最新的 ScriptAPI 技术，并实现了很多有趣且令人震惊的功能！一起来看看我们的更新内容吧~

### 新地图

- 新增了在 Hypixel 中的所有 2 队地图（一共6张）
- 新增了在 Hypixel 中的 3 张 4 队地图

### 地图运行

- 现在采用SAPI技术，能够阻止玩家破坏场景方块
- 新增了对紫队、棕队、橙队的支持
- 修复了胜利的队伍可能会播报错误的问题（\#1），并在胜利队伍的播报中新增了击杀数排行
- 现在的击杀判定更加精准了
- 一定程度上修复了玩家能够将自己的物品放入商人的物品栏，导致吞物品的问题（\#2），并且修复了商店物品能够扔在外面的问题（\#11）
- 修复了允许合成的问题
- 现在床不再会被炸毁（\#3）
- 一定程度上修复了铁傀儡反应迟钝的问题（\#5）
- 修复了末影龙是笨蛋的问题（\#10）
- 现在的商店能够显示类似于 Hypixel 关于物品的详细信息
- 得益于 SAPI 技术，现在的铁傀儡、蠹虫和玩家都能按照队伍信息显示对应的颜色
- 新增了地图高度限制
- 现在使用水桶会消耗桶
- 现在 TNT 在物品栏中的显示是方块了，实现了 TNT 放下即点燃的功能
- 新增了 8 项设置命令
- 更新了等待时的记分板
- 更新了报警陷阱，现在能准确显示入侵者的队伍和昵称，并解除隐身效果
- 现在搭桥蛋相比以前会有 85% 的完整度，而不是完全完整的桥了

### 底层内容
- （更新内容太多，不想写了qwq）

**最后，祝你游玩愉快！如果遇到问题，请在 issues 中或进群进行反馈，感谢！**

## Alpha 1.0_02

> 发布于 24.10.12 。

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

