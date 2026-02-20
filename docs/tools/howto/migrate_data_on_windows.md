---
sidebar_position: 5
authors: [量筒]
---

# 如何在 1.21.120 更新后迁移 Minecraft for Windows 的数据

:::warning

本次更新仅影响 Windows 平台，本教程亦只适用于 Windows 平台。

:::

自从 Windows 上更新 1.21.120 之后，有不少玩家都反映自己的地图数据、资源包行为包等丢失。很显然，这是这次更新的某个内容导致的，而且微软在这方面的适配力度也远远不够，造成了这次*迁移悲剧*。然而，你的资源理论上并不是完全“没救”了的，按照下面的方法，或多或少可以找回部分已经“丢失”的文件。

## 究竟发生了什么？

根据[中文 Minecraft Wiki](https://zh.minecraft.wiki/w/%E5%9F%BA%E5%B2%A9%E7%89%881.21.120) 的记载，这次文件迁移是由下面这条更新引起的：

> **Windows 上的 GDK 更新**
>
> - Minecraft 现在在最新的 Microsoft 游戏开发工具包（Game Development Kit，GDK）上运行，而不再是通用 Windows 平台（Universal Windows Platform，UWP）。
>   - 此项更新会使游戏与 Windows 平台上的标准分发模型保持一致。
> - 更新了文件路径，现在首次安装并加载新版本的 Minecraft 时，现有的 Minecraft 世界会转移到：`%APPDATA%\Minecraft Bedrock`。

从本意上来看，UWP 平台在 2021 年便已经停止维护，微软自然不愿意在已经过时的平台上开发，于是使用支持更好的 GDK 平台开发，这无可厚非。然而，微软在这次更新中操之过急，只在 1.21.120 的一个测试版下进行了测试，在数据不足的情况下就强推正式版。很显然，这种极其激进的做法引发了很多问题。

1. 这次更新进行了文件路径迁移，但是**在迁移过程中关闭游戏、或者单纯的迁移失败会直接删除存档**！甚至可以认为，这是基岩版有史以来最灾难的更新（甚至很可能没有之一）。
    - 迁移表现为：如果迁移成功，你的地图会被成功迁移，但是行为包和资源包仍然留在原路径。  
      > 问题来了，它自动把这些所有的地图全都给你迁移走了，但是这个资源包和行为包还留在原地的啊，这就非常傻逼，真是奇了怪了。 —— by [橘猫sama（B 站视频）](https://www.bilibili.com/video/BV1AG1LB8E1f)
    - 如果迁移不成功，你的地图就都被微软吃了，什么都没有了。行为包和资源包应该也是留在原路径的，但是案例较少，需要验证。
2. 根据我们的[这篇服务器更新暂缓通告](/blog/anno/anno/2025/102902)，这次更新并没有适配好中文输入法，导致在游戏内无法输入中文，正因如此，我们决定暂缓了服务器的更新，并在 1.21.121 更新后恢复了服务器更新。
3. 此外，这次的更新还很容易在窗口最大化的情况下，在操作过程中让鼠标飞出窗口，严重影响操作体验。这个问题在 1.21.122 得到了解决。
4. 以及，**现在的基岩版会采取自动更新策略**，无论微软商店是否阻止应用更新，都无济于事，你的 Minecraft 还是会在后台检查到有更新的时候进行自动更新。在启动游戏后，也会检查是否有更新，这就意味着从 1.21.120 开始，想再降级游戏是非常困难的事情了。
5. 游戏优化也是极其糟糕的，可能会变得非常卡顿，爆内存。根据上文橘猫的视频，这可能是因为开启了“改进的输入响应”和开启了全屏所导致的。在评论区中，基岩版占用的内存甚至可以达到 10G 之多！

可以说，如此不稳定的更新，就算是测试版都应该立刻着手出紧急修复，微软和 Mojang 却选择直接更新到正式版，实在让人瞠目结舌。然而，虽然本次微软的“罪行”罄竹难书，本文还是以解决第一个问题为先。

## 从旧的路径迁移到新的路径

### 新旧路径都在哪里？

- 旧路径：`%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang`。在旧路径下，`com.mojang`储存你所有的游戏数据。如果你还没有更新，请一定！务必！全部！**备份**！！
- 新路径：`%appdata%\Minecraft Bedrock\Users`
  - 这次的新路径和 Minecraft Legend、Minecraft 中国版放到了一起，都在`%appdata%`下
  - 在你更新之后，游戏会尝试迁移你的地图。在迁移完毕进入游戏后退出（**一定要迁移完再退！！不然你的地图就要被微软扬了！！**），你会看到两个文件夹：
    - **个人资源文件夹**：`...\(你的用户 ID)\games\com.mojang`，这个文件夹用来存储你的个人信息，比如你在市场买的地图、资源包等，就只供你个人微软账户上使用。地图就存储在个人资源文件夹里。
    - **共享资源文件夹**：`...\Shared\games\com.mojang`，这个文件夹用来存储行为包、资源包等共享文件。

所以，不要忘记收藏新路径`%appdata%\Minecraft Bedrock\Users`。预览版也在类似的文件路径下。

### 我该做什么？

1. **如果还没更新，第一件事就是马上去旧路径下备份**！
2. 在更新之后，静等游戏迁移完毕你的地图。**不要退出！不要退出！不要退出！！！退出就完蛋了！！！**
3. 迁移完成之后，退出游戏，然后把

    ```text
    %localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\resource_packs
    ```

    里的所有内容（这些是你的资源包）放到

    ```text
    %appdata%\Minecraft Bedrock\Users\Shared\games\com.mojang\resource_packs
    ```

    里。
4. 同样地，把

    ```text
    %localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\behavior_packs
    ```

    里的所有内容（这些是你的行为包）放到

    ```text
    %appdata%\Minecraft Bedrock\Users\Shared\games\com.mojang\behavior_packs
    ```

    里。
5. 如果你不是开发者，到这里应该就结束了，进入游戏重新启用你曾启用的包即可。如果你是开发者，则还需要把

    ```text
    %appdata%\Minecraft Bedrock\Users\(你的用户 ID)\games\com.mojang\development_behavior_packs
    ```

    里的所有内容放到

    ```text
    %appdata%\Minecraft Bedrock\Users\Shared\games\com.mojang\development_behavior_packs
    ```

    里。因为幽默微软迁移错路径了，本该迁移到共享资源文件夹的开发包却迁移到了个人资源文件夹里。*~微软，你脑子里装的是浆糊吗？错误连篇啊，就这还敢发正式版，谁给你的勇气？~* 同样地，把迁移错了的开发资源包也换到正确的位置，从

    ```text
    %appdata%\Minecraft Bedrock\Users\(你的用户 ID)\games\com.mojang\development_resource_packs
    ```

    换到下面的路径即可。

    ```text
    %appdata%\Minecraft Bedrock\Users\Shared\games\com.mojang\development_resource_packs
    ```

### 如果我有地图备份，迁移失败后想重新恢复地图该怎么做？

你真应该为自己庆幸！至少你的地图还没有“全军覆没”。将你的地图文件放到

```text
%appdata%\Minecraft Bedrock\Users\(你的用户 ID)\games\com.mojang\minecraftWorlds
```

里即可。

---

希望这篇文章可以或多或少地解决你当前所面临的问题！你也可以看看[@橘猫sama 的这期 B 站视频](https://www.bilibili.com/video/BV1AG1LB8E1f)，帮助你迁移当前的资源。
