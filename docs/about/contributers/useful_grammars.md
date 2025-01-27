---
sidebar_position: 2
description: 群文档迁移后，一起来看看可以用的新语法！
last_update:
  date: 1/23/2025
  author: 一只卑微的量筒
---

# 一些有用的语法

群文档迁移到 Docusaurus 之后，你就可以在群文档内应用更多的语法，而不只是局限于 Markdown （尤其 GitBook 还是残血版的 Markdown）了！在这里我总结了一些比较有意思的新语法，希望对你的编辑有所帮助！

## 文档前言（Front Matter）

:::info

关于文档前言的更多信息，可以查阅 Docusaurus 的[官方网站](https://docusaurus.io/zh-CN/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter)了解更多的接口信息。

:::

也许你注意到了，现在如果你打开目录中的折叠列表之后，会分块显示其中的条目。例如，你可以试着点开目录中的「维护者专用页面」折叠列表，你会看到一个全新的页面！

其中，有一些东西的显示就是依靠**文档前言**实现的。文档前言写在这篇文档的**最开头**，格式如下：

```
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

## 提示块（Admonitions）

:::info

关于提示块的更多信息，可以查阅 Docusaurus 的[官方网站](https://docusaurus.io/zh-CN/docs/markdown-features/admonitions)了解更多的接口信息。

:::

好耶！终于不需要用`>`来写一个虚拟的提示块了！你可以利用下面的方法写一个正儿八经的提示块了！

```
:::note

这是一个白色的备注块！

:::
```

它的效果是：

:::note

这是一个白色的备注块！

:::

---

```
:::tip

这是一个绿色的提示块！

:::
```

它的效果是：

:::tip

这是一个绿色的提示块！

:::

---

```
:::info

这是一个蓝色的信息块！

:::

```

它的效果是：

:::info

这是一个蓝色的信息块！

:::

---

```
:::warning

这是一个黄色的警告块！

:::
```

它的效果是：

:::warning

这是一个黄色的警告块！

:::

---

```
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

关于选项卡的更多信息，可以查阅 Docusaurus 的[官方网站](https://docusaurus.io/zh-CN/docs/markdown-features/tabs)了解更多的接口信息。

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

``` mdx
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

## 代码块高亮与标题

以前的群文档中，代码块通常用下面的方式来解决：

````
```
这是一个代码块
```
````

如果声明这个代码块的语言为 `text` ，你可以用下面的方式实现特定行的代码高亮：

````
```text
1
//highlight-start
2
//highlight-end
3
```
````

效果是：

```text
1
//highlight-start
2
//highlight-end
3
```

如果在声明了类型的基础上还声明了`title`，你还可以标记出它的标题：

````
```text title="awa"
1
2
3
```
````

效果是：

```text title="awa"
1
2
3
```

