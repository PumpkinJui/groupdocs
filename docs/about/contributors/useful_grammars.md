---
sidebar_position: 2
description: 群文档迁移后，一起来看看可以用的新语法！
last_update:
  date: 1/23/2025
  author: 一只卑微的量筒
---

# 一些有用的语法

群文档迁移到 Docusaurus 之后，使用的语法被称为 [MDX](https://mdxjs.com/)，提供了一些 [CommonMark](https://commonmark.org/) 和 [GitHub Flavored Markdown](https://github.github.com/gfm/) 没有的功能。在这里我总结了一些比较有意思的新语法，希望对你的编辑有所帮助！

## 文档前言（Front Matter）

:::info

关于文档前言的更多信息，可以查阅 [Docusaurus 官方文档](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter)。

:::

也许你注意到了，现在如果你打开目录中的折叠列表之后，会分块显示其中的条目。例如，你可以试着点开目录中的「维护者专用页面」折叠列表，你会看到一个全新的页面！

其中，有一些东西的显示就是依靠**文档前言**实现的。文档前言写在这篇文档的**最开头**，格式如下：

```plaintext
---
键: 值
---
```

下面我会列出几个比较有用的参数（主要是群文档中已经用到的），之后再补充。

| 键 | 值 | 意义 |
| --- | --- | --- |
| `description` | 任意文本 | 显示在列表页中的文章描述。 |
| `last_update` | `FrontMatterLastUpdate` | 记录上次更新的日期和作者 |
| `sidebar_position` | 整数 | 在侧边栏中排到第几位 |

## 标注块（Admonition，暂定译名）

:::info

关于标注块的更多信息，可以查阅 [Docusaurus 官方文档](https://docusaurus.io/docs/markdown-features/admonitions)。

:::

好耶，终于不需要用`>`来写一个虚拟的标注块了！你可以利用下面的方法写一个正儿八经的标注块！

```plaintext
:::note

这是一个白色的备注块！

:::
```

它的效果是：

:::note

这是一个白色的备注块！

:::

---

```plaintext
:::tip

这是一个绿色的提示块！

:::
```

它的效果是：

:::tip

这是一个绿色的提示块！

:::

---

```plaintext
:::info

这是一个蓝色的信息块！

:::

```

它的效果是：

:::info

这是一个蓝色的信息块！

:::

---

```plaintext
:::warning

这是一个黄色的警告块！

:::
```

它的效果是：

:::warning

这是一个黄色的警告块！

:::

---

```plaintext
:::danger

这是一个红色的危险块！

:::
```

它的效果是：

:::danger

这是一个红色的危险块！

:::

此外你还可以嵌套使用，想怎么用主要取决于你！

## 选项卡（Tabs）

:::info

关于选项卡的更多信息，可以查阅 [Docusaurus 官方文档](https://docusaurus.io/docs/markdown-features/tabs)。

:::

以下是实例示范：

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>

下面是实现上述功能所需的代码。

```html
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>
```

## 代码块：标题、高亮与行号

:::info

关于代码块的更多信息，可以查阅 [Docusaurus 官方文档](https://docusaurus.io/docs/markdown-features/code-blocks)。

:::

以前的群文档中，代码块通常用下面的方式来解决：

````markdown
```language
这是一个代码块
```
````

现在，你可以在声明了语言的基础上再声明 `title`：

````markdown
```plaintext title="awa"
1
2
3
```
````

效果是：

```plaintext title="awa"
1
2
3
```

你还可以声明代码行高亮：

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

效果是：

```plaintext {2-4,6}
1
2
3
4
5
6
```

不仅如此，你还可以通过 `showLineNumbers` 显示行号：

````markdown
```plaintext showLineNumbers
1
2
3
```
````

效果是：

```plaintext showLineNumbers
1
2
3
```

把所有这些加到一起，让我们来重新写一下上面的选项卡代码块：

````markdown
```html title="选项卡" {6,9,12} showLineNumbers
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>
```
````

效果是：

```html title="选项卡" {6,9,12} showLineNumbers
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>
```

现在的选项卡还自动支持代码复制和软换行；只需要电脑端把鼠标挪到代码块上，或手机端点一下代码块，按钮就会显示出来！

## 折叠块

Docusaurus 支持使用 HTML 的折叠语法！感谢 @鸽子 写的[这篇文档](../../tools/howto/hide_name)，让我意识到 Docusaurus 居然还支持折叠……

基本语法：

```html
<details>

<summary>折叠标题</summary>

折叠的内容

</details>
```

效果是：

<details>

<summary>折叠标题</summary>

折叠的内容

</details>

如果实在想不出来折叠标题写什么，也可以省略。例如：

```html
<details>

折叠的内容

</details>
```

效果是：

<details>

折叠的内容

</details>
