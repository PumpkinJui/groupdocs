---
sidebar_position: 5
description: … and why Docusaurus?
---

# Why not GitBook?

这篇文章介绍了我们从 GitBook 迁移到 Docusaurus 的理由。[Issue #44](https://github.com/PumpkinJui/groupdocs/issues/44) 中也记录了一些最早的直观感受。

## 为什么 GitBook 不好

诚然，GitBook 是一个文件结构十分清晰、上手门槛较低的简单框架；但由于 GitBook 团队调整了发展方向，原来使用的 GitBook-cli 已不再维护。这造成了一系列麻烦：

- 需要极为离谱的 `NODE_VERSION=10.24.1` 才能正确构建（最新版的第一位数字目前是 `2`）
- 仅支持在 2016 年最后更新的极为有限的 MarkDown 语法；虽然它实现了 CommonMark，但计划列表 `- [ ]` 等扩展语法并不受支持（顺带一提，GFM 规范最后一次更新是 2019 年）
- 需要使用插件才能实现的众多功能。小到一键回顶和代码块复制，大到侧边栏目录折叠和中文搜索，都需要额外配置插件

我们的协作者也受够了在 SUMMARY 里面声明哪些文件需要渲染的麻烦。

Last but not least，在现在这个时代，它看上去太复古了。

<details>

<summary>好的，那为什么我们不跟着他们的发展方向走呢？</summary>

如果你曾读过[群文档历史](../groupdocs_history#%E5%86%8D%E8%BF%81%E7%A7%BB-30-gitbook)，我们曾经的确是有这么一个站点。它确实解决了上面说的一些问题，例如老旧语法和复古页面。

但是，一方面，这个网站没有 CloudFlare Pages 加载快；另一方面，这个网站的优化稀烂，至少控制台是这样。在我为了改一个设置把手机卡崩了三次以后，我决定把它弃用掉。

目前，GitBook 官网已经被长城防火墙拦截，简称「被墙了」。

</details>

## 为什么 Docusaurus 好

Docusaurus 几乎解决了上述所有问题。

- 仍在维护
- 强大的 MarkDown 扩展功能（标注块、选项卡……你可以在[小恐龙的独特优势](./migration_notes#%E5%B0%8F%E6%81%90%E9%BE%99%E7%9A%84%E7%8B%AC%E7%89%B9%E4%BC%98%E5%8A%BF)中找到相关描述！）
- 插件功能几乎都是自带的
- 不用写目录
- 美观 (至少它更酷了不是吗 >:)

未来也不知道会不会有新的迁移（我也希望没有），不过至少 Docusaurus 已经足够用很长一段时间了！

## Docusaurus 有什么问题

随之而来的是极高的迁移成本，甚至还要现学 JavaScript 和 CSS。（感谢量筒替我承担了这一切）

同时还有我们未曾预料到却十分重要的问题：不仅仅是迁移，它[上手编辑的难度](./migration_notes)也太大了……

因为 Docusaurus 支持了太多 GFM 没有甚至相互冲突的语法，我们也失去了与 GitHub 的兼容性。

~~以及，我们到现在都没有搞清楚 Docusaurus 应该怎么念，只好把它叫作「小恐龙」。此称呼取自[示例页面](https://tutorial.docusaurus.io/)上的「Dinosaurs are cool」一句。~~

<details>

<summary>好的，不过既然你们都会点 Python，为什么不用 MkDocs 呢？</summary>

简单答案：MkDocs 进入视线时已经太晚了。

除此以外，MkDocs 确实是依靠 Python，但它的配置也不是用 Python 进行的，而是诸如 YAML、JavaScript、CSS……

另外，我们的协作者梦寐以求的「不写目录」似乎也实现不了。

</details>

## 公开评价怎么说

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Docusaurus 给出的评价

Docusaurus 在其[官方文档](https://docusaurus.io/docs)中，将 GitBook 与 Docusaurus 进行了比较。

<Tabs>
  <TabItem value="origin" label="原文">

> [GitBook](https://www.gitbook.com/) has a very clean design and has been used by many open source projects. With its focus shifting towards a commercial product rather than an open-source tool, many of its requirements no longer fit the needs of open source projects' documentation sites. As a result, many have turned to other products. You may read about Redux's switch to Docusaurus [here](https://github.com/reduxjs/redux/issues/3161).
>
> Currently, GitBook is only free for open-source and non-profit teams. Docusaurus is free for everyone.

  </TabItem>
  <TabItem value="trans" label="翻译" default>

由 `glm-4-plus` 提供。

> [GitBook](https://www.gitbook.com/) 拥有非常简洁的设计，并且已被许多开源项目使用。随着其重心转向商业产品而非开源工具，许多其需求已不再符合开源项目文档站点的需求。因此，许多项目转向了其他产品。您可以在[此](https://github.com/reduxjs/redux/issues/3161)阅读关于 Redux 切换到 Docusaurus 的信息。
>
> 目前，GitBook 仅对开源和非营利团队免费。Docusaurus 对所有人免费。

  </TabItem>
</Tabs>

### Material for MkDocs 给出的评价

作为 MkDocs 极为知名的第三方主题，Material for MkDocs 在其[官方文档](https://squidfunk.github.io/mkdocs-material/alternatives/)中，将 Material for MkDocs 与 Docusaurus 及 GitBook 进行了比较。

#### Docusaurus

<Tabs>
  <TabItem value="origin" label="原文">

> [Docusaurus](https://docusaurus.io/) by Facebook is a very popular documentation generator and a good choice if you or your company are already using [React](https://reactjs.org/) to build your site. It will generate a single page application which is fundamentally different from the site Material for MkDocs generates for you.
>
> Advantages
>
> - Very powerful, customizable and extendable
> - Provides many components that aid in technical writing
> - Large and rich ecosystem, backed by Facebook
>
> Challenges
>
> - High learning curve, JavaScript knowledge mandatory
> - JavaScript ecosystem is very volatile, rather high maintenance
> - More time needed to get up and running
>
> While [Docusaurus](https://docusaurus.io/) is one of the best choices when it comes to documentation sites that output a single page application, there are many more solutions, including [Docz](https://www.docz.site/), [Gatsby](https://www.gatsbyjs.com/), [Vuepress](https://vuepress.vuejs.org/) and [Docsify](https://docsify.js.org/) that approach this problem similarly.

  </TabItem>
  <TabItem value="trans" label="翻译" default>

由 `glm-4-plus` 提供。

> Facebook 的 [Docusaurus](https://docusaurus.io/) 是一个非常流行的文档生成器，如果你或你的公司已经在使用 [React](https://reactjs.org/) 构建网站，那么它是一个不错的选择。它将生成一个单页应用程序，这与 Material for MkDocs 为你生成的网站有本质上的不同。
>
> 优点
>
> - 非常强大，可定制且可扩展
> - 提供许多有助于技术写作的组件
> - 大型且丰富的生态系统，由 Facebook 支持
>
> 挑战
>
> - 学习曲线陡峭，必须具备 JavaScript 知识
> - JavaScript 生态系统非常不稳定，维护成本相当高
> - 需要更多时间来启动和运行
>
> 当涉及到生成单页应用文档网站时，[Docusaurus](https://docusaurus.io/) 是最佳选择之一，但还有许多其他解决方案，包括 [Docz](https://www.docz.site/)、[Gatsby](https://www.gatsbyjs.com/)、[Vuepress](https://vuepress.vuejs.org/) 和 [Docsify](https://docsify.js.org/)，它们以类似的方式处理这个问题。

  </TabItem>
</Tabs>

#### GitBook

<Tabs>
  <TabItem value="origin" label="原文">

> [GitBook](https://www.gitbook.com/) offers a hosted documentation solution that generates a beautiful and functional site from Markdown files in your GitHub repository. However, it was once Open Source, but turned into a closed source solution some time ago.
>
> Advantages
>
> - Hosted solution, minimal technical knowledge required
> - Custom domains, authentication and other enterprise features
> - Great collaboration features for teams
>
> Challenges
>
> - Closed source, not free for proprietary projects
> - Limited Markdown capabilities, not as advanced as Python Markdown
> - Many Open Source projects moved away from GitBook
>
> Many users switched from [GitBook](https://www.gitbook.com/) to Material for MkDocs, as they want to keep control and ownership of their documentation, favoring an Open Source solution.

  </TabItem>
  <TabItem value="trans" label="翻译" default>

由 `glm-4-plus` 提供。

> [GitBook](https://www.gitbook.com/) 提供了一个托管的文档解决方案，可以从您 GitHub 仓库中的 Markdown 文件生成一个美观且功能齐全的网站。然而，它曾经是开源的，但一段时间前转变为闭源解决方案。
>
> 优点
>
> - 托管解决方案，所需技术知识最少
> - 自定义域名，身份验证和其他企业功能
> - 强大的团队协作功能
>
> 挑战
>
> - 闭源，对专有项目不免费
> - 有限的 Markdown 功能，不如 Python Markdown 先进
> - 许多开源项目已从 GitBook 转移
>
> 许多用户从 [GitBook](https://www.gitbook.com/) 转向 Material for MkDocs，因为他们希望保持对自己文档的控制和所有权，更倾向于选择开源解决方案。

  </TabItem>
</Tabs>
