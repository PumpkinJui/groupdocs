---
sidebar_position: 2
---

# 群文档历史

## 起源

群文档最早的最早，起源于「本群名菜」的制作。现存可查创建时间的第一份图片（可能也是历史上的第一份，但并不确定）制作于 2019 年 08 月 09 日。

在短暂活跃后的相当长的一段时间里，群文档处于沉寂状态。

## 兴起 (1.0, 群公告)

在 2021~2022 年的某个时间，群文档中的「常用网址汇总」(现名称为「网址大全」) 开始以群公告形式维护。

在[生存 II 档](../servers/SurvivalIII/summary#历史)开服后，群文档中的「服务器设定」开始以群公告形式维护。

## 迁移 (2.0, Notion)

在这之后，因为群公告修改带来的干扰过大 (而可能只是升级了下服务器)，且具有字数限制 (服务器设定一度写了两条群公告)，开始寻求其他方案。所作尝试包括但不限于：

- 腾讯文档。内存占用过高，最后终于被它手机小程序弄得绷不住了。
- Notion。在 2023 年 08 月 26 日正式取代了群公告。虽然网速过慢，有时打都打不开，但还是沿用了下去，只不过是做了些类似于镜像的功能。
- GitHub Pages。甚至可能比 Notion 还慢。
- Gitee Pages。良好的选择，除了我不懂 HTML，且它部署时不知为何，无法从 MarkDown 生成 HTML。*GitHub Pages 和 Gitee Pages 用的是同一套静态资源生成器，前者可以后者不可以，服了。*

最终，群文档稳定在 Notion + Gitee Pages。出于某些原因，也留有 GitHub Pages。

## 再迁移 (3.0, GitBook)

2024 年 05 月，Gitee Pages 开始无法访问、部署和更新，疑似下线。

05 月 09 日，新的群文档仓库在 GitHub 上创建，并将 Notion 上所有文件以 MarkDown 形式导入至仓库。  
12 日晚，GitBook 结构整理完成。  
13 日凌晨，dev 分支合并 main 分支，其中含有 56 个文件的更改。稍后，群文档在 GitBook.com 上成功部署。  
14 日下午，群文档在 Cloudflare Pages 上成功以 GitBook Framework 部署。至此，所有迁移工作完毕。

06 月 17 日，在祉语的帮助下，群文档启用 nekoawa 站点，通过 DogeCloud 等服务进行加速（「不完全反代」），定时同步 Cloudflare Pages 的内容。

07 月 13 日，由于 GitBook.com 站点使用率低、优化差且访问速度变差，该站点被撤销。*进个控制台给我手机卡死机三次……连桌面都崩了……*

08 月 15 日，群公告档案开始建设，并于 17 日完成。  
12 月 12 日，群公告档案因体积过大被迁移到 anno 分支。

## 架构迁移 (4.0, Docusaurus)

2024 年 09 月 16 日，使用 Docusaurus 的想法被提出 ([Issue #44](https://github.com/PumpkinJui/groupdocs/issues/44))，并在 10 月 07 日得到确认。但此后几个月，并没有向此方向推进。

2025 年 01 月 22 日，在将相关计划更新到群文档后，@量筒 提出进行迁移，并于 27 日完成。群公告档案在此期间被重新合并。

28 日，群文档接入 Algolia DocSearch。

07 月 31 日，群文档 EdgeOne Pages 实例创建并初次部署成功。  
08 月 08 日，EdgeOne Pages 试验站点成立。  
10 日，群文档编辑队对是否更换 nekoawa 站点服务商进行投票。  
13 日晚，nekoawa 站点改用 EdgeOne Pages 提供服务。

## 现状

目前，群文档信息如下：

- 架构：Docusaurus
- 源文件托管：[GitHub](https://github.com/PumpkinJui/groupdocs)
- 部署：[EdgeOne Pages](https://docs.nekoawa.com/)
- 部署：[Cloudflare Pages](https://groupdocs.pages.dev/)

为保证图片加载速度，群文档所使用的图片大多经过压缩。源文件仍在 [GitHub](https://github.com/PumpkinJui/groupdocs-images) 上的独立仓库留有备份。（此项工作由于人工原因，仍停留在 3.0 时期；目前的图片大多未经过压缩。）

如果打不开 GitHub，请参考[此页面](../tools/howto/access_github)。

## 那些旧版

旧版群文档已不再更新，但仍可在以下地址访问：

- 2.0
  - [Notion (View)](https://pumpkinjui.notion.site/3196cdb181cd4c609a0ddf76d27cb9f9)
  - [GitHub Pages (View)](https://pumpkinjui.github.io/groupdocs-legacy)
  - [Gitee (Code)](https://gitee.com/pumpkinjui/groupdocs-legacy)
  - [GitHub (Code)](https://github.com/PumpkinJui/groupdocs-legacy)
- 3.0
  - [CF Pages Main (View)](https://legacy-main.groupdocs.pages.dev/)
  - [CF Pages Anno (View)](https://legacy-anno.groupdocs.pages.dev/)
  - [GitHub Main (Code)](https://github.com/PumpkinJui/groupdocs/tree/legacy_main)
  - [GitHub Anno (Code)](https://github.com/PumpkinJui/groupdocs/tree/legacy_anno)

原来部署在 GitBook.com 上的站点已无法访问，原域名为 `https://pumpkinjui.gitbook.io/groupdocs/`。
