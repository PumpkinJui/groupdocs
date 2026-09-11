---
sidebar_position: 3
---

# 如何导入 MC 格式文件

## 什么是 MC 格式文件

MC 格式文件（Minecraft Supported File）是后缀名为 `.mcworld`、`.mctemplate`、`.mcpack`、`.mcaddon` 等的 MC 专用格式文件，用于提供 Minecraft 地图、地图模板、资源包、行为包等，可以直接由 Minecraft 程序执行导入。下文以 MSF 代指此类文件。

MSF 文件，实际上是 ZIP 压缩格式的二进制文件，改了个后缀名。因此，有时也会看到地图、资源包等文件以 `.zip` 的形式出现。

需要注意的是，尽管 MSF 文件与 ZIP 文件的实际内容相同，但 MSF 文件在根目录下直接列出所有文件和目录，不再套一层文件夹。也就是说，打开压缩包后应当能直接看到地图的各种文件，而不是看到一个文件夹，在文件夹内才有地图文件。

## 各平台导入方法

<!-- markdownlint-disable MD024 -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="windows" label="Windows" default>

:::info[温馨提醒]

此处介绍 Windows 11 上的操作方式，右键菜单如果有找不到的东西，请点击「显示更多选项」。Windows 10 的操作大同小异。

:::

### 前期准备工作

显示文件扩展名。在资源管理器上方选项卡中，点击「查看 - 显示」，将「文件扩展名」打勾。

找到你的文件。浏览器下载的文件通常在「下载」目录，双击「此电脑」后在左侧的侧边栏（导航窗格）中找到「下载」，单击进入。QQ 下载的文件，通常可以在 QQ 的下载页面内找到「打开文件所在位置」一类选项。

### MSF

在安装 Minecraft for Windows 后，Windows 会自动设置 MSF 文件的默认打开方式。

如果该 MSF 文件的图标为 Minecraft 程序图标（草方块），则可以直接双击打开。双击后，程序会自动进行导入。

如果是其他图标，可按照以下步骤设置默认打开方式：

1. Win+I 打开 Windows 设置，选择「应用」，选择「默认应用」，在页面下方「设置应用程序的默认值」中点击「Minecraft for Windows」。
2. 为每种文件类型选择「Minecraft for Windows」。

### ZIP

最简单的方式是改后缀名。但在改后缀名前，请先打开压缩包，检查压缩包是否在地图文件外又套了一层文件夹。如果确实多套了一层，请解压后重新压缩，否则会提示「导入失败」。

然后，右键该压缩包，点击「重命名」，将末端的 `.zip` 改为 `.mcx`，具体改为什么视资源种类而定。忽略重命名警告。其余步骤参照上方。

### 手动导入（不推荐）

1. 右键该文件，点击「重命名」，将末端的 `.mcx` 改为 `.zip`。忽略重命名警告。
2. 将压缩包解压至一个单独的文件夹。文件夹可以随便命名，但最好不含中文。
3. 右键该文件夹，选择剪切。
4. 参照下文，在资源管理器地址栏复制粘贴对应地址，打开 Minecraft 存档文件夹。
5. 根据资源种类，将该地图文件夹粘贴至不同的文件夹中。

  </TabItem>
  <TabItem value="android" label="Android">

### 前期准备工作

下载 [MT 管理器](https://mt2.cn)。进入网页后点击「立即下载」，然后选择「本地下载（正式版）」，等待安装包下载完成后安装，忽略各种各样的风险警告。安装完成后，打开 MT 管理器，授予存储权限。下方所有操作，如无说明，均在 MT 管理器环境下完成。

找到你的文件。以下路径以 MT 管理器上方显示的路径为准。复制下方的路径后，点击 MT 管理器上方显示的路径，点击「粘贴」，再点击「确定」，可以快速到达指定路径。

MT 管理器默认起始路径为 `/storage/emulated/0/`。如果你从未听说过这是什么东西，那就是你手机上显示的「内部存储」，也叫 `/sdcard/`，这两个路径完全相同，只是名字不同。

浏览器下载的文件通常位于 `/sdcard/Download/` 中。QQ 接收的文件需要先在 QQ 中选择所需的文件，然后在该文件页面的右上角菜单中选择「保存到手机」。QQ 会在 `/sdcard/Download/QQ/` 创建一个此文件的副本。

修改存储位置。进入 Minecraft，选择设置-存储空间，将文件存储位置改为「外部」。虽然对 MSF 导入并非必需，但仍然建议修改。

### MSF

1. 点击该文件，然后在弹出的窗口中点击左下角的「类型」，选择「全部」。
2. 找到 Minecraft 并点击。如果你以后希望把 Minecraft 作为默认打开方式，请长按它并选择「设为默认打开方式」，然后再次点击。
3. 等待 Minecraft 启动并进行自动导入。

### ZIP

最简单的方式是改后缀名。但在改后缀名前，请先打开压缩包，检查压缩包是否在地图文件外又套了一层文件夹。如果确实多套了一层，请解压后重新压缩，否则会提示「导入失败」。

然后，长按该压缩包，点击「重命名」，将末端的 `.zip` 改为 `.mcx`，具体改为什么视资源种类而定。其余步骤参照上方。

### 手动导入（不推荐）

1. 长按该文件，点击「重命名」，将末端的 `.mcx` 改为 `.zip`。
2. 点击压缩包打开，并检查有没有多套一层文件夹。这将影响后面的第 4 步。检查后，退回到压缩包外面的目录。
3. 在另一窗口打开 `/sdcard/Android/data/com.mojang.minecraftpe/files/games/com.mojang/`，根据资源种类进入不同的文件夹。
4. 长按该压缩包，选择「解压到…」。如果没有多套文件夹，打勾「基于另一窗口路径」，否则不打勾。点击「解压」。

手动导入操作涉及对 `/sdcard/Android/data/` 的访问。自 Android 11 起，Google 限制了对该目录的访问，这很可能导致你无法打开该目录，或无法对该目录写入文件。

如果你*执意*要打开它，请根据 MT 管理器提示操作。可能你需要再下载一个 Shizuku，然后用一堆开发者选项里面的内容授权，最后才能打开，有些手机甚至可能打开了也还是只读的。

所以，能用上面自动导入就别用手动导入了。

  </TabItem>
  <TabItem value="ios" label="iOS">

iOS 默认支持直接打开 MSF 文件。请直接点击已经下载的 MSF 文件导入。

  </TabItem>
</Tabs>

## 存档位置

根据 [Minecraft Wiki](https://zh.minecraft.wiki/w/Com.mojang)：

| 操作系统 | 路径 | 备注 |
| --- | --- | --- |
| Android | /data/data/com.mojang.minecraftpe/games/com.mojang | 需要 root 权限访问 |
| Android | /sdcard/Android/data/com.mojang.minecraftpe/files/games/com.mojang | Android 11 以上需要特殊权限访问 |
| Windows | 独立内容：%APPDATA%\Minecraft Bedrock\Users\<用户ID>\games\com.mojang<br/>共享内容：%APPDATA%\Minecraft Bedrock\Users\Shared\games\com.mojang | 正式版 |
| Windows | 独立内容：%APPDATA%\Minecraft Bedrock Preview\Users\<用户ID>\games\com.mojang<br/>共享内容：%APPDATA%\Minecraft Bedrock Preview\Users\Shared\games\com.mojang | 预览版 |
| iOS | /On My iPhone/Minecraft/games/com.mojang/ | |

## 技巧

Windows 可以把存档位置固定到「快速访问」菜单，这样就可以在资源管理器左侧的侧边栏（导航窗格）里面一键直达了。右键存档位置文件夹，直接把它拖到「快速访问」里面就可以了。或者也可以创建一个指向存档位置的快捷方式，选中存档位置文件夹，右键→发送到→桌面快捷方式即可。

Android 可以在 MT 管理器加书签，长按文件夹后选择「添加书签」即可。上滑底部菜单就能看到书签面板了。
