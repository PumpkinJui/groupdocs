# 开发用途

:::warning[提示]

此处内容仅适用于**基岩版**。请自行辨别我们提供的对应资源适用的平台。

:::

## 各式各样的开发文档

> 标注 `(English)` 的为英文文档。
> 以下两种情况会使用英文文档：
>
> - 没有中文文档
> - 有中文文档，但翻译质量低/内容少于英文文档

以下各项按重要性排序。

- [(English) Microsoft Learn：基岩版创作者文档 (官方)](https://learn.microsoft.com/en-us/minecraft/creator)  
  - [(English) Microsoft Learn：创作者常用工具](https://learn.microsoft.com/en-us/minecraft/creator/documents/commonlyusedtools)
- [(English) Bedrock Wiki](https://wiki.bedrock.dev/)
  - [(English) 实用链接](https://wiki.bedrock.dev/meta/useful-links.html)  
    有超多超棒的小工具可供使用！虽然全是英文……  
    注：部分涉及到中国大陆无法使用的服务。
  - [(English) 自带附加包历代文档收录](https://bedrock.dev/)
  - [(English) 附加包模板历代收录](https://bedrock.dev/packs)
- [(English) JaylyMC 的 SAPI 文档](https://jaylydev.github.io/scriptapi-docs/)
- [中文 Minecraft Wiki](https://zh.minecraft.wiki/)
- [(English) 我的世界基岩版网络协议文档](https://github.com/Mojang/bedrock-protocol-docs)
- [Minecraft 基岩版开发 Wiki](https://wiki.mcbe-dev.net/)（仍处于开荒状态）
- [MC 开发者文档](https://mc.163.com/mcstudio/mc-dev/)（仅网易可用）
- 我的世界开发指南（仅网易可用）
  - [电脑版](https://mc.163.com/dev/guide.html)
  - [手机版](https://mc.163.com/m/dev/guide.html)
- [Minecraft 基岩版开发文档](https://www.mcbe-dev.net/addons/)（理解难度高，仅作上述文档的补充）

## 各式各样的开发工具

### bridge. <!-- markdownlint-disable-line MD026 -->

#### 介绍

> A powerful IDE for Minecraft Add-Ons  
  参考翻译：一款为 Minecraft 附加包而生的强大集成开发环境

bridge. 是一款强大的 Minecraft 基岩版集成开发环境，其功能与 Visual Studio Code 的两个插件 (见下) 非常类似，并且集成了许多专门为 Minecraft 开发而生的插件。

bridge. 由 Minecraft 开发团队官方推荐！

#### 网址

[https://bridge-core.github.io/](https://bridge-core.github.io/)

### Blockbench

#### 介绍

> Blockbench is a free, modern model editor for low-poly models with pixel art textures.  
  参考翻译：Blockbench 是一款免费的、现代的模型编辑器，适用于带有像素艺术纹理的低多边形模型。

Blockbench 由 Minecraft 开发团队官方推荐！

#### 网址

[https://www.blockbench.net/](https://www.blockbench.net/)

### Snowstorm

#### 介绍

Snowstorm 是一款用于编写 Minecraft 基岩版粒子的应用程序。它实现了粒子的可视化，将粒子的编写难度降低了一个梯度。

Snowstorm 由 Minecraft 开发团队官方推荐！

#### 网址

- [Snowstorm 官网](https://snowstorm.app/)
- [Microsoft Learn：Snowstorm 概述](https://learn.microsoft.com/en-us/minecraft/creator/documents/snowstormoverview)
- [Microsoft Learn：粒子效果](https://learn.microsoft.com/en-us/minecraft/creator/documents/particleeffects)

### Chunker

#### 介绍

> Chunker 是一个基于网络的《我的世界》的世界转换器。它的目标是提供一个易于访问的界面来在《我的世界》Java 版和《我的世界》基岩版之间转换世界。

用于 BE 存档转 JE 存档。

Chunker 由 Minecraft 开发团队官方推荐！

#### 网址

- [Chunker 官网](https://chunker.app/)
- [Microsoft Learn：Chunker 概述](https://learn.microsoft.com/zh-cn/minecraft/creator/documents/chunkeroverview)

#### 可用性测试

<!-- markdownlint-disable MD007 MD032 -->

> Chunker 目前可以转换：  
  - 存档设置  
  - 世界数据（方块、生物群系和图块实体）  
  - 多个维度  
  - 容器和物品  
  - 游戏内地图

> Chunker 目前无法转换：  
  - 实体  
  - 玩家物品栏

<!-- markdownlint-restore -->

> 如果编辑世界（输出到源世界版本），Chunker 将保留实体和玩家物品栏。  
  Chunker 的功能集会随着它的进一步开发而扩展。

经测试，转换后的存档中所有实体都会消失。告示牌文本和箱子内容物得以保留。

### VS Code 插件专区

此处不设介绍，都装上就对了。

- Bedrock Definitions
  - [VSC Marketplace](https://marketplace.visualstudio.com/items?itemName=destruc7i0n.vscode-bedrock-definitions)
  - [GitHub](https://github.com/destruc7i0n/vscode-bedrock-definitions)
- Blockception's Minecraft Bedrock Development
  - [VSC Marketplace](https://marketplace.visualstudio.com/items?itemName=BlockceptionLtd.blockceptionvscodeminecraftbedrockdevelopmentextension)
  - [GitHub](https://github.com/Blockception/VSCode-Bedrock-Development-Extension)

### @ProjectXero 专区

#### 命令助手

##### 介绍

> 便捷易用的 Minecraft 命令辅助输入应用。

官网正式版最近一次更新在 2020 年初，目前已较为过时，可能不完全适用于当前的 Minecraft 版本。  
测试版需在爱发电平台发电后查看。

##### 网址

- [命令助手 官网](https://ca.projectxero.top/)
- [爱发电：ProjectXero](https://afdian.com/a/projectxero)
- [爱发电：正式版停更说明](https://afdian.com/p/43d9a27c3fd611edac7252540025c377)
- [官网：正式版停更说明](https://ca.projectxero.top/blog/notice/pause-update/)

#### 其他

- [MCBEID 表](https://ca.projectxero.top/idlist/)
- [Minecraft 命令更新日志](https://ca.projectxero.top/blog/command/command-history/)

### MCBE Essentials

#### 介绍

> MCBE Essentials is a collection of tools for Minecraft Bedrock Edition developers intended to make life easier!  
  参考翻译：MCBE Essentials 是专为 MCBE 开发人员设计的工具集，旨在让生活更轻松！

MCBE Essentials 是一个集成了多种功能的开发工具，甚至可以用于将结构转换为函数文件！

*（量筒：太牛啦！）*

#### 网址

[https://mcbe-essentials.github.io/](https://mcbe-essentials.github.io/)
