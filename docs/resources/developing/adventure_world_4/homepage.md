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
- **最新版本** 4.1（正式版） | Alpha 4.2_02b（测试版）
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

## 最新版本更新日志 - 冒险小世界：剑之试炼 Alpha 4.2_02 发布

嗨！针对大家在上一个版本的问题反馈情况，我们在这里发布了新版本以处理这些问题。在本版本中，着重更新了退出重进机制和一些相关机制，例如死亡机制、重生机制等。虽然更新内容不多，不过还是有新东西在等着大家的哦。

Alpha 4.2_02b 对上个版本中出现的严重问题进行了修复。现在药水机制应该能正常运行了！

### 漏洞修复与特性优化

- [#66](https://github.com/YZBWDLT/Adventure-World-4/issues/66) 在 7-4 新增了多个传送点位
- [#69](https://github.com/YZBWDLT/Adventure-World-4/issues/69) 现在会提醒玩家调整文本背景不透明度
- [#70](https://github.com/YZBWDLT/Adventure-World-4/issues/70) **现在 BOSS 战启用倒计时复活机制**
  - 在不同难度下，重生所需要的倒计时也越长
  - 目前仅限 6-4 和 7-5 的第 2 波启用了该机制
- 修复了一个判断是否正处于游戏中的变量错误判断的漏洞，因此，以下漏洞被同步修复
  - [#71](https://github.com/YZBWDLT/Adventure-World-4/issues/71) 在村庄结束剧情死亡会被记录为旁观者，并播报全体
  - [#83](https://github.com/YZBWDLT/Adventure-World-4/issues/83) 多人情况下，在 6-4 之前退出游戏并在 6-4 结束后（7-0 开始前）回到游戏会变成旁观者模式
- 现在 1-0 提供的皮革靴子也是锁定物品栏而非锁定槽位的了
  - [#76](https://github.com/YZBWDLT/Adventure-World-4/issues/76) 因此，修复了多人模式下，在 1-2 之前退出的玩家在 1-2 之后回归会导致其皮革靴子无法脱下的问题
- [#78](https://github.com/YZBWDLT/Adventure-World-4/issues/78) 修复了 1.21.80 后岩浆怪名字错误的问题
- [#87](https://github.com/YZBWDLT/Adventure-World-4/issues/87) 更改了结束后与鸽子的对话
- [#88](https://github.com/YZBWDLT/Adventure-World-4/issues/88) 现在御风珠可以再次对生物造成击退
- [#90](https://github.com/YZBWDLT/Adventure-World-4/issues/90) 压缩了资源包的大小，以减少其他玩家进入房间下载包所需要的时间：
  - 压缩了音乐的音质，现在为单声道音频，压缩到大小为原音频包的 28%
  - 更换并压缩了资源包图标的大小，由每张 406KB 降低到每张 66KB
  - 总的来看，资源包包体由 4.1 版本的 22.4MB 降低到 6.57MB，包体体积降低到原来的 29.33%
- [#91](https://github.com/YZBWDLT/Adventure-World-4/issues/91) 修复了在过剧情时退出游戏会导致其隐身状态仍然保留的问题
- [#92](https://github.com/YZBWDLT/Adventure-World-4/issues/92) 修复了在 7-0 死亡后会重生到 6-4 的问题
- 修复了恢复耐久的靴子和盾可以被扔出的漏洞
- [#95](https://github.com/YZBWDLT/Adventure-World-4/issues/95) 修复了过剧情时触控按钮会闪烁的漏洞
- 恢复了地图的 logo
- 现在在结束结算时，多人模式转单人模式后，不再为 F 级的评价，而是一个独立的评价：“无评价”
  - 同时，在无评价下和作者 NPC 们对话会采用多人模式下的默认对话
- 现在在结束结算时，如果有玩家开启了创造，系统会提示玩家本次没有成就或纪录

### 底层更新

- 进行了有关 HUD 的更改，移除了`data.allowHud`变量，现在 HUD 仅在开始、结束或退出重进时更改，而不再是循环执行；并移除了`aw/lib/modify_data/hud`函数
- 大幅更新了退出重进系统，为所有关卡新增了`events/player_rejoin`函数，并在特定关卡条件下执行关卡函数，这样可以高度自定义玩家在特定关卡下退出重进的行为，例如玩家退出重进后可以续上相机视角、HUD 设置、权限设置等
- 将`lib/modify_data/`中的函数部分移动到`lib/events/`中，以表示该类函数为一种“事件”函数，需在满足条件时单次执行以实现功能

### Alpha 4.2_02b 的漏洞修复与特性优化

- 现在右侧信息板的版本号能正确显示为 Alpha 4.2_02 了
- [#97](https://github.com/YZBWDLT/Adventure-World-4/issues/97) 现在御风珠不再能造成伤害
- 现在扔出御风珠会像雪球一样有掷出动画
- 现在检测到过多的箭实体时不再给予玩家箭
- 修复了药水会在任意情况无限给予的漏洞
- 修复了结束特效无法进入张宇商店的漏洞
- 略微更改了作弊无成就的提示
  - 以前：因为你（们）本次有人开启了创造，因此本次不会获得任何成就和纪录！
  - 现在：本次游戏有人开启了创造模式，因此本次不会获得任何成就和纪录！
- 底层更新：移除了`data.allowArrowSupply`变量和`data.allowPotionSupply`变量，现在全部使用`supplyAllPotions`和`supplyArrow`标签代替原有的功能
