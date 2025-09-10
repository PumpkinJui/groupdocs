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
- **最新版本** 4.1（正式版） | Beta 4.2_01c（测试版）
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

## 最新版本更新日志 - Beta 4.2_01b & Beta 4.2_01c

![beta_4_2_01b_cover](/resources/adventure_world_4/update_log/4_2/beta_4_2_01b_cover.png)

下午好！这是一次小更新，我们为游戏添加了迷雾，并在一定程度上简化了一些装饰。

### 迷雾

- [#103](https://github.com/YZBWDLT/Adventure-World-4/issues/103) 添加了迷雾
- 不同的神殿会有不同颜色的迷雾
- 前六章的迷雾相对柔和，但第七章则相对“阴间”一些

### 漏洞修复与特性优化

- [#111](https://github.com/YZBWDLT/Adventure-World-4/issues/111) 再次修复了多人模式下结束剧情不会对玩家隐身的问题
- [#113](https://github.com/YZBWDLT/Adventure-World-4/issues/113) 进行了一定的装饰简化
  - 移除了部分关卡的部分墙、台阶、楼梯、蜘蛛网
  - 移除了部分关卡的部分高草、高海草、海带，防止有时无法击中怪物
  - 移除了 2-3 异常的发光地衣和 6-2 异常的紫水晶簇
  - 移除了 7-5 的两处火焰，现在不再那么容易踩到火了
- [#117](https://github.com/YZBWDLT/Adventure-World-4/issues/117) 因测试员们的强烈意愿，现在烈焰之魂又回到了它最忠诚的名字
- [#118](https://github.com/YZBWDLT/Adventure-World-4/issues/118) 现在不再能在时间神殿门口的对话提前看到田英
- [#122](https://github.com/YZBWDLT/Adventure-World-4/issues/122) 修复了 2-1 无法顺水流游上平台的问题
- [#123](https://github.com/YZBWDLT/Adventure-World-4/issues/123) 现在玩家的血量不再显示为负数
- [#124](https://github.com/YZBWDLT/Adventure-World-4/issues/124) 修复了 3-4 失败后无法再次进入的问题
- 现在 7-5 在跳进坑后会正确地移除引导点
- 现在 6-4 和 7-5 在单人情况下死亡后不再提示 30 秒后重生了

### 底层更新

- 现在实体门有翻译名字，不再显示为`entity.aw:door.name`了（虽然玩家几乎无法看见门的名字）
- 将门实体的`hill`字段统一换成了`mountain`，以和其他内容保持一致
- 现在清除怪物物品会同时清除生成器了
- 统一了游戏内所有迷雾的`用户提供 ID`为`gameFog`，并移除了`aw/lib/modify_data/init/fog`

发布了 Beta 4.2_01c 以修复一个多人模式下失败功能完全失效的问题。

- [#121](https://github.com/YZBWDLT/Adventure-World-4/issues/121) 紧急修复了多人情况下，关卡失败会导致非最后死亡的玩家集体重生到本关重生点的问题  
  备注：*这有可能是我们目前遇到的最恶性的漏洞之一，它直接导致多人模式下的关卡失败功能完全无法正常运行。关于此漏洞的详细机理，我们在该漏洞的汇报页面有着详细的记载。总之，此漏洞的严重性迫使我们不得不立刻发布 Beta 4.2_01c 版本。*
- [#126](https://github.com/YZBWDLT/Adventure-World-4/issues/126) 修复了多人情况下，6-4 和 7-5 在玩家复活后未给予药水的问题
