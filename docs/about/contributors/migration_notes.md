---
sidebar_position: 2
description: Docusaurus 迁移后的注意事项和新语法！
title: Docusaurus 编辑指南
---

# Docusaurus 编辑指南

> 作者：一只卑微的量筒

## 群文档已经正式迁移到 Docusaurus 了！

群文档 er 们你们好！你们已经知道，我在春节之前对群文档的迁移工作起了浓厚的兴趣，然后花了很大的功夫将群文档从 GitBook 迁移到了 Docusaurus 上。你们可以从这个群文档的风格中看到很大的变化！

这次迁移带来了很多全新的功能，但也同时带来了很多编辑问题。正所谓家家有本难念的经，在 GitBook 上有自己的方便和不便之处，而在新的 Docusaurus 上，也同样有自己的方便和不便之处。在这里，我就把我数天内总结到的一些经验和基本操作方法都写在这里，希望你们可以认真查看！>wO

PS：你可以在 [Why not GitBook?](./gitbook) 了解我们迁移的理由。

:::note[注意：下文的简写规范]

在下文中，我会把 Docusaurus 简称为「小恐龙」。

:::

## 使用小恐龙框架进行本地预览

:::warning[注意]

这一步虽然比较艰难，但是非常重要！

因为在小恐龙上，一些你曾经熟悉的语法可能不再适用或有更改，而小恐龙对构建的要求又比较高，例如无法找到图片就会导致构建失败。贸然进行更改是比较危险的，除非你非常清楚你在做什么。

如果你不希望在编辑并推送到群文档后构建出错，可以在下面三项中选择一项：

- 跟着我们这里走，使用小恐龙框架提供的本地开发服务器，以便于在提交前预览效果；或者跟着小恐龙的[官方文档](https://tutorial.docusaurus.io/)走也一样。当然，这是一个英文网站，如果你不想看就还是跟着我们走吧！
- 或者，如果你嫌上面的步骤太麻烦，可以在每次在需要图片链接、文档链接的地方（因为这是最容易出错的地方）先空下，然后联系 @量筒 或 @南瓜汁 等会处理这些东西的人处理。
- 你也可以使用分支功能。首先在一个新分支上进行修改，在推送后就可以使用网址 `https://{branch}.groupdocs.pages.dev/` 查看预览页面。这样，即使出现一些问题，也有弥补的机会，而且不会影响到群文档主分支的正常编辑和部署。*当前因为控制台误操作而不可用。*

:::

我很清楚，这一步会提高群文档 er 们编辑群文档的门槛；但是小恐龙相比于以前的 GitBook 来讲，使用门槛明显提高，如果不太留意就可能会出错，导致你的编辑和其他人后续的编辑都无法成功在 CloudFlare Pages 部署。说人话就是，**一次错误更改会导致所有后续更改都无法显示出来**！所以，事先在本地预览效果就显得比较重要。

这一节所述内容除部分 `cmd` 命令外，全平台通用。

<details>

<summary>Termux 使用特别说明</summary>

安装小恐龙框架时，安装脚本需要创建 `symlink` 来识别和调用小恐龙。如果没有 ROOT 权限，这一操作无法在外部目录，即 `~/storage/` 的子目录中进行。

解决方法是不在外部目录部署。直接在 `~` 目录或其他任意子目录运行相关命令，都可以正常运行。

对于文件管理，推荐使用 [MT 管理器](https://mt2.cn/)。在 Termux 运行时，打开 MT 管理器，并在左侧边栏的右上角点击「添加本地存储」，选择 Termux 并点击「选择全部」。此后，即可在 Termux 运行时访问 `~` 目录。这一方法有相关缺陷，尽量在 Termux 内部使用命令解决文件管理问题是终极解决方案。

有报告称 Docusaurus 在 Termux 构建较为缓慢。

</details>

### 第 1 步：安装 `Node.js`

以前的 GitBook 和现在的小恐龙，都需要 `Node.js` 作为一个基础框架进行构建。好在，进行这一步非常简单，你只需要进入 [Node.js 的官网](https://nodejs.org/zh-cn)，然后点击「下载 Node.js (LTS)」，它就会自动为你下载 `Node.js`。小恐龙需要的版本是 `18.0` 或者更高，所以放心下载即可！

下载好之后，你会得到一个 `.msi` 安装包文件，打开之后一直点「Next」，等它安装完就完事啦！

### 第 2 步：初始化 `Node.js`

在 `Node.js` 中，我们通过包管理器 `NPM` (Node Package Manager) 来安装小恐龙。不幸（但又有点理所当然）的是，`NPM` 的官方库速度偏慢。因此，为了不要让下载问题干扰到安装流程，我们需要给它设置国内的镜像。这里用的是淘宝镜像。

只需要打开 `cmd`，然后输入：

```shell
npm config -g set registry https://registry.npmmirror.com
```

回车以后就完事啦！

<details>

<summary>等下，如何打开 `cmd`？</summary>

最简单的办法：按 <kbd>Win</kbd> + <kbd>R</kbd>，输入 `cmd`，回车。这会在 `%USERPROFILE%` 目录下打开一个 `cmd` 窗口。

后面的某些操作要在指定的目录下进行。如果你需要指定一个运行目录，请先用文件资源管理器（可近似看作「此电脑」）找到那个目录，然后点击地址栏（显示当前路径的那个长条），输入 `cmd`，回车。或者如果你会操作的话，也可以用 `cd` 命令，但这可能更加麻烦，还会有 `/d` 的问题。

`PowerShell` 在大部分情况下也可以用，但有些语法可能和 `cmd` 不兼容。

</details>

:::tip[`cmd` 相关操作小技巧]

- 选中任何字符后在窗口中右键，相当于复制
- 未选中任何字符时在窗口中右键，相当于粘贴
- 路径中的 `/` 和 `\` 不作区分
- 群文档里面的代码，可以通过鼠标悬停在代码块上，然后点击靠右上角的按钮一键复制；手机换成先点代码块再点按钮
- 文件资源管理器中，右键地址栏，选择「复制地址」，可以快速复制当前目录的绝对路径
- 文件资源管理器中，左键选中文件，按 <kbd>Shift</kbd> 并同时右键，右键菜单中的「复制为路径」可以快速复制选中文件的绝对路径

:::

### 第 3 步：初始化小恐龙

现在，键入下面的命令来初始化你的小恐龙框架：

```shell
npm init docusaurus@latest my-website classic
```

在等了一会儿之后，它会问你：你想用什么编程语言？

```shell-session
$ npm init docusaurus@latest my-website classic

> npx
> create-docusaurus my-website classic

? Which language do you want to use? » - Use arrow-keys. Return to submit.
>   JavaScript
    TypeScript
```

群文档使用的是 `JavaScript`，不用选择，直接按下回车即可。

接下来就等它自动安装吧！等到它提示「Happy building awesome websites!」的时候，就大功告成了！

如果你感兴趣的话，可以使用下面两条命令看看在本地构建的示例网页是什么样的：

```shell
cd my-website
npm start
```

### 第 4 步：将 `/node_modules` 迁移到群文档文件夹

但是我们的目标是要编辑群文档，而不是你刚刚构建的网页！我们只需要刚刚这个网页的小恐龙框架，也就是 `/node_modules` 目录。

首先，我们需要知道群文档目录在哪。不管你把群文档放哪了，打开它并复制路径（方法在上面有）。我们不妨假设它是 `X:/groupdocs/`。

然后，回到刚刚那个 `cmd` 窗口，执行下列命令来移动框架：

```shell
robocopy "./my-website/node_modules" "X:/groupdocs/node_modules" /E /MT:32 /MOVE
```

这里的命令需要把群文档路径换一下再用，也就是把 `X:/groupdocs/node_modules` 换成 `不管群文档在哪里/node_modules`。

移动完成后，你可以使用以下命令来删除这个示例网站：

```shell
rmdir /s /q ./my-website
```

<details>

<summary>我能在文件资源管理器里面进行移动操作，而不用这些命令吗？</summary>

当然可以！用这些命令其实是为了节省找当前运行目录的麻烦，以及提升移动的速度。

小恐龙框架中的文件呈现一种小而零碎的特点，一共只有约 150 MB，但却包含了约 30000 个文件！有过相关经历的可能知道，文件资源管理器对这样的操作力有不逮，通常慢得离谱。

但是看到命令当中的 `/MT:32` 了吗？那意味着使用 32 线程进行操作。如果电脑撑得住，你甚至可以把它改得更大！这就在线程方面大大提高了移动速度。

如果你更愿意使用文件资源管理器操作，你可以找到 `cmd` 窗口光标左侧显示的那个路径并打开，然后把 `~/my-website/node_modules` 移动到 `X:/groupdocs/node_modules`，效果是一样的。

</details>

### 第 5 步：群文档预览版，启动！

接下来，这个命令行窗口就可以关掉啦！刚刚群文档那个窗口还留着吗？点击地址栏，输入 `cmd` 并回车，在这里打开一个新的命令行窗口。

然后，使用以下命令启动群文档预览：

```shell
npm start
```

不一会儿，你的浏览器就会自动启动到 [`localhost:3000`](http://localhost:3000/) 了！这个网页会构建现在的群文档文件，有助于你进行本地配置和优化。而且，它是实时渲染的！你进行的任何更改，在保存后都会立刻被呈现。

在运行预览页面时，`cmd` 窗口必须一直开着，同时会显示一些有用的日志信息；如果不再需要预览了，在命令行窗口按 <kbd>Ctrl</kbd> + <kbd>C</kbd> 即可停止！

<details>

<summary>哇，这岂不是群文档直接上网了？</summary>

其实不是这样的，它依然在本地待着。（如果这么容易就能上网，还要 CloudFlare Pages 干啥？）

这要从链接说起。有没有发现这个链接和平时上网看见的 `https://www.baidu.com/` 格式有所不同？

`localhost` 域名，指向的不是外部的服务器，而是你自己的设备。我们的确是启动了「本地开发服务器」，但它只能给你这一台设备用，其他设备都用不了。

</details>

## 在小恐龙上编写需要注意哪些问题？

虽然基于小恐龙的编写自由度比以前高了很多，但是请注意，**小恐龙对常规的 MarkDown 兼容性并不好**。这就意味着有很多东西需要额外注意，而且我们丢失了对 GitHub 的一部分兼容性。

### 图片链接

这是在小恐龙上最容易出错的地方，也会导致**编译错误**。

小恐龙的图片会默认在 `static` 目录下寻找，因此在写入图片链接的时候请务必注意：**不要使用相对路径，并删除 `/static` 链接**！！

例如，图片的链接本来是：

```markdown
![这是一张图片！](../../../static/rules/rules_2023.jpg)
```

那么，请你写成：

```markdown
![这是一张图片！](/rules/rules_2023.jpg)
```

### 文档间链接

这是在小恐龙上第二容易出错的地方。虽然经过我的一通捣鼓，至少让它不会报错了，然而也仅限于不会报错。

在写入文档间链接的时候请注意：**把链接末尾的 `.md` 删掉**！

例如，如果要从这篇文档跳转到另一篇文档，原来会这么写：

```markdown
[我要跳转到另一篇文档咯](../../rules/encounter.md)
```

那么，请你改成这样：

```markdown
[我要跳转到另一篇文档咯](../../rules/encounter)
```

这个对你的编辑影响并不会很大，至少在 VSC 里，它还是能正常跳转。（不用 VSC 的大哭大闹）

这么做的理由，是因为小恐龙在跳转链接时，是直接按照你所给的链接跳转的，所以带上这个 `.md` 和不带上它，是两个不同的链接。而小恐龙渲染好 MarkDown 后，是不会有 `.md` 的后缀的，也就容易导致链接失效。

### 慎用 `<>` 和 `{}`

是的，你没看错，慎用。这个错误也会导致**编译错误**。

实质上，小恐龙是将这些 MarkDown 看作 MDX 文件来处理的，而这类文件的编译要比普通的 MarkDown 严格得多。其中，`<>` 会被视作 HTML 标签，而 `{}` 则会被视作 JSX 代码块，一旦出现问题就会报错。

如果你确实需要使用这两个符号，尽可能使用下面的方法来转义代替：

- 用 `\{` 代表 `{`，例：\{。
- 用 `\<` 代表 `<`，例：\<。

当然，如果放到代码块或行内代码块里，则不必考虑那么多了。代码块当中的字符都是原样呈现的，甚至包括 `\` 本身。

### 文件名开头为数字的链接

如果文件名的开头为数字，那么链接名会自动把开头的数字移除。

因此，如果你要链接到类似于 30 种死法的链接，以前你可能会这么写：

```markdown
[30 种死法主页](../../resources/completed/30_ways_to_die/homepage)
```

那么，请**把 `30_` 删掉**，即

```markdown
[30 种死法主页](../../resources/completed/ways_to_die/homepage)
```

## 小恐龙的独特优势

说了一些注意事项，接下来我们要聊聊迁移的优势了！群文档迁移到 Docusaurus 之后，使用的语法被称为 [MDX](https://mdxjs.com/)，相比于 [CommonMark](https://commonmark.org/) 和 [GitHub Flavored Markdown](https://github.github.com/gfm/)，有很多独特的优势。以下是我总结的几条有意思的新特性，希望对你的文章编写有所帮助！当然啦，如果以后还有新的有趣用法，我会在这里继续补充的！

### 文档前言（Front Matter）

:::info

关于文档前言的更多信息，可以查阅 [Docusaurus 官方文档](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter)。

:::

也许你注意到了，现在如果你点击目录中的折叠列表本身，会分块显示其中的条目。例如，你可以试着点击目录中的「维护者专用页面」折叠列表，会看到一个全新的页面！

其中，有一些东西的显示就是依靠**文档前言**实现的。文档前言写在一篇文档的**最开头**，代码如下：

```markdown
---
键: 值
---
```

下面我会列出几个比较有用的参数（主要是群文档中已经用到的），之后再补充。

| 键 | 值 | 意义 |
| --- | --- | --- |
| `title` | 任意文本 | 在侧边栏显示的标题 |
| `description` | 任意文本 | 显示在列表页中的文章描述 |
| `last_update` | `FrontMatterLastUpdate` | 记录上次更新的日期和作者 |
| `sidebar_position` | 整数 | 在侧边栏中排到第几位 |

一个标准的文档前言如下：

```markdown
---
title: awa
description: 一个简短的描述
sidebar_position: 3
last_update:
  date: 01/30/2025
  author: pwp
---

# 标题

正文
```

### 标注块（Admonition）

:::info

关于标注块的更多信息，可以查阅 [Docusaurus 官方文档](https://docusaurus.io/docs/markdown-features/admonitions)。

:::

在写「备注」「注意」等等你希望起到提示作用的地方，可以使用标注块。在下面来看看小恐龙提供的 5 种默认标注块的写法吧！

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="note" label="备注块（白色）" default>
  <Tabs>
  <TabItem value="effect" label="效果" default>

:::note

这是一个白色的备注块！

:::

  </TabItem>
  <TabItem value="code" label="代码">

```markdown
:::note

这是一个白色的备注块！

:::
```

  </TabItem>
  </Tabs>
  </TabItem>

  <TabItem value="tip" label="提示块（绿色）">
  <Tabs>
  <TabItem value="effect" label="效果" default>

:::tip

这是一个绿色的提示块！

:::

  </TabItem>
  <TabItem value="code" label="代码">

```markdown
:::tip

这是一个绿色的提示块！

:::
```

  </TabItem>
  </Tabs>
  </TabItem>

  <TabItem value="info" label="信息块（蓝色）">
  <Tabs>
  <TabItem value="effect" label="效果" default>

:::info

这是一个蓝色的信息块！

:::

  </TabItem>
  <TabItem value="code" label="代码">

```markdown
:::info

这是一个蓝色的信息块！

:::
```

  </TabItem>
  </Tabs>
  </TabItem>

  <TabItem value="warning" label="警告块（黄色）">
  <Tabs>
  <TabItem value="effect" label="效果" default>

:::warning

这是一个黄色的警告块！

:::

  </TabItem>
  <TabItem value="code" label="代码">

```markdown
:::warning

这是一个黄色的警告块！

:::
```

  </TabItem>
  </Tabs>
  </TabItem>

  <TabItem value="danger" label="危险块（红色）">
  <Tabs>
  <TabItem value="effect" label="效果" default>

:::danger

这是一个红色的危险块！

:::

  </TabItem>
  <TabItem value="code" label="代码">

```markdown
:::danger

这是一个红色的危险块！

:::
```

  </TabItem>
  </Tabs>
  </TabItem>
</Tabs>

---

此外，标注块还支持以下两种特殊情况！

<Tabs>
  <TabItem value="title" label="标注块自定义标题" default>

你可以在声明的类型后面，加上一个 `[text]` 来**自定义标注块的标题**！下面是一个示例：

  <Tabs>
  <TabItem value="effect" label="效果" default>

:::warning[这是一个自定义标题！]

这是一个黄色的警告块！

:::

  </TabItem>
  <TabItem value="code" label="代码">

```markdown
:::warning[这是一个自定义标题！]

这是一个黄色的警告块！

:::
```

  </TabItem>
  </Tabs>
  </TabItem>

  <TabItem value="nest" label="标注块嵌套">

你可以在标注块里面嵌套一个标注块！下面是一个示例：

  <Tabs>
  <TabItem value="effect" label="效果" default>

:::warning[这是外层标注块]

这是外层的内容！

:::info[这是内层标注块]

这是内层的内容！

:::

  </TabItem>
  <TabItem value="code" label="代码">

```markdown
:::warning[这是外层标注块]

这是外层的内容！

:::info[这是内层标注块]

这是内层的内容！

:::
```

  </TabItem>
  </Tabs>
  </TabItem>
</Tabs>

### 代码块

:::info

关于代码块的更多信息，可以查阅 [Docusaurus 官方文档](https://docusaurus.io/docs/markdown-features/code-blocks)。

:::

以下是小恐龙的代码块所支持的一些特殊特性！

<Tabs>
  <TabItem value="classic" label="经典写法" default>

这是我们所熟知的经典代码块写法。

  <Tabs>
  <TabItem value="effect" label="效果" default>

```plaintext
这是一个代码块
```

  </TabItem>
  <TabItem value="code" label="代码">

````markdown
```language
这是一个代码块
```
````

  </TabItem>
  </Tabs>
  </TabItem>

  <TabItem value="title" label="带标题">

你可以在声明语言类型之后，再声明 `title`，这样你的代码块上就会出现标题！

  <Tabs>
  <TabItem value="effect" label="效果" default>

```plaintext title="awa"
1
2
3
```

  </TabItem>
  <TabItem value="code" label="代码">

````markdown
```plaintext title="awa"
1
2
3
```
````

  </TabItem>
  </Tabs>
  </TabItem>

  <TabItem value="highlight" label="代码行高亮">

你可以在声明语言类型之后，再用 `{lines}` 声明要高亮的行号！

  <Tabs>
  <TabItem value="effect" label="效果" default>

```plaintext {2-4,6}
1
2
3
4
5
6
```

  </TabItem>
  <TabItem value="code" label="代码">

````markdown
```plaintext {2-4,6}
1
2
3
4
5
6
```
````

  </TabItem>
  </Tabs>
  </TabItem>

  <TabItem value="showlinenumbers" label="显示代码行数">

你可以在声明语言类型之后，再用 `showLineNumbers` 显示行号！

  <Tabs>
  <TabItem value="effect" label="效果" default>

```plaintext showLineNumbers
1
2
3
```

  </TabItem>
  <TabItem value="code" label="代码">

````markdown
```plaintext showLineNumbers
1
2
3
```
````

  </TabItem>
  </Tabs>
  </TabItem>
  <TabItem value="example" label="综合示例">

我们现在将前面 4 种功能综合起来进行一个示例吧！比如……30 种死法 2 的一个函数文件，也就是第 10 关的时间线，其中第 9 行就是检测粉床的一条关键命令！

  <Tabs>
  <TabItem value="effect" label="效果" default>

```plaintext title="BP_wstd/functions/levels/mainline/level_10/timeline.mcfunction" {9} showLineNumbers
# ===== 时间线 =====
# 仅限在lib/function_lists/timeline注册后，且启用时间线后执行

# --- 物品检测 ---
execute if score level10.itemTestBlackBed active matches 1 as @a[hasitem={item=bed,data=15}] run function levels/mainline/level_10/item_tests/black_bed
execute if score level10.itemTestBrownBed active matches 1 as @a[hasitem={item=bed,data=12}] run function levels/mainline/level_10/item_tests/brown_bed
execute if score level10.itemTestGrayBed active matches 1 as @a[hasitem={item=bed,data=7}] run function levels/mainline/level_10/item_tests/gray_bed
execute if score level10.itemTestLightGrayBed active matches 1 as @a[hasitem={item=bed,data=8}] run function levels/mainline/level_10/item_tests/light_gray_bed
execute if score level10.itemTestPinkBed active matches 1 as @a[hasitem={item=bed,data=6}] run function levels/mainline/level_10/item_tests/pink_bed
execute if score level10.itemTestWhiteBed active matches 1 as @a[hasitem={item=bed,data=0}] run function levels/mainline/level_10/item_tests/white_bed

# --- 给予玩家药效 ---
# 每秒给予1次

## 防火
execute if score tick time matches 2 run effect @a fire_resistance 30 0 true
```

  </TabItem>
  <TabItem value="code" label="代码">

````markdown
```plaintext title="BP_wstd/functions/levels/mainline/level_10/timeline.mcfunction" {9} showLineNumbers
# ===== 时间线 =====
# 仅限在lib/function_lists/timeline注册后，且启用时间线后执行

# --- 物品检测 ---
execute if score level10.itemTestBlackBed active matches 1 as @a[hasitem={item=bed,data=15}] run function levels/mainline/level_10/item_tests/black_bed
execute if score level10.itemTestBrownBed active matches 1 as @a[hasitem={item=bed,data=12}] run function levels/mainline/level_10/item_tests/brown_bed
execute if score level10.itemTestGrayBed active matches 1 as @a[hasitem={item=bed,data=7}] run function levels/mainline/level_10/item_tests/gray_bed
execute if score level10.itemTestLightGrayBed active matches 1 as @a[hasitem={item=bed,data=8}] run function levels/mainline/level_10/item_tests/light_gray_bed
execute if score level10.itemTestPinkBed active matches 1 as @a[hasitem={item=bed,data=6}] run function levels/mainline/level_10/item_tests/pink_bed
execute if score level10.itemTestWhiteBed active matches 1 as @a[hasitem={item=bed,data=0}] run function levels/mainline/level_10/item_tests/white_bed

# --- 给予玩家药效 ---
# 每秒给予1次

## 防火
execute if score tick time matches 2 run effect @a fire_resistance 30 0 true
```
````

  </TabItem>
  </Tabs>
  </TabItem>
</Tabs>

### 待办列表

这是一个 MarkDown 的扩展功能！在很多 MarkDown 语法中是自带的，只不过因为 GitBook 实在过于老旧，所以待办列表在旧版的群文档上无法渲染。但是，迁移之后，我们就可以正常使用这个功能了！

<Tabs>
  <TabItem value="effect" label="效果" default>

- [ ] 这是一个未完成的待办列表。
- [x] 这是一个已完成的待办列表！

</TabItem>
<TabItem value="code" label="代码">

```markdown
- [ ] 这是一个未完成的待办列表。
- [x] 这是一个已完成的待办列表！
```

  </TabItem>
</Tabs>

### 链接到特定章节

这同样也是一个 MarkDown 自带的功能！在旧版群文档中，我们并没有推广这个用法。这里就来简单介绍一下如何编写吧！

同一篇文档中有多个相同标题，以及标题中有空格和其他特殊字符的，有特殊的标题写法。如果你拿不准，可以在预览页面或部署页面中，将鼠标悬停在标题上，然后点击新出现的 `#`。此时，地址栏中链接末尾显示的标题就是这个标题的正确写法！

复制的链接可能会有中文转义，一个中文字符对应 `%xx%xx%xx`。如果为了兼容性考虑，可以把它原样保留；如果实在看不顺眼，可以改回原来标题里面的中文。

<Tabs>
  <TabItem value="inpassage" label="文章内链接" default>
  <Tabs>
  <TabItem value="effect" label="效果" default>

[点我链接到上面的待办列表](#待办列表)！

  </TabItem>
  <TabItem value="code" label="代码">

```markdown
[点我链接到上面的待办列表](#待办列表)！
```

  </TabItem>
  </Tabs>
  </TabItem>

  <TabItem value="outofpassage" label="文章外连接">
  <Tabs>
  <TabItem value="effect" label="效果" default>

[点我链接到 30 种死法 2 的下载](../../resources/completed/ways_to_die_2/homepage#下载)！

  </TabItem>
  <TabItem value="code" label="代码">

```markdown
[点我链接到 30 种死法 2 的下载](../../resources/completed/ways_to_die_2/homepage#下载)！
```

  </TabItem>
  </Tabs>
  </TabItem>
</Tabs>

### 选项卡

:::info

关于选项卡的更多信息，可以查阅 [Docusaurus 官方文档](https://docusaurus.io/docs/markdown-features/tabs)。

:::

你在本文前面的内容中，已经见过很多有关选项卡的内容啦，那么接下来我简单介绍一下选项卡的写法吧！

<Tabs>
  <TabItem value="effect" label="效果" default>

<Tabs>
  <TabItem value="ID1" label="苹果" default>

这是个苹果！🍎

  </TabItem>
  <TabItem value="ID2" label="橘子">

这是个橘子！🍊

  </TabItem>
  <TabItem value="ID3" label="香蕉">

这是个香蕉！🍌

  </TabItem>
</Tabs>

  </TabItem>
  <TabItem value="code" label="代码">

其中高亮代码只需要在全文中声明 1 次即可。各个 `value` 是不可重复的。

```html {1-2}
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="ID1" label="苹果" default>

这是个苹果！🍎

  </TabItem>
  <TabItem value="ID2" label="橘子">

这是个橘子！🍊

  </TabItem>
  <TabItem value="ID3" label="香蕉">

这是个香蕉！🍌

  </TabItem>
</Tabs>
```

  </TabItem>
</Tabs>

### 折叠块

MarkDown 支持在文档中使用大多数 HTML 的语法，其中就包含折叠块！

感谢 @鸽子 写的[这篇文档](../../tools/howto/hide_name)，让我意识到 Docusaurus 居然还支持折叠……

<Tabs>
  <TabItem value="withTitle" label="带标题" default>
  <Tabs>
  <TabItem value="effect" label="效果" default>

<details>

<summary>折叠标题</summary>

折叠的内容

</details>

  </TabItem>
  <TabItem value="code" label="代码">

```html
<details>

<summary>折叠标题</summary>

折叠的内容

</details>
```

  </TabItem>
  </Tabs>
  </TabItem>
  <TabItem value="noTitle" label="不带标题">

如果实在想不出来折叠标题写什么，也可以省略。

  <Tabs>
  <TabItem value="effect" label="效果" default>

<details>

折叠的内容

</details>

  </TabItem>
  <TabItem value="code" label="代码">

```html
<details>

折叠的内容

</details>
```

  </TabItem>
  </Tabs>
  </TabItem>
</Tabs>

### 无需手动编写目录

在迁移到小恐龙之前，我们每次编写新文章都要修改目录文件 `SUMMARY.md`。然而，迁移到小恐龙后，编写新文章将会自动生成左侧目录，也不再需要手动修改目录文件了！

## 写在最后

这篇群文档居然已经写了 1000 多行了，感谢你能看到这里！最后，祝你在新的群文档写作愉快~！
