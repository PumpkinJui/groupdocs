---
sidebar_position: 2
---

# 群文档历史

## 起源

群文档最早的最早，起源于「本群名菜」的制作。现存可查创建时间的第一份图片（可能也是历史上的第一份，但并不确定）制作于 2019 年 08 月 09 日。

在短暂活跃后的相当长的一段时间里，群文档处于沉寂状态。

## 兴起

在 2021~2022 年的某个时间，群文档中的「常用网址汇总」(现名称为「网址大全」) 开始以群公告形式维护。

在[生存 II 档](../servers/SurvivalIII/summary#历史)开服后，群文档中的「服务器设定」开始以群公告形式维护。

## 迁移

在这之后，因为群公告修改带来的干扰过大 (而可能只是升级了下服务器)，且具有字数限制 (服务器设定一度写了两条群公告)，开始寻求其他方案。所作尝试包括但不限于：

- 腾讯文档。内存占用过高，最后终于被它手机小程序弄得绷不住了。
- Notion。在 2023 年 08 月 26 日正式取代了群公告。虽然网速过慢，有时打都打不开，但还是沿用了下去，只不过是做了些类似于镜像的功能。*现在的群文档就是从 Notion 迁移过来的。*
- GitHub Pages。甚至可能比 Notion 还慢。
- Gitee Pages。良好的选择，除了我不懂 HTML，且它部署时不知为何，无法从 MarkDown 生成 HTML。*GitHub Pages 和 Gitee Pages 用的是同一套静态资源生成器，前者可以后者不可以，服了。*

最终，群文档稳定在 Notion + Gitee Pages。出于某些原因，也留有 GitHub Pages。

## 再迁移

2024 年 05 月，Gitee Pages 开始无法访问、部署和更新，疑似下线。*如果不是它坏了，我可能还真不急着去搞迁移。*

05 月 09 日，新的群文档仓库在 GitHub 上创建，并将 Notion 上所有文件以 MarkDown 形式导入至仓库。  
12 日晚，GitBook 结构整理完成。  
13 日凌晨，dev 分支合并 main 分支，其中含有 56 个文件的更改。稍后，群文档在 GitBook.com 上成功部署。  
14 日下午，群文档在 CloudFlare Pages 上成功以 GitBook Framework 部署。至此 所有迁移工作完毕。

2024 年 07 月 13 日，由于 GitBook.com 站使用率低、优化差且访问速度变差，该站点被撤销。*进个控制台给我手机卡死机三次……连桌面都崩了……*

## 现状

目前，群文档源文件托管在 [GitHub](https://github.com/PumpkinJui/groupdocs)，并在 [CloudFlare Pages](https://groupdocs.pages.dev/) 上部署。  
祉语对 CF Pages 群文档进行了「不完全反代」，使其在中国大陆加载速度更快。该地址每日 02:00 更新，位于 [nekoawa](https://docs.nekoawa.com)。

为保证图片加载速度，群文档所使用的图片大多经过压缩。源文件仍在 [GitHub](https://github.com/PumpkinJui/groupdocs-images) 上的独立仓库留有备份。  

如果打不开 GitHub 仓库，请参考[此页面](../tools/howto/access_github)。

旧版群文档仍可在 [Notion](https://pumpkinjui.notion.site/3196cdb181cd4c609a0ddf76d27cb9f9) 和 [GitHub Pages](https://pumpkinjui.github.io/groupdocs-legacy) 上访问，并在 [Gitee](https://gitee.com/pumpkinjui/groupdocs-legacy) 和 [GitHub](https://github.com/PumpkinJui/groupdocs-legacy) 上开源，但已不再更新。  
原来部署在 GitBook.com 上的站点已无法访问，原域名为 `https://pumpkinjui.gitbook.io/groupdocs/`。

## 未来

虽然目前的方案已经相对较快，但仍比不上国内服务（如 Gitee Pages）和服务器（如祉语的网站）。  
因此，未来有可能改为在自己注册的域名上托管 & 部署群文档。这也有极大可能是群文档不断迁移的最终目的地。

至于为什么现在不这样做……一方面不是网络流派的，对网络了解不多；一方面没时间折腾这个；一方面域名备案要求成年，不备案可能被封。
