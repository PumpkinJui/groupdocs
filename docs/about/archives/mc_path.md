# 关于文件存储位置

:::info

因[入群必读](../../rules/encounter)的拆分需要，故归档。

最后一次编辑由 @量筒 进行，位于 24.12.15-17:04。

:::

:::warning[注意]

这一部分假定你已经将文件存储位置改为了「外部」。如果您不知道怎么更改文件存储位置，见[这篇文章](mcworld_in_android.md)。

:::

根据 [Minecraft Worlds Lost When Using External Storage on Android Devices I Minecraft Help](https://help.minecraft.net/hc/en-us/articles/4411299967629) 和 [Managing Data and Game Storage in Minecraft | Minecraft Help](https://help.minecraft.net/hc/en-us/articles/4411299967629) 两篇文章：

| 操作系统 | 版本 | 路径 |
| --- | --- | --- |
| Android | 1.17 及以下 | /games/com.mojang/ |
| Android | 1.18 及以上 | /Android/data/com.mojang.minecraftpe/files/games/com.mojang/ |
| Windows | 全版本 | %localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\ |
| iOS | 全版本 | /On My iPhone/Minecraft/games/com.mojang/ |

## 常见问题解答

### 我不会使用 `%localappdata%`

- 你可以使用快捷键 `Win+R`，一般情况下会弹出一个「运行」窗口。把这个路径粘贴进去，然后点击「确定」。
- 你可以把这个路径复制到 Windows 文件资源管理器的地址栏，然后按回车。「Windows 资源管理器」就是你随便打开一个文件夹会弹出来的那个窗口，也可以在桌面双击「此电脑」一类的图标打开。「地址栏」就是那个窗口在靠上位置显示当前路径的长条，点击空白区域粘贴进去回车就行了。
- 你可以手动找到下面的路径：`C:\Users\<YOUR USERNAME>\AppData\Local`。此路径通常与 `%localappdata%` 等效。可能需要打开「显示隐藏项目」等设置项，因此并不推荐这一方法。

### 我不想反复回来找这个路径

- 你可以把这个文件夹固定到「快速访问」菜单，这样就可以在资源管理器左侧的侧边栏里面一键直达了。右键这个文件夹，然后选择这个名字的菜单项就可以了，应该在靠上的位置。你也可以直接把它拖到「快速访问」里面。
- 如果你就是不想用左侧边栏，或者你使用的 Windows 版本尚未支持这一功能，你可以创建一个指向这个文件夹的快捷方式。你可以在这个文件夹上右键→发送到→桌面快捷方式；也可以打开你想要快捷方式存在的位置，然后按住 `Alt`，把这个文件夹拖入快捷方式的文件夹；或者在你想要快捷方式存在的位置右键→新建→快捷方式→填入路径→填入名称→完成。


