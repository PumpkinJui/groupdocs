---
sidebar_position: 4
---

# 如何压缩和解压缩

:::tip

该文章正在编写中。在该窗口被移除前，请不要对文章内容进行进一步的修改与提交。

:::

:::tip

该文章的内容需要改进。

理由：需针对受众实际情况细化、简化表述，全面考虑所有需要进行的操作、可能遇到的问题等。

:::

---

## 引言

在当今时代，压缩与解压缩已经变成了区分「赛博文盲」的标准之一。

> 赛博文盲六艺：
>
> - 正版 Steam
> - 论坛找资源
> - 网盘下文件
> - 解压压缩包
> - 拷贝原文件
> - 卸载三六零
>
> ——某公众号

当然因为 Minecraft 没上架 Steam，我们就不去做怎么下正版 Steam 了；其余同理。下文我们主要讲讲在 Android 和 Windows 平台怎么压缩和解压缩。

<!-- markdownlint-disable MD024 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="windows" label="Windows" default>

在 Windows 平台，本文使用的第三方软件是 **7-zip**。

在正式开始之前，我想先回应几个没那么赛博文盲，或者自以为没那么赛博文盲的问题。

### 为什么要装新软件

别指望你电脑弱小又可怜的自带软件了，这并不一定是句玩笑话。Windows 自带的压缩和解压缩软件是 **Windows 资源管理器**。

如果你没听说过这个名字的话，它就是「桌面」和「此电脑」背后的程序。在 Windows 11 之前，它只能处理 ZIP 格式的压缩包，对 7Z 等格式则束手无策。Windows 11 的资源管理器能够处理更多格式，但有时也不那么好用。例如，Windows 11 24H2 版本的资源管理器：

- 只支持将文件压缩成 ZIP、7Z 和 TAR 格式，不支持 RAR 等格式。
- 不能对压缩文件进行加密或分卷 (将一个巨大的压缩文件拆分为若干小文件方便传输)，也不能解压加密或分卷的压缩包。

不过，既然能用自带，也许不一定非要再装一个，尤其这在临时使用的电脑上属实不合适；所以我两种都教一下。

以下内容以 Windows 11 24H2 版本为主，如果你发现有一些无法通过「使用 Windows 资源管理器」完成的步骤，那就只能选择使用第三方软件了。

### 为什么不能用 XXX 软件

可以，只要你会用你满意就行。世界上有很多非常好的压缩软件，但我只教最简单最有效且完全免费的方法。

### 付费的压缩和解压缩效果是否会更好

压缩和解压缩本身不需要付费，即使付费可能也几乎不会在事实上带来任何体验提升，因此所有强制付费的压缩软件都应当受到谴责。

如果是自愿付费，就要看软件卖点在哪里，值不值，一般是不值。例如，如果是为了去广告付费，通常就不怎么值；如果是为了附加功能付费，比如压缩包修复、病毒扫描一类，那就要看这些功能对你有多大吸引力和不可替代性了。

因此，一般不推荐为压缩和解压缩付费。

### 能不能先云解压再下载

也能用，不过我听说这玩意也要云盘有会员才能用？那要是你没会员，还不如就弄本地的。

## 准备工作

### 使用 Windows 资源管理器

原则上不需要准备，毕竟这资源管理器 Windows 本身就自带了。

### 使用第三方压缩软件

1. 使用任何浏览器，包括但不限于 Edge、Firefox、Chrome、360 浏览器、2345 浏览器等，打开[英文版官网](https://7-zip.org/)或[中文版官网](https://sparanoid.com/lab/7z/)，下载 7-zip 安装包。通常情况下，你需要的是最上面那个安装包 (x64)，如果运行不了再换第二个安装包 (x86)。
2. 下载完成后，单击下载窗口中该安装包旁边的「打开文件」。
3. 选择「Install」或「安装」，等待程序运行完成。
4. 单击「Close」或「关闭」。

## 压缩

### 使用 Windows 资源管理器

1. 选中所有你想要压缩的文件或文件夹后，右键单击它们。
2. 你将在弹出的菜单中看到一个名为「压缩到…」的选项，将鼠标光标移动到该选项上方并悬停，然后就可以选择你要压缩成什么格式了。

### 使用第三方压缩软件

## 解压缩

### 使用 Windows 资源管理器

#### 全部解压缩

1. 左键单击你要解压的压缩包，右键再次单击该压缩包，在弹出的菜单中选择「全部解压缩…」。
2. 在弹出的新窗口中点击「浏览」，然后选择压缩包中文件的解压位置。
3. 点击「提取」，等待系统进行解压操作。
4. 解压完成后，指定的解压位置将会作为一个新窗口自动弹出。

#### 部分解压缩

### 使用第三方压缩软件

#### 全部解压缩

#### 部分解压缩

## ~~*高阶喂饭方法*~~制作自解压文件

自解压文件，就是一种~~*高阶的喂饭方法*~~可以自动解压文件中内容的可执行文件。可执行文件，举个例子，就是 Windows 上的 EXE 文件。某种程度上，安装包就是一种自解压文件。

- 优点：再也不需要操心接收者会不会解压了；
- 缺点：发送者操作有些麻烦，且平台间不能通用，做的是哪个平台的自解压文件，就只能在哪个平台用。(如果有人不知道的话，Android 是不能直接运行 EXE 文件的。)

使用 7-zip 可以制作自解压文件。

  </TabItem>
  <TabItem value="android" label="Android">

在 Android 平台，本文使用的第三方应用是 **MT 管理器**。

在正式开始之前，我想先回应几个没那么赛博文盲，或者自以为没那么赛博文盲的问题。

### 为什么要装新应用

别指望你手机弱小又可怜的自带应用了，这并不一定是句玩笑话。Android 自带的压缩和解压缩应用是**文件管理**，不同定制系统的不同版本都有所不同。

在相当一部分用户的手机上，鉴于相册的存在以及各应用自带非常齐全的打开功能 (比如 QQ 浏览器)，它可能从来没被打开过 (用户协议都没点过同意的那种)。在相当一部分系统上，它也难用到让人不想打开。

因此，鉴于以上原因 (各厂商定制不同、难用等)，我也就不做自带应用的教程了，多装一个应用不会让您痛彻心扉的；对于只有 100 MB 可用空间的手机，我相信只要您愿意，这一个应用的空间是一定能腾出来的，更何况它也不大。实在不想装的，我还给您留了一个用文件管理或 QQ 浏览器解压缩教程的视频链接。

### 为什么不能用 XXX 应用

可以，只要你会用你满意就行。世界上有很多非常好的压缩应用，但我只教最简单最有效且完全免费的方法。

### 付费的压缩和解压缩效果是否会更好

压缩和解压缩本身不需要付费，即使付费可能也几乎不会在事实上带来任何体验提升，因此所有强制付费的压缩应用都应当受到谴责。

如果是自愿付费，就要看应用卖点在哪里，值不值，一般是不值。例如，如果是为了去广告付费，通常就不怎么值；如果是为了附加功能付费，比如压缩包修复、病毒扫描一类，那就要看这些功能对你有多大吸引力和不可替代性了。

因此，一般不推荐为压缩和解压缩付费。

### 能不能先云解压再下载

也能用，不过我听说这玩意也要云盘有会员才能用？那要是你没会员，还不如就弄本地的。

## 准备工作

首先，下载 [MT 管理器](https://mt2.cn)。请使用浏览器打开这一网址，包括但不限于手机自带浏览器、Edge、Via、QQ 浏览器等。

进入网页后，点击「立即下载」，然后选择「本地下载（正式版）」，等待安装包下载完成，然后选择「打开」或「安装」。

安装过程中，请忽略各种各样的风险警告，可能还需要关闭「纯净模式」、使用密码或指纹验证身份等，具体取决于各厂商的设计。

安装完成后，打开 MT 管理器，授予存储权限。

**下方所有操作，如无说明，均在 MT 管理器环境下完成。**

## 压缩

<!--可以抄之前 import_mcx 一部分-->

## 解压缩

[电子扫盲课 — 网盘下载压缩文件及解压缩教学 (UP 主：庄不纯)](https://www.bilibili.com/video/BV11w4m1y7kA)

  </TabItem>
</Tabs>
