---
sidebar_position: 3
description: 新工具到来！
---

# 工具链更新

本篇文档中将介绍 2026 年 09 月引入的一系列工具，并说明如何迁移。

## pnpm

### pnpm 简介

以往我们使用的是 Node.js 自带的 npm。它具有一些[缺点](https://pnpm.io/motivation)，例如安装速度慢、空间占用大等，有两个 Docusaurus 项目，硬盘上就会有两份 Docusaurus 依赖。npm 还会把所有依赖包全部堆在 `node_modules` 根目录内，导致一种被称为「幽灵依赖」的现象，也就是项目依赖 A 包，A 包依赖 B 包，然后项目就能直接引用 B 包而无须声明依赖。群文档本身也曾经存在此问题（见提交 `7364577`）。

因此我们引入了 [pnpm](https://pnpm.io/)（performant npm）。pnpm 之于 npm，好比 uv 之于 pip。它使用了[符号链接和硬链接](https://sspai.com/post/66834)这样的先进技术，优化了安装逻辑，并且修改了 `node_modules` 的结构。这就带来了显著的提升。

### 安装 pnpm

可以直接通过 npm 安装。运行以下命令：

```shell
npx get-pnpm
```

也可使用其他方式，例如[安装脚本](https://pnpm.io/installation#on-windows)、Scoop、Chocolatey 等。但既然我们已经有 npm 了，用这个最方便，而且在 Windows 上更不容易出问题。

安装以后如果需要升级 pnpm，就直接运行：

```shell
pnpm self-update
```

考虑到 Windows Defender 可能会对性能造成影响，可以在管理员终端运行以下命令，将 pnpm 仓库加入 Windows Defender 白名单：

```powershell
Add-MpPreference -ExclusionPath $(pnpm store path)
```

如果命令返回 `0x800106ba` 错误，这意味着 Windows Defender [已被禁用](https://learn.microsoft.com/en-us/defender-endpoint/command-line-arguments-microsoft-defender-antivirus#common-mpcmdrun-errors)，那就别管它了。

### 重新安装依赖包

请手动删除项目本地的 `node_modules` 目录。

为了更快地删除目录，可以在 PowerShell 中使用 `Remove-Item -Recurse` 命令删除（有进度条），或在 cmd 中使用 `rd /s /q` 删除（无进度条）。专门写这个是因为，资源管理器使用 Shift+Delete 快捷键的删除方式会先发现文件，然后再删除，导致删除速度很慢。

删除后打开终端，将工作目录切换到当前目录。运行：

```shell
pnpm i
```

之后一切如常即可。涉及 `npm` 和 `npx` 的命令，基本都是前面加个 p 照常用。例如原来用 `npm start` 启动本地预览服务器，现在用 `pnpm start` 即可。

此外，[caniuse-lite](https://browsersl.ist/) 会不定期要求更新。请使用以下命令完成该操作：

```shell
pnpm dlx update-browserslist-db latest
```

注意到该操作会优先匹配 pnpm 锁文件，而 npm 锁文件会被忽略。因此为保留对 npm 的向下兼容，需要在 pnpm 锁文件成功更新后，将其暂时移出目录，并重新执行该命令。

此时，npm 会重新安装 `node_modules`，该操作无法避免。为了在使用后去除 npm 的环境并继续使用 pnpm，请删除整个 `node_modules` 目录，但该目录中的 `.pnpm` 目录除外。然后，重新执行 `pnpm i` 即可重建链接。_因此没事干不用老搞这个更新。_

我个人也推荐把所有 npm 全局包及其他项目使用的 `node_modules` 全部迁移到 pnpm，毕竟多一个 p 少一个 p 真的很容易打错，而且我目前还没见过只支持 npm 而不支持 pnpm 的包。此外，使用越多，pnpm 的复用越高效。

全局包可以先 `pnpm setup` 创建 PATH，然后 `npm list -g` 查看已经安装的全局包，之后 `pnpm i -g` 添加这些包，检查后最后 `npm uninstall -g` 卸载原有的 npm 全局包。

项目包可以先 `pnpm import` 导入原有的 `package-lock.json` 锁文件，然后按上述步骤删除 `node_modules` 目录，之后再 `pnpm i` 并删除原有的锁文件。同时建议把锁文件加入 `.gitattributes`：

```plaintext
pnpm-lock.yaml -diff
```

### 故障排除

由于涉及到符号链接和硬链接的使用，以及 `node_modules` 目录的更改，pnpm 有可能会出现报错，例如无法安装 pnpm，或者无法安装依赖。这主要发生在一些非标准平台或特殊环境，例如终端模拟器。

遇到这种情况，可以优先尝试使用：

```shell
pnpm config set --location project node-linker hoisted
```

然后重试安装依赖。记得加 ignore，不要把新加这行推送到 GitHub。

如果还是存在问题，可以尝试用回 npm。群文档暂时保留了对 npm 的兼容，但可能随时移除。

但实际上，某些平台在指定环境下本来就安装不了依赖，npm 也不行。当安装位置位于内部存储时，Termux 使用 npm、pnpm、pnpm + nodeLinker 都会报错，只是时间早晚的问题。这样的情况没有什么办法，除非把仓库改到 Termux 应用程序内部环境，或者直接使用 `-g` 全局安装。

## Prettier

### Prettier 简介

标记语言，包括 Markdown 和 JavaScript 等语言在内，可能存在质量和风格两种问题。相对应地，有两种工具用来解决这些问题：代码检查工具（linter）和代码格式化工具（formatter）。

Markdown 是一种标准 [非](https://yihui.org/cn/2017/08/markdown-flavors/) [常](https://daringfireball.net/projects/markdown/) [非](https://commonmark.org/) [常](https://github.github.com/gfm/) [混](https://pandoc.org/MANUAL.html#pandocs-markdown) [乱](https://mdxjs.com/) 的语言。Docusaurus [使用](https://docusaurus.io/docs/markdown-features)的是 MDX，这种方言支持在 Markdown 中间加入 JSX 组件。

为了更简便地规范 Markdown 格式，我们引入了 [Prettier](https://prettier.io/)。Prettier 是一个代码格式化工具，用于终结所有持续不断的代码风格之争。除了 Markdown 以外，它还支持很多语言，例如群文档其他组件使用的 JavaScript、JSON、YAML 和 CSS。

「Prettier is [_opinionated_](https://prettier.io/docs/option-philosophy)」，字面意思上可以理解为它有着自己的想法。它没有很多可以配置的选项，或者从另外一方面说也没有太多配置的必要。在字面意义上，我们只修改了两条 Prettier 的默认配置。

### Prettier 的安装

如果你已经运行过 `pnpm i`，那它已经存在于项目的依赖中了。

如果需要和编辑器集成，请参考[对应的文档页面](https://prettier.io/docs/editors)。这时考虑到复杂的编辑环境，也可以将 Prettier 全局安装，以避免本地编辑器的任何依赖问题：`pnpm i -g prettier`。如果你没用 pnpm 装过全局包，需要先 `pnpm setup`。

有些时候，为了在编辑器等需要多次独立调用 Prettier 的环境中性能更优，也可以选用 [Prettierd](https://github.com/fsouza/prettierd)，这里不展开讨论，可以详询 AI。

### 使用 Prettier

群文档已经配置了 Prettier。可以直接在群文档根目录运行：

```shell
pnpm exec prettier -c .
```

来查看群文档是否已经被全部格式化。

如果有文件还没有被格式化，就使用以下命令进行格式化：

```shell
pnpm exec prettier -w .
```

然后再提交就可以了。

如果全局安装了 Prettier，就可以省略 `pnpm exec`。

如果使用了编辑器集成，比如 VSCode 插件，按插件说明使用即可。一般来说，开启保存时自动格式化（Format On Save），然后忘掉它就可以了。

### 兼容 Prettier

Prettier 有一些原本我们不常用的设计，例如它的斜体使用 `_` 而非 `*` 标记（大概是为了和粗体更好区分），以及它的表格是强制对齐的。前者只是一个习惯问题，原来怎么写就怎么写，最后格式化就行了；但后者有可能会造成一些麻烦。这里所谓「兼容」，指的就是兼容 Prettier 的表格。

以一个示例来看，原来我们写表格是这个样子的：

<!-- prettier-ignore-start -->

```markdown
| foo | bar | baz |
| :--- | :---: | ---: |
| yes | or | no |
| hey there | hello world | how are you |
```

<!-- prettier-ignore-end -->

Prettier 会把它变成这个样子：

```markdown
| foo       |     bar     |         baz |
| :-------- | :---------: | ----------: |
| yes       |     or      |          no |
| hey there | hello world | how are you |
```

在等宽编辑环境中很工整啊！神清气爽！

但它还会把这样的表格：

<!-- prettier-ignore-start -->

```markdown
| 一 | 二 | 三 |
| :--- | :---: | ---: |
| yes | or | no |
| 我是谁 | 我从哪里来 | 我要到哪里去 |
```

<!-- prettier-ignore-end -->

变成这个样子：

```markdown
| 一     |     二     |           三 |
| :----- | :--------: | -----------: |
| yes    |     or     |           no |
| 我是谁 | 我从哪里来 | 我要到哪里去 |
```

Emmm…… huh?

如果最后这个表格在编辑器中仍然很工整，那就无须作任何更改。如果长得像下面这张图一样，就必须操心一下字体了。

![Prettier Playground](/about/contributors/new_toolchain/broken.webp)

这并不是 Prettier 的问题，它对 CJK 的支持相对已经比较完善了。在表格中存在中文（理论上是所有 CJK 字符，但我们这里只谈中文）时，它的处理方式是把中文字符换算成两个英文字母的宽度。

理论上，等宽字体就应该把中文字符做成两个英文字母的宽度，但因为包括重视程度在内的一系列原因，很多（想了一下可能是绝大多数）等宽字体要么不支持中文，要么没有调整中文的宽度。或者，正是因为不支持中文，系统用了宋体或者微软雅黑等默认字体，才导致宽度不一致。

其实也可以理解吧，大多数等宽字体只做了拉丁字母，最多再做一个西里尔字母。中文字符数量又多，字体作者本人也用不到，自然就不做了。这就跟中文字体的英文字符，设计基本都是充话费送的水准一样。

这时，应当考虑更换编辑器字体。字体可以根据自身喜好寻找和选择，此处为了节省寻找和评估的精力，作一些推荐。考虑中文支持、宽度 2:1 和美学因素，我个人推荐以下三种字体：[Maple Mono](https://font.subf.dev/zh-cn/)、[LXGW Bright Code](https://github.com/lxgw/LxgwBright-Code)、[Sarasa Mono](https://github.com/be5invis/Sarasa-Gothic)。

以下对三种字体进行简要介绍。下载时，请善用[镜像](../../tools/howto/access_github#代理加速下载网站)。

![MapleMono-NF-CN-unhinted-V7.9](/about/contributors/new_toolchain/maple.webp)

Maple Mono 是一款拥有独特字形、丰富连字和 [Nerd Fonts](https://www.nerdfonts.com/) 支持的字体。它原生提供[特性冻结](https://font.subf.dev/zh-cn/playground/)，意味着可以高度自定义，更轻松地满足多样化需求。中文部分基于 [Resource Han Rounded](https://github.com/CyanoHao/Resource-Han-Rounded)（资源黑体），风格圆润。

[下载](https://font.subf.dev/zh-cn/download/)选择 MapleMono-NF-CN-unhinted 即可。[自定义](https://font.subf.dev/zh-cn/playground/)时，在修改特性以后点击「自定义构建」，选择「自动下载」，格式和字符集选择「NF-CN」，Hinted 保持关闭，CORS 代理地址改为 `https://gh.sevencdn.com/https://github.com`，点击「构建并下载」即可。这一过程会首先下载字体包，然后在浏览器内逐个构建 16 种变体，耗时较长。

也可以直接下载[本人自定义的版本](https://static.908878.xyz/MapleMono-NF-CN-unhinted-patch-V7.9-260917.zip)：Default 字宽，开启了 calt、cv02、cv05、cv35、cv42、cv43、cv97、ss03、ss07。托管于 Cloudflare R2。

![LxgwBrightCodeNF-v2.922](/about/contributors/new_toolchain/lxgw.webp)

LXGW Bright Code 是由 [LXGW WenKai](https://github.com/lxgw/LxgwWenKai)（霞鹜文楷）和 [Monaspace Argon](https://monaspace.githubnext.com/) 合并而成的字体。Monaspace 支持 text healing，可以改善较窄和较宽字母并排时的显示效果。字体连字等功能，可以通过在编辑器中指定 Monaspace 的 OpenType 特性（见官网或 [FontDrop](https://fontdrop.info/)）来开启。

[下载](https://github.com/lxgw/LxgwBright-Code/releases/latest)选择 LxgwBrightCodeNF 即可，该版本带有 Nerd Fonts 支持。

![SarasaMonoSC-TTF-Unhinted-1.0.41](/about/contributors/new_toolchain/sarasa.webp)

Sarasa Mono（更纱黑体）是由 [Source Han Sans](https://github.com/adobe-fonts/source-han-sans)（思源黑体）和作者自制的 [Iosevka](https://typeof.net/Iosevka/) 合并而成的字体，支持连字。Iosevka 的英文更窄，因此对空间的利用更为充分，可以在一行内塞下更多英文字符，但另一面看来也更加局促。该字体不支持 Nerd Fonts，有相关需求的可能需要自行打包。

[下载](https://github.com/be5invis/Sarasa-Gothic/releases/latest)选择 SarasaMonoSC-TTF-Unhinted 即可。该字体在教育网也有 [镜](https://mirrors.tuna.tsinghua.edu.cn/github-release/be5invis/Sarasa-Gothic/LatestRelease/) [像](https://mirror.nju.edu.cn/github-release/be5invis/Sarasa-Gothic/LatestRelease/) 可用。

更换字体详见各编辑器设置页面。更换以后再看表格，应该就能够正常对齐了。

除了上面的字体以外，表格还有一个风险：如果写得内容太长，超出了一行，排版就会彻底变成灾难。

![不知道我们怎么走到这一步的](/about/contributors/new_toolchain/long.webp)

上图取自[成员信息表](../../servers/registered_members)。遇到这种情况，可以尝试关闭编辑器的自动换行，或者改用 WYSIWYG（所见即所得）的 Markdown 专用编辑器，如 [Typora](https://typoraio.cn/) 或 [MarkText](https://www.marktext.me/)。
