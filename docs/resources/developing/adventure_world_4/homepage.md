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
- **最新版本** 4.1（正式版） | Alpha 4.2_03b（测试版）
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

## 最新版本更新日志 - 冒险小世界：剑之试炼 Beta 4.2_01 发布

![beta_4_2_01_cover](/resources/adventure_world_4/update_log/4_2/beta_4_2_01_cover.png)

周末快乐！如你所见，我们的地图已经正式进入了 Beta 阶段！

在本次更新中，我们补齐了本次更新的最后一块大拼图——路线引导机制。现在，在每关结束后，都会出现一个引导点指引你走向何道路。这是一个呼声很高的功能，所以我们很早就决定加入进来，今天它来了，终于不用怕迷路啦！

### 路线引导机制

- 隆重介绍——路线引导机制！
- [#9](https://github.com/YZBWDLT/Adventure-World-4/issues/9) 在关卡结束之后，会有一个蓝色的跳动叹号图案——引导点指引你接下来的路
- 离得越远，引导点的图标就越大
- 为 3-1 的水道添加了必要的指引告示牌
- 以后再也不用怕迷路啦！

### 音乐

- 现在剪掉了音乐的前后空白片段，不再会有空白过渡
- [#105](https://github.com/YZBWDLT/Adventure-World-4/issues/105) 现在除了 7-5 外，有更多的音乐分前奏和主旋律了，前奏只播放一次，而主旋律循环播放
- 典型的例子有各大 BOSS 战、和沙漠神殿
- 移除了村庄音乐的第二备选，因为在现在这个模式下，第二备选会出现问题
- 继续进行了一定程度的压缩，以降低存储占用
- **已知问题：3-4 的音乐连贯性不是很好，后续仍需进一步优化**

### 玩家血量

- 现在能够实时显示到玩家名牌下方了！
- 这在多人模式下可能会很有用

### 漏洞修复与特性优化

- [#86](https://github.com/YZBWDLT/Adventure-World-4/issues/86) 现在在单人模式下，进入林乐家楼下会自动隐藏外部的 NPC 和展示文本
  - 然而，多人模式下仍然会正常显示外部的 NPC 和展示文本
- [#102](https://github.com/YZBWDLT/Adventure-World-4/issues/102) 现在二周目开启剧情模式是从 0-1 开启的了，而不是 1-0
- [#107](https://github.com/YZBWDLT/Adventure-World-4/issues/107) 修复了多人情况下，和张宇的聊天仍然被遮挡视角的问题
- [#108](https://github.com/YZBWDLT/Adventure-World-4/issues/108) 修复了在开幕时，或在结束后开启二周目时，展示文本仍然清晰地显示在玩家面前的问题
- [#109](https://github.com/YZBWDLT/Adventure-World-4/issues/109) 修复了多人情况下，在强行过剧情的玩家可能会在意外的地点死亡的问题
- [#110](https://github.com/YZBWDLT/Adventure-World-4/issues/110) 修复了多人情况下，玩家可能因网络波动而错误地复活在上一关的问题
- [#111](https://github.com/YZBWDLT/Adventure-World-4/issues/111) 修复了多人情况下，结束剧情不会对玩家隐身的问题
- [#112](https://github.com/YZBWDLT/Adventure-World-4/issues/112) 修复了多人情况下，玩家可以在 2-1 通过不断推拉活塞卡出房间的问题
  - 然而，仅修复了此漏洞在 2-1 游戏时的情况，因为 2-1 结束后已不再会导致卡关（结束前可能会卡存活玩家数，但结束后至少能留一位玩家在场景内），并且可能会导致错判，造成性能浪费，综合以上因素考虑，只修复该漏洞最严重表现的部分
  - 我们还留了一个告示牌小彩蛋 (～￣▽￣)～
- 修复了结束剧情主线剧情对话过程中和张宇对话会导致卡住的问题
- 修复了村庄对话中和田英初次对话的检查范围过小的问题
- 修复了在游戏中时，单人模式退出重进后玩家仍然会被强制传送到重生点的问题，现在单人模式回到游戏后位置不再受到影响
- 现在剧情模式下，3-1 的动画中田英是躺在神殿上方而不是树上睡觉的了
