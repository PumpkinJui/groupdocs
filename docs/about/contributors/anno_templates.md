---
sidebar_position: 4
description: 群公告用的一些模板。
---

# 群公告模板

群文档编辑者在备份群公告时，应注意严格按照以下的要求进行备份。

## 群内群公告模板

为统一管理员发布群公告的样式，请全体管理员在发布有下文列出的类型的群公告时尽可能按照以下的模板发布群公告。

### 服务器开放模板

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="info1" label="说明版本" default>

```plaintext
《{地图名}》将于 {mm} 月 {dd} 日 (星期 {X}) {HH}:{MM}~{HH}:{MM} 在测试服开启测试。
地址：rain.cvm.xiaozhiyuqwq.top
端口：{port}
版本：1.{xx.xx}
如你使用的 Minecraft 还未更新至服务器所在的版本，请至 https://docs.nekoawa.com/docs/tools/urls/mcbe 更新。
进入服务器需要白名单，群内成员皆可获得；如提示「未获邀」，请在测试开始前联系量筒添加白名单。
```

  </TabItem>
  <TabItem value="copy1" label="可复制版本">

```plaintext
《》将于  月  日 (星期) ~ 在测试服开启测试。
地址：rain.cvm.xiaozhiyuqwq.top
端口：
版本：1.
如你使用的 Minecraft 还未更新至服务器所在的版本，请至 https://docs.nekoawa.com/docs/tools/urls/mcbe 更新。
进入服务器需要白名单，群内成员皆可获得；如提示「未获邀」，请在测试开始前联系量筒添加白名单。
```

  </TabItem>
</Tabs>

### 游戏更新公告模板

<Tabs>
  <TabItem value="info1" label="说明版本" default>

```plaintext
【更新通知】
本群全体服务器计划于 {time} 更新到基岩版正式版 {version}，请及时更新到该版本，否则将无法进入本群服务器！
Android 安装包与 Windows 安装包均已发到群文件（群文件夹：国际版（下载游戏的点我）），渠道（下载渠道：MineBBS | KLPBBS | 其他），群成员可按需自行下载。

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
Android 安装包与 Windows 安装包均已发到群文件（群文件夹：国际版（下载游戏的点我）），渠道（下载渠道：MineBBS | KLPBBS | 其他），群成员可按需自行下载。

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

## 将群公告备份到群文档的基础步骤

### 1. 确认群公告发出时间

编辑者在编辑时需要确认公告所发出的时间，在 `blog/anno` 目录中创建对应年份的子目录，然后以 `[月份：mm][日期：dd][第几份公告：xx].md` 标记该群公告在何月何日发布以及当天发布的顺序。

例如，如果该公告发布于 2023 年 1 月 1 日，为当天发布的第二个群公告，则创建文件：`blog/anno/2023/010102.md`。

### 2. 复制下文的模板并填写信息

```markdown title="blog/anno/[YYYY]/[mm][dd][xx].md"
---
authors: [(authors?)]
title: (m|mm) 月 (d|dd) 日
date: (YYYY)-(mm)-(dd)T(HH):(MM)
---

正文

```

其中，模板中的文档前言（Front Matter）中，`authors` 可以填写为以下的作者之一：

- `巴豆`
- `比翼鸟`
- `晨风`
- `地雷`
- `鸽子`
- `火卫三`
- `lanos`
- `量筒`
- `蒙德人`
- `南瓜汁`
- `文雨`
- `小鼠`
- `祉语`

如果有多个作者，请使用**英文逗号**分隔。

`title` 中的月份 `m|mm` 和日期 `d|dd`，请填写为不带 0 的数字，例如「4 月 5 日」而不是「04 月 05 日」。

`date` 中的月份 `mm`、日期 `dd`、小时 `HH`、分钟 `MM`，请填写为带 0 的数字，例如 `2024-04-05T09:09` 而不是 `2024-4-5T9:9`。年份 `YYYY` 请填写为 4 位数字。

### 3. 添加提示窗口

一个公告可能会作出一些特殊设定。当出现时，编辑者应当将下面的提示窗口放置在正文的前面。

<Tabs>
  <TabItem value="topanno" label="新成员公告">

代表此公告是一个新成员公告，要求新成员收到。**注意：新成员公告的优先级为最高**。

  <Tabs>
  <TabItem value="effect" label="效果" default>

:::warning[新成员公告]

此公告发给新成员，并引导群成员修改群昵称。

:::

  </TabItem>
  <TabItem value="code" label="代码">

```markdown
:::warning[新成员公告]

此公告发给新成员，并引导群成员修改群昵称。

:::
```

  </TabItem>
  </Tabs>
  </TabItem>

  <TabItem value="top" label="置顶公告">

代表此公告是一个置顶公告。**注意：置顶公告的优先级为次高**。

  <Tabs>
  <TabItem value="effect" label="效果" default>

:::warning[置顶公告]

此公告为置顶公告。

:::

  </TabItem>
  <TabItem value="code" label="代码">

```markdown
:::warning[置顶公告]

此公告为置顶公告。

:::
```

  </TabItem>
  </Tabs>
  </TabItem>

  <TabItem value="confirm" label="确认公告" default>

代表此公告是一个要求多人收到的公告。将确认收到人数 `count` 按「未确认 + 已确认」统计，以提交到群文档时的人数为准。**注意：确认公告的优先级为第三高。**

  <Tabs>
  <TabItem value="effect" label="效果" default>

:::info[确认公告]

此公告要求 (count) 人确认收到。

:::

  </TabItem>
  <TabItem value="code" label="代码">

```markdown
:::info[确认公告]

此公告要求 (count) 人确认收到。

:::
```

  </TabItem>
  </Tabs>
  </TabItem>

  <TabItem value="delete" label="删除公告">

代表此公告已被删除，或者被更改。`title` 填写为被删除的公告的标题，`link` 为被删除公告的链接。

  <Tabs>
  <TabItem value="effect" label="效果" default>

:::danger[删除公告]

该公告是 x 月 x 日第 x 则的上一版公告，已被删除。

:::

  </TabItem>
  <TabItem value="code" label="代码">

```markdown
:::danger[删除公告]

该公告是 [(title)](link)的上一版公告，已被删除。

:::
```

  </TabItem>
  </Tabs>
  </TabItem>
</Tabs>

#### 4. 插入图片

如果公告中插入了图片，请将图片按格式 `{yymmddxx}.jpg` 命名后放到 `static/anno/` 文件夹中，然后将图片插入到正文的前面、提示窗口的后面。

```markdown
![(图片名)](/anno/({yymmddxx}).jpg)
```

#### 举例

我们以 @南瓜汁 在 2023 年 8 月 24 日发布的一则群公告为例，展示如何将一则带有图片的群公告备份到群文档。

```markdown title="blog/anno/2023/082401.md"
---
authors: [南瓜汁]
title: 8 月 24 日群公告
date: 2023-08-24T21:12
---

![公告图片](/anno/23082401.jpg)

「本群名菜」2023 年第二次更新已结束。相关文件已更新并导出，并被同步至「Q群管家-入群欢迎」、「群文件-其他文件」及「Notion 群文档」。

至 2023 年 12 月末，除非有管理员及以上级别的成员变更，不会再次更改此菜单。

```

如果还有任何疑问，请见其他群公告。
