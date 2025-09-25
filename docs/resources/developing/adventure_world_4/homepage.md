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
- **最新版本** 4.1（正式版） | 4.2 - Pre 1（测试版）
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

## 最新版本更新日志 - 4.2 - Pre 1

![4_2_pre_1_cover](/resources/adventure_world_4/update_log/4_2/4_2_pre_1_cover.png)

中午好！从本版本开始，我们正式进入 Pre 版本的测试阶段！在该测试阶段，我们主要对地图进行一些小修小补，同时完成最后剩下的任务。在剩下的几天中，Pre 版本的更新会比较频繁，所以大家的测试记录规则也发生了一点变化，主要是从本版本开始，测试 Pre 版本的旧版也可以照常记录。例如，如果在我们发布 Pre 2 后，你还在测试 Pre 1，那么 Pre 1 的记录仍然是有效的。当然，还是尽你们之所能，尽量卡 bug 吧~

### 单关卡试炼

- 现在单关卡试炼的准备时间由 4 秒延长到了 15 秒，并会在准备阶段给予药水
- [#128](https://github.com/YZBWDLT/Adventure-World-4/issues/128) 现在从主动旁观模式结束全流程后进行单关卡试炼，不再会应用主动旁观的设置了
- [#134](https://github.com/YZBWDLT/Adventure-World-4/issues/134) 现在单关卡试炼在正式开始关卡之前都不再能移动了
- [#138](https://github.com/YZBWDLT/Adventure-World-4/issues/138) 现在在试炼入口调整单关卡试炼的关卡号时，即使退出、重新开始游戏之后也可以保留了
- 修复了玩家在主动旁观模式下退出，并在单关卡试炼下进入仍保持主动旁观的问题
- 修复了单关卡 2-2、2-3、3-2、3-3、3-4 的重生点错误的问题
- 现在玩家在准备过程中退出并重新进入也不再会出现问题了

### 结束结算

- 现在结束结算数据以通关时的数据为准，而不再以该数据的实时数据为准
  - 例如，当通关时有 5 人，那么退出到只剩 1 人时，NPC 的对话和结算数据仍然以 5 人时的数据展现
  - 因此，移除了 Alpha 4.2_02 引入的“无评价”的设定，因为如果玩家在多人情况下完成地图，现在完全不会看到评价
- 现在结束结算数据能够显示多人通关时的玩家人数了
- 撤除了水晶哥的 NPC，换为硫化银
- 撤除了风暴的 NPC，换为橘子
- 新增了 lanos、命令块、海王星、小飞侠、鱼周、王牌、残梦的 NPC
  - 其中小飞侠和王牌目前没有上传皮肤，也没有留言，所以目前显示的内容并非留言
- 更新了制作人名单，新增了 4 页的 Alpha 和 Beta 版本的测试员名单

### 漏洞修复与特性优化

- [#129](https://github.com/YZBWDLT/Adventure-World-4/issues/129) 修复了只有在完成二周目后才能在三周目及之后获取退出试炼物品的问题
- [#130](https://github.com/YZBWDLT/Adventure-World-4/issues/130) 修复了从 10-3（试炼入口）回到 10-2（村庄）后，在村庄死亡会重生到试炼入口的问题
- [#131](https://github.com/YZBWDLT/Adventure-World-4/issues/131) 修复了在 3 人或更多玩家时未能提示谁选择了继续试炼的问题
- [#132](https://github.com/YZBWDLT/Adventure-World-4/issues/132) 修复了 3-1 的剧情中，迷雾未被撤除的问题
- [#133](https://github.com/YZBWDLT/Adventure-World-4/issues/133) 现在能够正确初始化退出重进玩家的旁观信息
- [#135](https://github.com/YZBWDLT/Adventure-World-4/issues/135) 现在退出试炼能够正常使用了
- [#136](https://github.com/YZBWDLT/Adventure-World-4/issues/136) 恢复了 2-1 的彩蛋告示牌内容
- [#137](https://github.com/YZBWDLT/Adventure-World-4/issues/137) 修复了退出后不会修改玩家游戏模式的问题（尤其是单关卡试炼下）
- 修复了在开幕时玩家仍能保持物品的问题
- 修复了在开幕时，玩家重新进入时错误地使部分命令选中全体玩家的问题

### 底层更新

- 将开启单关卡试炼的相关代码从结束剧情的`aw/levels/end/stage3`中分离了出来，现在统一集合到`aw/levels/end/stage4`中
- 将 10-3 的临时变量`settings.temp.level`正式升级为全局变量`settings.level`
- 新增了一个用于查询`settings.level`的值的函数`aw/developer/query/level_settings`
- 新增了一个用于安全移除门的方法`aw/lib/events/remove_door`
- 新增了多个`record`记分板下的变量，用于记录通关时的数据
- 移除了最佳分数的记录`record.bestScore.xxx`
