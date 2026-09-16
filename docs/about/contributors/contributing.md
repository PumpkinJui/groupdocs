---
sidebar_position: 1
description: 在你正式对群文档做出贡献之前，请先阅读这篇文章！
---

# 群文档编辑指南

作为被移除内容的补充：协作者以外的各位，可以在群内或 GitHub 上提出建议；如有意愿获取编辑权限，请联系 @PumpkinJui，并阐述你获取权限的理由。

## 关于 Git 和 GitHub

### 对 GitHub 网页端的特殊规定

无法访问 GitHub？请参阅[这里](../../tools/howto/access_github)。

如无特殊情况，禁止使用 GitHub 网页版进行大量编辑。请使用 Git 及其相关集成软件进行操作。

这里的大量编辑指的是除单次修改单个文件以外的编辑，也就是会在网页端产生多于一个 commit（提交）的编辑。

GitHub 网页版不但访问缓慢，而且一次只能修改一个文件，难以修改文件目录结构。这会严重影响提交列表的可读性，让别人很难知道你到底改了什么。

例如，我需要给文档增加一张插图。在 GitHub 网页端，至少需要进行两次提交：首先修改文档，然后上传图片。但使用 Git 等工具，就可以在一次提交中完成。增加一张插图只是一个非常简单的操作，更复杂的就更不用说了。

此外，使用 GitHub 网页端，就无法在提交前进行本地预览，有可能因为意外的语法错误而导致部署失败。

推荐使用 [Git](https://git-scm.com/downloads) 进行编辑。[GitHub 桌面版客户端](https://github.com/apps/desktop)和 [Visual Studio Code](https://code.visualstudio.com/) 亦可作为替代。

### 使用 Git

关于 Git 的使用，请参考以下文档：

- [Git Documentation（English，官方）](https://git-scm.com/docs/)
- [廖雪峰的 Git 教程（中文，推荐）](https://liaoxuefeng.com/books/git/)
- [Learn Git in Y Minutes（中文）](https://learnxinyminutes.com/zh-cn/git)

基本操作如下：

1. 在 Git 填写你的信息，并在 GitHub 注册你的 SSH 密钥。
2. 使用 `git clone --depth 1 git@github.com:PumpkinJui/groupdocs.git` 克隆本仓库。
3. 进行编辑，然后使用 `git add path/to/file.md` 添加要修改的文件，也可以使用 `git add .` 一次添加所有修改过的文件。
4. 使用 `git pull` 拉取其他人对本仓库的更新。
5. 使用 `git commit -m "message here"` 说明修改的内容。
6. 使用 `git push` 推送到远程仓库。

### 关于 pull

长久以来存在一个问题：如果没有通过 pull 更新仓库而直接 commit，就无法 push。由于缺乏对此问题的解决方案，之前有常见的做法是使用 merge 功能合并远程端和本地端的提交，但这样会产生新的提交，并损伤 commit 列表的可读性。

例如想要查看其他人最近几天改过什么，看到了如下结果：

- A：`修改文档甲`
- B：`修改文档乙`
- A：`再次修改文档甲`
- A：`Merge branch 'main' of https://github.com/PumpkinJui/groupdocs`
- B：`修改文档丙`
- B：`Merge branch 'main' of https://github.com/PumpkinJui/groupdocs`

这样总是有些凌乱的。

除此以外，没有提前拉取仓库还可能导致你和别人恰好修改了同样的内容，从而产生合并冲突。在安装了类似于 git-graph 插件的软件中，也会显得历史很乱，看不明白到底发生了什么。

现有的最佳解决方案是记住在 commit 前进行一次 pull。如果担心忘记，可以使用以下方法。

``` shell
git config --global pull.rebase true
git config --global rebase.autoStash true
```

在此以后，执行 `git pull` 会自动执行 rebase（变基）操作，并暂存已修改的内容。

### 关于 commit message

目前我们推荐采用改良的 [Conventional Commits](https://www.conventionalcommits.org/) 标准。

在多数情况下，提交信息使用一个标题即可，而无需详细内容。对于标题而言，格式如下：

``` plaintext
[类别]<空格>具体对象
```

其中「类别」一般是以下列表中的一个：新增、更新、优化、修复、移除、重构、重定向、归档。「具体对象」写明修改的范围即可，必要时再增加更多信息。例如：`[更新] 服务器成员表`、`[优化] 图片压缩`。

注意 `[新增] 增加服务器插图` 这种冗余写法是不受推荐的，完全可以把「增加」两字删掉。`[更新] 文档` 这种过于模糊，单纯读标题完全看不明白的写法也不推荐使用。

### 关于分支

分支是一个良好的测试工具，所属的内容将会在推送后部署在 `https://{branch}.groupdocs.pages.dev`。

以下分支含有永久内容，是群文档的不同部分，禁止删除或互相合并：

- main
- legacy_main
- legacy_anno

## [关于 Docusaurus](./migration_notes)

## 格式规范

之前的格式规范收之过窄，这主要是本人个人的心理健康原因导致的。如有造成过任何不便，还望谅解。

在标记语言中，格式规范[分为两种](https://prettier.io/docs/comparison)：一种是可能造成解析歧义乃至运行失败的，另一种是单纯为了整洁美观而几乎不影响实际运行的。例如，如果使用了 `[链接文本](链接内容)` 的格式，却没有写链接内容，单纯放了一个 `[链接文本]()` 在那里，就是前者；而表格到底要不要添加空格，让等宽字体下视觉完全对齐这种问题，就是后者。Markdown 毕竟是文档语言，所以这两者的界限会更加模糊。

对于前者这种质量问题，我们过去使用 [markdownlint](https://github.com/DavidAnson/markdownlint) 处理，目前计划改用 [ESLint](https://eslint.org/) 处理。对于后者这种风格问题，我们计划使用 [Prettier](https://prettier.io/) 处理。在群文档能够正常部署的前提下，这些都只是推荐操作。

此处将会很快添加更多信息。

### 盘古之白

#### 何谓「盘古之白」？

盘古之白，就是为了使中西文混排时格式更美观而人为添加的空格。

例如，对比以下两种排版方式：

- 群文档托管在GitHub上，使用Docusaurus构建。
- 群文档托管在 GitHub 上，使用 Docusaurus 构建。

后者的观感一般更加舒适，而前者则相对逼仄。

摘自《[少数派：给你的 Markdown 挑挑刺——语法检查器入门与进阶](https://sspai.com/prime/story/markdown-linter-a-primer)》：

> 中英文之间加入空隙，是为了实现视觉上的区隔，更加美观和易读。理想情况下，这种「空隙」应当由排版引擎自动加入，宽度宜为 1/4 个全角空格（em）。但由于数字排版环境复杂多变，在大多数时候（包括最常见的网页环境）不能指望排版引擎有这种能力，因此只能退而求其次，手动插入一个半角空格（因其宽度通常接近于 1/4 em），达到类似效果。

W3C 组织的《[中文排版需求](https://www.w3.org/TR/clreq/#mixed_text_composition_in_horizontal_writing_mode)》也对此作出了「原则上」的规范。

#### 什么时候添加「盘古之白」？

简明扼要地说，在渲染效果中的中文与英文、中文与数字、数字与单位之间加入空格，中文标点除外。详细规则见[此博客文章](https://blog.xiaoquankong.ai/zh/posts/chinese-document-typesetting-specification-spacing-of-pangu/)。

对于 @，如果是借助该符号提及某个成员，则应当将 `@xxx` 作为一个整体添加盘古之白，即使该成员使用中文昵称；其他情况下单独为 `@` 添加盘古之白。

#### 自动添加盘古之白

请安装 [AutoCorrect](https://huacnlee.github.io/autocorrect/)，建议阅读上面的少数派文章以获取配置指引。支持 VSCode 插件、Zed 插件和 LSP 协议！*但暂时不支持 Termux。*

如果 AutoCorrect 无法安装，请安装 pangu。同样建议阅读上面的少数派文章。请注意 pangu 没有对 Makedown 作语法适配，所以可能出现问题，一定要在审阅 `git diff` 或进行本地预览后再行提交。

#### 用于正确渲染的空格

在 GitHub 和 Docusaurus 上，一些文字效果在没有空格时不会正常生效，例如删除线 `~~`、斜体 `*`、粗体 `**` 或这几种混用，在其中一端或两端临近标点符号时，有时无法正常渲染出文字效果。

具体来说，`**重要：**内容` 会被渲染为

**重要：**内容

同时，在 Markdown 语法中，一些文字效果在有空格时不会正常生效。如斜体 `*` 和粗体 `**` 所包裹的文字内侧如有空格，则会显示为星号，而不是产生斜体或粗体效果。

具体来说，`你* 好 *啊` 会被渲染为

你* 好 *啊

具体原因见[此文章](https://sspai.com/post/108768)。虽然 Docusaurus 使用的是 MDX 语法，但也存在同样的问题。

此时应优先使内容正确渲染，而无所谓空格问题。同时，我个人建议[减少格式滥用](https://sspai.com/post/65492)，去除不必要的格式。

### 引用相关

#### 引用块

使用引用块时，宜在每行前均加入 `>` 并加空格，在需要换行的位置仅使用一个 `>` 并换行。例如：

``` markdown
> 全世界无产者，联合起来！
>
> Working men of all countries, unite!
```

渲染为：

> 全世界无产者，联合起来！
>
> Working men of all countries, unite!

如在需要换行的位置不加只有 `>` 的空行：

``` markdown
> 全世界无产者，联合起来！
> Working men of all countries, unite!
```

将会被渲染为一行：

> 全世界无产者，联合起来！
> Working men of all countries, unite!

#### 引用内容

引用群成员昵称时，对于该成员在一篇文章中的第一次出现，使用 `@{成员昵称}` 引用。此后仅使用成员昵称即可。

请尽量使用 Markdown 格式 `[描述](链接)` 及 `![描述](图片链接)`，并请务必填写描述内容。

引用互联网文章时，请写全网址（包含 `https://`）。如网页支持 HTTPS，请填写 HTTPS 而非 HTTP。

在链接位置填写文件（相对）路径，可实现对群文档其他文件的引用。

引用图片时，请将图片以最高清晰度下载，移动至群文档的 static 目录下，在重命名后使用文件路径进行引用。相同用途的图片应当只有一个名称，不要因为图片内容更新（比如地铁图）就把图片名跟着改来改去的；想写版本号请去文档里面写。

## 图片压缩

参考 @祉语 的建议，大多数图片会通过压缩减少大小，以优化加载速度，并减小仓库体积。

图片压缩由 @PumpkinJui 自行操作。原图片仍在 `groupdocs-images` 仓库可用。

不被压缩的图片包括：

- 压缩后会影响协作的，如地铁图
- 已经被 QQ 压扁了的，如群公告配图
- 原图片不清晰的
- 压缩会过度影响图片清晰度的
- 要求高质量图片的
- 压缩后比压缩前还大的
- 其他一些特殊情况

## 关于 AI

我们已经了解 AI 在当下的实用程度。但为了群文档的整体质量，我们**不允许直接粘贴 AI 的输出**而不进行修改或测试。

直接粘贴是图省事和不负责任的举动。如果一篇文档有 90% 甚至 100% 都是 AI 写的，那要协作者干什么？

尤其应当注意到 Minecraft 是在高速迭代的，每个版本都有细微的不同，AI 的知识库和联网搜索能力还不足以处理，因此写出来的东西很有可能在新版本中已经有所变化。

最起码，这些输出应当被仔细阅读或实际测试，并对其中错误、过时和不合适的内容进行修改。同时应当做出来源标注，至少说明哪部分来自什么 AI 模型。
