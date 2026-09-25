---
description: 仿照 Hypixel 在基岩版上做的密室杀手！
authors: [量筒]
tags: [planning]
---

# 量筒的密室杀手

密室杀手是一款新地图，是基于 Hypixel 密室杀手的特性而开发的资源。

处于更新状态。

---

## 基本信息

- **作者** 一只卑微的量筒（**@量筒**）
- **制作人表** 详情见[制作人表页面](credits)
- **版本需求** 26.40+
- **资源类型** 附加包
- **最新版本** 1.0 - Pre 1
- **更新日志** 详情见[更新日志页面](update_log/1_0)
- **漏洞汇报** 详情见[GitHub Issues](https://github.com/YZBWDLT/MurderMystery/issues)

---

## 下载

可以在群内直接下载此地图。

---

## 群内测试

目前本资源处于活跃更新状态。本资源将保持在本群的[测试服](../../servers/settings)开展测试。

该服务器采用白名单机制，需要参加测试的成员，请确保您的名字出现在[服务器成员登记表](../../servers/registered_members)中，否则将无法进入游戏。

该服务器目前采用 Minecraft 最新版本，如果您在进入服务器时显示「过期的客户端！」，请在[下载国际基岩版 Minecraft](../../tools/urls/mcbe.md)中更新你的 Minecraft。

---

## 最新版本更新日志 - 1.0 - Pre 1

开学了！这是开学后的第一次更新。我知道我知道，这次的更新姗姗来迟了，因为我也开学了，尤其是作为研一新生来讲，事情非常多，忙到现在才终于有空搞出来这次更新，十分抱歉！

正如大家所见——我们已经正式把版本号改为了 **Pre**！这意味着我们的地图离发布已经不远了！因此，这几天更新可能会比较频繁。

在本次的更新中，我们正式引入了两张地图的完整功能 —— 阴森庄园和阴森庄园 V1 的功能。并且，我们还全面修改了交互机制，现在默认情况下和门等都是可以交互的了。

不仅如此，我们在本次更新中也引入了全新的**临终遗言**的功能！现在你可以在死亡后，让你的尸体上方显示我们准备的一些遗言了。其中有 14 条来自于 Hypixel 原版，当然还有两条是我们精心准备的，敬请期待 >:)

一起来看看本次的更新吧，祝你躲过杀手的追击！

### 地图

- 新增地图雪景球
- 现在地图暗景秋色的陷阱有了 15 秒的冷却
- 扩大了复活节游乐园和 Hypixel 游乐园的底部范围
- #12 现在画不再能被破坏
- 修复了一些头颅未更新的问题
- 现在地图内的陷阱在冷却时使用不再提示剩余冷却时间，同步 Hypixel
- 新增了地图阴森庄园和阴森庄园 V1 的全部功能
  - 现在两张地图的电梯均可使用
  - 现在两张地图的秘密通道均可使用
  - 现在两张地图的玄关地板陷阱均可使用
  - 现在新版地图的两个挤压陷阱可使用
  - 现在新版地图的滚筒陷阱可使用

### 交互机制

- 现在交互机制由白名单机制变为了黑名单机制
- 默认情况下，现在大多数方块（尤其是门类方块、按钮、拉杆等）都是可以交互的
- 以下方块在黑名单中，仍然无法交互（主要是打开 UI）
  - `minecraft:flower_pot`
  - `minecraft:hopper`
  - `minecraft:chest`
  - `minecraft:trapped_chest`
  - `minecraft:ender_chest`
  - `minecraft:furnace`
  - `minecraft:brewing_stand`
  - `minecraft:crafting_table`
  - `minecraft:anvil`
  - `minecraft:chipped_anvil`
  - `minecraft:damaged_anvil`
  - `minecraft:cake`
  - `minecraft:dispenser`
  - `minecraft:dropper`
  - `minecraft:frame`

### 临终遗言

- #3 正式引入临终遗言！
- 现在玩家可以选择临终遗言，在被杀死后会在尸体上方显示特定内容
- 临终遗言会在 20 秒后消失
- 一共添加了 16 种临终遗言，其中有 14 种为 Hypixel 的原版临终遗言，另 2 种为原创

### 杀手飞刀

- #23 现在杀手在手持飞刀时会显示红石粉粒子效果
- #59 修复了飞刀入水未清除的问题

### 设置

- 将启用夜视效果设置移动到了杂项设置中
- #51 为杂项设置新增了常显示英雄设置

### 漏洞修复

- 修复了头颅顶面错误旋转的问题
- 现在在拥有神秘药水状态效果时喝下已知药效的药水时，不再返回未知效果的药水

### 技术性

- 更新了行为包和资源包的版本为`1.0.19`
- 为`lib`新增了一个`Vector3Utils.toString()`静态方法，以将坐标转换为`"X Y Z"`的字符串形式
- 彻底移除了事件的数据驱动，现在事件的类型为`Record<string, (system: MurderMysterySystem, playerData?: MurderMysteryPlayer) => void>`，而不再是`Record<string, MurderMysteryEvents>`
- 令事件管理器对`data.ts`开放了多个函数：`getMysteryPotion`、`intoHauntedHouseDoor`、`rideMinecart`
- 现在事件管理器的`intoHauntedHouseDoor`、`rideMinecart`是异步的，会返回`Promise<boolean>`，在对应事件结束后返回
- 移除了事件管理器的多个函数：`setBlock`、`fillBlock`、`setStructure`、`setEntity`、`setText`、`setPlayerDead`、`teleport`，它们都可以用脚本系统的其他函数代替
- 更改了`lib.gameSystem.subscribeTimeline`方法，现在其回调函数支持传入一个`time`参数，以代表时间线执行的时间
- 将密室杀手系统的静态方法`getState`和`setState`更名为`getEntityState`和`setEntityState`，将接口`DynamicProperties`更名为`EntityDynamicProperties`
- 新增了密室杀手系统的静态方法`getWorldState`和`setWorldState`，新增了`WorldDynamicProperties`接口
- 为`data.ts`新增了`LastWordData`接口和`lastWords`数据
- 为`lib.ts`新增了带有权重的随机函数
- 拆分了`interaction`组件为 3 个新的组件：
  - `interaction`组件：仅保留`at`和`run`，`at`为交互位置，而`run`为运行的事件，可以指定为字符串，指定为字符串时触发对应事件，也可以直接执行一个函数
  - `playerPressButton`组件：专门用于在玩家按下按钮时执行事件，参数与`interaction`一致
  - `playerPushLever`组件：专门用于在玩家拉下拉杆时执行事件，参数与`interaction`一致，但`run`指定为函数类型时，需要将返回类型指定为`number`，以指代拉杆禁用的时长，单位：秒
