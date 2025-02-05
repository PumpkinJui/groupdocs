---
sidebar_position: 1
description: Docusaurus 迁移后的注意事项和新语法！

---

<!-- markdownlint-disable MD026 -->
<!-- markdownlint-disable MD036 -->

# 群文档已经正式迁移到 Docusaurus 了！

> 作者：一只卑微的量筒

群文档 er 们你们好！你们已经知道，我在春节之前曾经对群文档的迁移工作起到了浓厚的兴趣，然后花了很大的功夫将群文档从 GitBook 迁移到了 Docusaurus 上。你们可以从这个群文档的风格看到很大的变化！所以，理所当然地，这次迁移带来了很多全新的功能变化，但是也同时带来了很多编写上的问题。正所谓家家有本难念的经，在 GitBook 上有自己的方便和不便之处，而在新的 Docusaurus 上，也同样有自己的方便和不便之处。在这里，我就把我数天内总结到的一些经验、基本操作方法都写在这里，希望你们可以认真查看！>wO

:::note[注意：下文的简写规范]

在下文中，我会把 Docusaurus 简称为「小恐龙」。

:::

## 我们为什么迁移到小恐龙？

当初迁移到小恐龙，主要是从以下角度考虑的：

- 小恐龙可以**带来更多丰富的功能**，例如折叠块、提示块、选项卡等。你可以在本文的[小恐龙的独特优势](#小恐龙的独特优势)找到相关描述！
- 这个迁移是群管理员 @南瓜汁 **已经预定好的**，他预计在 2025 年 12 月 31 日迁移完成，只是这次的迁移远远快于他的预期。
- 你还想要更多理由吗？至少它更酷了不是吗？ >:)

未来我们也不知道会不会有新的迁移，不过至少现在的小恐龙已经足够我们用很长一段时间了！

## 在本地 Windows 上构建小恐龙框架

:::warning[注意]

这一步虽然比较艰难，但是比较重要！

因为在小恐龙上，一些你曾经熟悉的语法可能不再适用或有更改，而小恐龙对构建的要求又比较高，例如无法找到图片的时候就会报错导致无法构建。贸然进行更改是比较危险的，除非这是一个小更改，或者你非常清楚你在做什么。

如果你不希望你在编辑完并上传到群文档后出错，你可以在下面两项中选择一项：

- 跟着我们这里走，在本地构建一套本地的小恐龙框架以便于你在本地电脑上提前预览效果，或者您也可以跟着小恐龙的[官方文档](https://tutorial.docusaurus.io/)进行下去。当然，这是一个英文网站，如果你不想看就还是跟我们来吧！
- 或者，如果你嫌上面的步骤太麻烦，你可以在每次在需要图片链接、文档链接的地方（因为这是最容易出错的地方）先空下，然后联系 @量筒 或 @南瓜汁 等会处理这些东西的人处理。

:::

我很清楚，这一步会提高群文档 er 们编写群文档的门槛，但是小恐龙相比于以前的 GitBook 来讲，编写要求有明显的提高，如果不太留意可能就会出错，导致你的编写以及后人的编写无法成功在 CloudPages 编译，说人话就是，**你的错误更改会导致更改以及后人的更改都无法显示出来**！所以，事先在本地预览效果就显得比较重要。接下来请跟着我们的步骤来，带你简单了解小恐龙。

### 第 1 步：安装`node.js`

在以前的 GitBook ，或者是现在的小恐龙，都需要`node.js`作为一个基础框架进行构建。好在，进行这一步非常简单，你只需要进入[node.js 的官网](https://nodejs.org/en)，然后点击「Download Node.js(LTS)」，它会自动为你下载最新正式版的`node.js`。小恐龙需要的版本是`18.0`或者更高，所以放心下载即可！

下载好之后，你会得到一个`.msi`安装包文件，打开之后，稍等一会儿，然后一直点「Next」，等它安装完就完事啦！

### 第 2 步：初始化小恐龙

打开 cmd，然后键入下面的命令来初始化你的小恐龙框架：

```plaintext
npm init docusaurus@latest my-website classic
```

在等了一会儿之后，它会问你：你想用什么编程语言？你可以用方向键来选择，但其实你也不用选，我们使用`JavaScript`，直接按下回车即可。

```plaintext
> npx
> create-docusaurus my-website classic

? Which language do you want to use? » - Use arrow-keys. Return to submit.
>   JavaScript
    TypeScript
```

接下来就等吧！等到它提示「Happy building awesome websites!」的时候，就大功告成了！如果你感兴趣的话，可以使用下面两条命令看看在本地构建的网页是什么样的：

```plaintext
cd my-website
npm start
```

<details>

<summary>等下，如何打开 cmd ？</summary>

如果你不知道如何打开，你可以选择：

- 如果你是 Windows 11，在你的开始菜单里找到「终端」。
- 或者，在开始菜单旁边的搜索菜单里搜索 cmd ，会显示「最佳匹配：命令提示符」，这就是你要找的 cmd 了。
- 或者，按 Win + R 键并输入 cmd，然后运行。

</details>

### 第 3 步：将`/node_modules`迁移到群文档文件夹

但是我们的目标是要编辑群文档，而不是你刚刚构建的网页！所以我们接下来把刚构建的网页的一些关键部分扒下来放到我们的群文档里面去。首先，我们需要分别找到下面两个路径并分别打开：

- 你刚构建的网页的文件夹，它位于`%userprofile%\my-website`。
- 你在本地的群文档文件夹，它位于......我怎么知道它位于哪里，这是你自己决定的。但总之，打开到群文档`groupdocs`文件夹。

然后，将`my-website`的`/node_modules`文件夹剪切（或者复制也行）粘贴到`groupdocs`文件夹里。如果你没有接触过网站编辑，你可能不知道这么做的意义是什么，但总之先这么做，这一步很重要。

### 第 4 步：群文档预览版，启动！

接下来使用和[第 2 步](#第-2-步初始化小恐龙)最后那里类似的方法，使用`cd`命令定位到你的群文档页面，然后使用`npm`启动。当然，如果你是装在非 C 盘的位置上，那么你还需要先换盘。比如我的群文档位置位于`E:\Minecraft 资源\群文档\groupdocs`，那么我需要先在 cmd 里输入

```plaintext
E:
```

这样可以先换到 E 盘，然后用类似的方法启动就可以了。

```plaintext
cd E:\Minecraft 资源\群文档\groupdocs
npm start
```

不一会儿，你的浏览器就会自动启动到[`localhost:3000`](http://localhost:3000/)网页了！这个网页会构建现在的群文档文件，有助于你进行本地配置和优化。当然啦，也不必急着关闭 cmd，它的后台会展示一些有用的信息。如果你希望停止这个端口，只需要在 cmd 按下 Ctrl+C （也就是复制键），停止当前进程就好了。

## 在小恐龙上编写需要注意哪些问题？

虽然我们基于小恐龙的编写，自由度比以前高了很多，但是请注意，**小恐龙对一般的 Markdown 兼容性并不好**。这就意味着，有很多东西需要额外注意。

### 图片链接

这是在小恐龙上最容易出错的地方，这个错误也会导致**编译错误**。因为小恐龙的图片提取是默认在`static`文件夹寻找的文件，因此你在写入图片链接的时候请务必注意：**删除`/static`链接**！！例如，图片的链接本来是

```markdown
![这是一张图片！](/static/rules/rules_2023.jpg)
```

那么，请你写成

```markdown
![这是一张图片！](/rules/rules_2023.jpg)
```

也不要用相对链接，也就是`../`的形式。

### 文档间链接

这是在小恐龙上第二容易出错的地方。虽然经过我的一通捣鼓，至少让它不会报错了，然而还是会影响到你的文档的运行。例如，如果你要从这篇文档跳转到另一篇文档，你会这么写：

```markdown
[我要跳转到另一篇文档咯](../../rules/encounter.md)
```

那么，请你**把`.md`的末尾删掉**，因为它可能会导致链接失效，也就是改成这样：

```markdown
[我要跳转到另一篇文档咯](../../rules/encounter)
```

这个对你的编辑影响并不会很大，至少在 VSC 里，它还是能正常跳转。这么做的理由，是因为小恐龙在跳转链接后，是直接按照你所给的链接跳转的，所以带上这个`.md`和不带上它，是两个不同的链接。而小恐龙渲染好 Markdown 后，是不会有`.md`的后缀的，所以你也应该把这个末尾删掉。

### 慎用`<>`和`{}`

是的，你没看错，慎用。这个错误也会导致**编译错误**。因为实质上小恐龙是将这些 Markdown 看作是 MDX 文件来处理的，而这类文件的编译要比普通的 Markdown 严格得多。其中，`<>`会被视作 HTML 标签，而 `{}` 则会被视为 JSX 代码块，一旦出现问题就会报错。如果你确实需要使用这两个符号，尽可能使用下面的方法来转义代替：

- 用 `\{` 代表 `{`，例：\{。
- 用 `\<` 代表 `<`，例：\<。

当然，如果放到代码块里，则不必考虑那么多了。

### 文件名开头为数字的链接

如果文件名的开头为数字，那么链接名会自动把开头的数字移除。因此，如果你要链接到类似于 30 种死法的链接，以前你可能会这么写：

```plaintext
[30 种死法主页](../../resources/completed/30_ways_to_die/homepage)
```

那么，请**把`30_`删掉**，即

```plaintext
[30 种死法主页](../../resources/completed/ways_to_die/homepage)
```

## 小恐龙的独特优势

说了一些注意事项，接下来我们要聊聊迁移的优势了！群文档迁移到 Docusaurus 之后，使用的语法被称为 [MDX](https://mdxjs.com/)，相比于[CommonMark](https://commonmark.org/) 和 [GitHub Flavored Markdown](https://github.github.com/gfm/)，有很多独特的优势。以下是我总结的几条有意思的新特性，希望对你的文章编写有所帮助！当然啦，如果以后还有新的有趣用法，我会在这里继续补充的！

### 文档前言（Front Matter）

:::info

关于文档前言的更多信息，可以查阅 [Docusaurus 官方文档](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter)。

:::

也许你注意到了，现在如果你打开目录中的折叠列表之后，会分块显示其中的条目。例如，你可以试着点开目录中的「维护者专用页面」折叠列表，你会看到一个全新的页面！其中，有一些东西的显示就是依靠**文档前言**实现的。文档前言写在这篇文档的**最开头**。代码如下：

```plaintext
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

**例** 一个标准的文档前言如下：

```mdx
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

**效果**

:::note

这是一个白色的备注块！

:::

**代码**

```plaintext
:::note

这是一个白色的备注块！

:::
```

  </TabItem>
  <TabItem value="tip" label="提示块（绿色）" default>

**效果**

:::tip

这是一个绿色的提示块！

:::

**代码**

```plaintext
:::tip

这是一个绿色的提示块！

:::
```

  </TabItem>
    <TabItem value="info" label="信息块（蓝色）" default>

**效果**

:::info

这是一个蓝色的信息块！

:::

**代码**

```plaintext
:::info

这是一个蓝色的信息块！

:::
```

  </TabItem>
    <TabItem value="warning" label="警告块（黄色）" default>

**效果**

:::warning

这是一个黄色的警告块！

:::

**代码**

```plaintext
:::warning

这是一个黄色的警告块！

:::
```

  </TabItem>
    <TabItem value="danger" label="危险块（红色）" default>

**效果**

:::danger

这是一个红色的危险块！

:::

**代码**

```plaintext
:::danger

这是一个红色的危险块！

:::
```

  </TabItem>
</Tabs>

---

此外，标注块还支持以下两种特殊情况！

<Tabs>
  <TabItem value="title" label="标注块自定义标题" default>

你可以在声明的类型后面，加上一个`[text]`来**自定义标注块的标题**！下面是一个示例：

**效果**

:::warning[这是一个自定义标题！]

这是一个黄色的警告块！

:::

**代码**

```plaintext
:::warning[这是一个自定义标题！]

这是一个黄色的警告块！

:::
```

  </TabItem>
  <TabItem value="nest" label="标注块嵌套">

你可以在标注块里面嵌套一个标注块！下面是一个示例：

**效果**

:::warning[这是外层标注块]

这是外层的内容！

:::info[这是内层标注块]

这是内层的内容！

:::

**代码**

```plaintext
:::warning[这是外层标注块]

这是外层的内容！

:::info[这是内层标注块]

这是内层的内容！

:::
```

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

**效果**

```language
这是一个代码块
```

**代码**

````markdown
```language
这是一个代码块
```
````

  </TabItem>
  <TabItem value="title" label="带标题">

你可以在声明语言类型之后，再声明`title`，这样你的代码块上就会出现标题！

**效果**

```plaintext title="awa"
1
2
3
```

**代码**

````markdown
```plaintext title="awa"
1
2
3
```
````

  </TabItem>
  <TabItem value="highlight" label="代码行高亮">

你可以在声明语言类型之后，再用`{lines}`声明要高亮的行数！

**效果**

```plaintext {2-4,6}
1
2
3
4
5
6
```

**代码**

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
    <TabItem value="showlinenumbers" label="显示代码行数">

你可以在声明语言类型之后，再用`showLineNumbers`显示行号！

**效果**

```plaintext showLineNumbers
1
2
3
```

**代码**

````markdown
```plaintext showLineNumbers
1
2
3
```
````

  </TabItem>
  <TabItem value="example" label="综合示例">

我们现在将前面 4 种功能综合起来进行一个示例吧！比如……30 种死法 2 的一个函数文件，也就是第 10 关的时间线，其中第 9 行就是检测粉床的一条关键命令！

**效果**

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

**代码**

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

### 待办列表

这是一个 Markdown 自带的功能！只不过因为 GitBook 实在过于老旧，所以待办列表在旧版的群文档上表现不佳。但是，迁移之后，我们就可以正常使用这个功能了！

**效果**

- [ ] 这是一个未完成的待办列表。
- [x] 这是一个已完成的待办列表！

**代码**

```markdown
- [ ] 这是一个未完成的待办列表。
- [x] 这是一个已完成的待办列表！
```

### 链接到特定章节

这同样也是一个 Markdown 自带的功能！同样，因为 GitBook 过于老旧而表现不佳。这里就来简单介绍一下如何编写吧！

<Tabs>
  <TabItem value="inpassage" label="文章内链接" default>

**效果**

[点我链接到上面的待办列表](#待办列表)！

**代码**

```markdown
[点我链接到上面的待办列表](#待办列表)！
```

  </TabItem>
  <TabItem value="outofpassage" label="文章外连接">

**效果**

[点我链接到 30 种死法 2 的下载](../../resources/completed/ways_to_die_2/homepage#下载)！

**代码**

```markdown
[点我链接到 30 种死法 2 的下载](../../resources/completed/ways_to_die_2/homepage#下载)！
```

  </TabItem>
</Tabs>

### 选项卡

:::info

关于选项卡的更多信息，可以查阅 [Docusaurus 官方文档](https://docusaurus.io/docs/markdown-features/tabs)。

:::

你在本文前面的内容中，已经见过很多有关选项卡的内容啦，那么接下来我简单介绍一下选项卡的写法吧！

**效果**

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

**代码**

其中高亮代码只需要在全文中声明 1 次即可。各个`value`是不可重复的。

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

### 折叠块

Docusaurus 还支持使用 HTML 的折叠语法！

感谢 @鸽子 写的[这篇文档](../../tools/howto/hide_name)，让我意识到 Docusaurus 居然还支持折叠……

<Tabs>
  <TabItem value="withTitle" label="带标题" default>

**效果**

<details>

<summary>折叠标题</summary>

折叠的内容

</details>

**代码**

```html
<details>

<summary>折叠标题</summary>

折叠的内容

</details>
```

  </TabItem>
  <TabItem value="noTitle" label="不带标题">

如果实在想不出来折叠标题写什么，也可以省略。

**效果**

<details>

折叠的内容

</details>

**代码**

```html
<details>

折叠的内容

</details>
```

  </TabItem>
</Tabs>

## 编写新文章的模板

在创建一篇新文章的时候，你可以从下面的模板复制粘贴，写一篇新文章出来。当然，我们对正文的要求都在[群文档编辑指南](./contributing)，但是其中大多数都是推荐性标准。

```markdown
---
sidebar_position: <在侧边栏的排序>
description: <文章描述>
---

# 标题

:::tip

该文章正在编写中。在该窗口被移除前，请不要对文章内容进行进一步的修改与提交。

:::

正文
```

在编写完文章之后，你可以将开头的那个标注块删除。

## 编写新公告的模板

群文档编辑者在备份群公告时，应注意严格按照以下的要求进行备份。

### 群内群公告模板

为统一管理员发布群公告的样式，请全体管理员在发布有下文列出的类型的群公告时尽可能按照以下的模板发布群公告。

#### 服务器开放模板

<Tabs>
  <TabItem value="info1" label="说明版本" default>

```plaintext
《{地图名}》将于 {mm} 月 {dd} 日 (星期 {X}) {HH}:{MM}~{HH}:{MM} 在测试服开启测试。
地址：rain.cvm.xiaozhiyuqwq.top
端口：{port}
版本：1.{xx.xx}
如你使用的 Minecraft 还未更新至服务器所在的版本，请至 https://docs.nekoawa.com/s/be 更新。
进入服务器需要白名单，群内成员皆可获得；如提示「未获邀」，请在测试开始前联系量筒添加白名单。
```

  </TabItem>
  <TabItem value="copy1" label="可复制版本">

```plaintext
《》将于  月  日 (星期) ~ 在测试服开启测试。
地址：rain.cvm.xiaozhiyuqwq.top
端口：
版本：1.
如你使用的 Minecraft 还未更新至服务器所在的版本，请至 https://docs.nekoawa.com/s/be 更新。
进入服务器需要白名单，群内成员皆可获得；如提示「未获邀」，请在测试开始前联系量筒添加白名单。
```

  </TabItem>
</Tabs>

#### 游戏更新公告模板

<Tabs>
  <TabItem value="info1" label="说明版本" default>

```plaintext
【更新通知】
本群全体服务器计划于 {time} 更新到基岩版正式版 {version}，请及时更新到该版本，否则将无法进入本群服务器！
Android安装包与Windows安装包均已发到群文件（群文件夹：国际版（下载游戏的点我）），渠道（下载渠道：MineBBS | KLPBBS | 其他），群成员可按需自行下载。

---

附录：
1. 更新日志：
中文 Minecraft Wiki：{link}
官网：{link}
2. 下载链接：
Android（破解验证）：{link}
Windows（正版）：{link}
```

  </TabItem>
  <TabItem value="copy1" label="可复制版本">

```plaintext
【更新通知】
本群全体服务器计划于  更新到基岩版正式版 ，请及时更新到该版本，否则将无法进入本群服务器！
Android安装包与Windows安装包均已发到群文件（群文件夹：国际版（下载游戏的点我）），渠道（下载渠道：MineBBS | KLPBBS | 其他），群成员可按需自行下载。

---

附录：
1. 更新日志：
中文 Minecraft Wiki：
官网：
2. 下载链接：
Android（破解验证）：
Windows（正版）：
```

  </TabItem>
</Tabs>

### 将群公告备份到群文档的基础步骤

#### 1. 确认群公告发出时间

编辑者在编辑时需要确认公告所发出的时间，然后在`blog/anno`文件夹中创建对应的年份的文件夹，然后以`[月份：mm][日期：dd][第几份公告：xx].md`标记该群公告在何月何日以及当天发布的顺序。例如，如果该公告发布于 2023 年 1 月 1 日，为当天发布的第二个群公告，则创建以下的文件夹和文件：`blog/anno/2023/010102.md`。

#### 2. 复制下文的模板并填写信息

```plaintext title="blog/anno/[YYYY]/[mm][dd][xx].md"
---
authors: [(authors?)]
title: (m|mm) 月 (d|dd) 日
date: (YYYY)-(mm)-(dd)T(HH):(MM)
---

正文

```

其中，模板中的文档前言（Front Matter）中，`authors`可以填写为以下的作者之一：

- `badou`（巴豆）
- `biyiniao`（比翼鸟）
- `chenfeng`（晨风）
- `dilei`（地雷）
- `gezi`（鸽子）
- `huoweisan`（火卫三）
- `lanos`（lanos）
- `liangtong`（量筒）
- `mengderen`（蒙德人）
- `nanguazhi`（南瓜汁）
- `wenyu`（文雨）
- `xiaoshu`（小鼠）
- `zhiyu`（祉语）

`title`中的月份`m|mm`和日期`d|dd`，请填写为不带 0 的数字，例如「4 月 5 日」而不是「04 月 05 日」。

`date`中的月份`mm`、日期`dd`、小时`HH`、分钟`MM`，请填写为带 0 的数字，例如「2024-04-05T09:09」而不是「2024-4-5T9:9」。年份`YYYY`请填写为 4 位数字。

#### 3. 添加提示窗口

一个公告可能出现以下的特殊情况。出现以下的特殊情况，编辑者应当将下面的提示窗口放置到正文的前面。

<Tabs>
  <TabItem value="confirm" label="确认公告" default>

代表此公告是一个要求多人收到的公告。将确认收到人数`count`按「未确认 + 已确认」统计，以提交到群文档时的人数为准。

**效果**

:::info[确认公告]

此公告要求 (count) 人确认收到。

:::

**代码**

```plaintext
:::info[确认公告]

此公告要求 (count) 人确认收到。

:::
```

  </TabItem>
  <TabItem value="top" label="置顶公告">

代表此公告是一个置顶公告。**注意：置顶公告的优先级为最高**。

**效果**

:::warning[置顶公告]

此公告为置顶公告。

:::

**代码**

```plaintext
:::warning[置顶公告]

此公告为置顶公告。

:::
```

  </TabItem>
    <TabItem value="topanno" label="新成员公告">

代表此公告是一个新成员公告，要求新成员收到。**注意：新成员公告的优先级为次高，放在置顶公告的下面**。

**效果**

:::warning[新成员公告]

此公告发给新成员，并引导群成员修改群昵称。

:::

**代码**

```plaintext
:::warning[新成员公告]

此公告发给新成员，并引导群成员修改群昵称。

:::
```

  </TabItem>
  <TabItem value="delete" label="删除公告">

代表此公告已被删除，或者被更改。`title`填写为被删除的公告的标题，`link`为被删除公告的链接。

**效果**

:::danger[删除公告]

该公告是 x 月 x 日第 x 则的上一版公告，已被删除。

:::

**代码**

```plaintext
:::danger[删除公告]

该公告是 [(title)](link)的上一版公告，已被删除。

:::
```

  </TabItem>
</Tabs>

#### 4. 插入图片

如果公告中插入了图片，请将图片按格式`{yymmddxx}.jpg`命名后放置到文件夹`static/anno/`文件夹中，然后将图片插入到正文的前面、提示窗口的后面。

```plaintext
![(图片名)](/anno/({yymmddxx}).jpg)
```

#### 举例

我们以 @南瓜汁 在 2023 年 8 月 24 日发布的一则群公告为例，展示如何将一则带有图片的群公告备份到群文档。

```plaintext title="blog/anno/2023/082401.md"
---
authors: [nanguazhi]
title: 8 月 24 日群公告
date: 2023-08-24T21:12
---

![公告图片](/anno/23082401.jpg)

「本群名菜」2023 年第二次更新已结束。相关文件已更新并导出，并被同步至「Q群管家-入群欢迎」、「群文件-其他文件」及「Notion 群文档」。

至 2023 年 12 月末，除非有管理员及以上级别的成员变更，不会再次更改此菜单。

```

如果还有任何疑问，请见其他群公告。

## 写在最后

这篇群文档居然已经写了 1000 多行了，感谢你能看到这里！最后，祝你在新的群文档写作愉快~！
