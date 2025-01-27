# 如何配置 GitBook-cli 环境

:::warning[提示]

群文档现已迁移到 Docusaurus ，因此，该教程所显示的信息已经过时。

:::

## 为什么要有这篇教程

GitBook-cli 是 CloudFlare Pages 构建时使用的框架。

在最早，群文档的建设需要在推送更改后等待 CF Pages 更新，然后查看是否有 bug，将 bug 修复后再次提交并推送。这样很不方便，而且一次提交能解决的事情，为什么要两次提交解决呢？

后来，群文档将它使用的 [Markdown](../../about/contributers/markdown) 作为归档类文件添加，以期有所改善。但查看文档 (甚至是全英的文档)，怎么能比得上自己用相同的框架打包一次来得快、准确和可靠呢？

因此，作为 [Issue #21](https://github.com/PumpkinJui/groupdocs/issues/21) 的解决方案，我们将在本文中指导您如何安装 GitBook-cli，并利用它进行测试。

在下文中，我们就分别在 Termux 平台和 Windows 平台指导您安装它。

## 安装 GitBook-cli 环境

### 前期准备工作

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="termux" label="Termux" default>
   #### [Termux](https://termux.dev/cn/) 介绍

   > Termux 是一个适用于 Android 的终端模拟器，其环境类似于 Linux 环境。

   在 Termux 中运行每一行命令后，运行完成的标志是绿色的运行路径重新出现，后面带有 `$` 和白色的光标。运行路径以 `~` 开头。

   首先，**设置 Termux 镜像**。  
   输入 `termux-change-repo` 后，按回车两次，按向下箭头两次，按空格，按回车。  
   或者说，选择 `Mirror group` 后选择 `Mirrors in Chinese Mainland`。  
   设置后，Termux 会自动进行镜像速度测试，并选择速度最快的镜像，检查所有包的更新，并提示是否存在可更新的包。

   然后，**安装 Node.js**。  
   运行 `pkg install nodejs`；如有确认，按 `y` 或 `Y` 后回车。  
   Termux 会自动下载 (get) 包、解压 (unpack) 包并安装 (set up) 包。

  </TabItem>
  <TabItem value="windows" label="Windows">
   你需要安装 Node.js。  
在 [Node.js 官网](https://nodejs.org/zh-cn/download/prebuilt-installer) 选择使用的系统和架构后点击下载，网站会自动下载安装包。

   下载完成后安装，基本上一路 Next 就行了。

   按 Win+R，输入 cmd，回车。

   :::info[注意]

   Windows 的命令行有 cmd 和 PowerShell 两种，语法不尽相同。本文中默认为 cmd。  
   在命令行环境中，选中文本按右键是复制功能，不选中文本按右键是粘贴功能。  
   在 cmd 中运行每一行命令后，运行完成的标志是运行路径重新出现，后面带有白色的光标。

   :::
  </TabItem>
</Tabs>

### 安装 GitBook-cli

**从现在起，忽略任何 `deprecated` 警告，不管是哪里报的。那是 GitBook-cli 长期无人维护的锅。**

首先，**设置 npm 镜像**。  
运行 `npm config set registry https://registry.npmmirror.com`。  
此命令不会返回结果。

然后，**安装 GitBook-cli**。  
运行 `npm install -g gitbook-cli`。  

:::warning[注意]

**其中 `-g` 不可省略，否则后面会报错：**
- Termux：**`No command gitbook found` 或 `gitbook: command not found`**
- Windows：**`'gitbook' 不是内部或外部命令，也不是可运行的程序或批处理文件`** 

:::

将返回 `added {x} packages in {y}s`，其中 `{x}` 和 `{y}` 为数字。

### 安装 GitBook (Part I)

没想到吧。

> The purpose of the gitbook command is to load and run the version of GitBook you have specified in your book (or the latest one), irrespective of its version.  
  参考翻译：gitbook 命令的目的是加载并运行您在书中指定的 GitBook 版本（或最新版本），无论其版本如何。

运行 `gitbook help`，会提示 `Installing GitBook x.y.z` (`x.y.z` 为版本号，应为 `3.2.3`)，然后等着。它过一会就该报错了。

### 处理报错

报错信息应为：

<Tabs>
   <TabItem value="termux1" label="Termux" default>
   ```
   /data/data/com.termux/files/usr/lib/node_modules/gitbook-cli/node_modules/npm/node_modules/graceful-fs/polyfills.js:287
         if (cb) cb.apply(this, arguments)
                  ^

   TypeError: cb.apply is not a function
      at /data/data/com.termux/files/usr/lib/node_modules/gitbook-cli/node_modules/npm/node_modules/graceful-fs/polyfills.js:287:18
      at FSReqCallback.oncomplete (node:fs:198:5)
   ```

   我们将用一行代码和三步操作解决这个问题。

   > 解决方案原文：[gitbook 出现 TypeError: cb.apply is not a function 解决办法](https://www.cnblogs.com/cyxroot/p/13754475.html)

   1. `nano /data/data/com.termux/files/usr/lib/node_modules/gitbook-cli/node_modules/npm/node_modules/graceful-fs/polyfills.js`，回车。  
      可以复制上面的代码；或输入 `nano` 加空格后，直接把报错信息里面的路径复制进去 (注意别把行号也加进去)。  
      如果手打的话，切记路径里面**一共出现了三次 `node_modules`**。这个文件也存在于 `/data/data/com.termux/files/usr/lib/node_modules/gitbook-cli/node_modules/graceful-fs/polyfills.js` (少了 `npm/node_modules`)，但这个文件**不会报错**。
   2. Ctrl+F，输入 `statfix`，回车。  
      如果你好奇 Ctrl 键在哪，键盘上面的两行里面。
   3. 回车后你会看到三行包含 `statFix` 的代码。在这三行代码上面的空行加上 `/*`，下面的空行加上 `*/`，以注释掉它们。  
      或者如果你愿意的话，在这三行代码前面都加上 `//`，效果相同。  
      使用键盘上面两行里面的上下左右箭头移动光标。
   4. Ctrl+O，回车，Ctrl+X。  
      或者，如果你愿意，Ctrl+X，输入 `y` 或 `Y`，回车。
   
   </TabItem>
   <TabItem value="windows1" label="Windows">

   ```
   %APPDATA%\npm\node_modules\gitbook-cli\node_modules\npm\node_modules\graceful-fs\polyfills.js:287
         if (cb) cb.apply(this, arguments)
                  ^

   TypeError: cb.apply is not a function
      at %APPDATA%\npm\node_modules\gitbook-cli\node_modules\npm\node_modules\graceful-fs\polyfills.js:287:18
      at FSReqCallback.oncomplete (node:fs:198:5)
   ```

   我们将用三步操作解决这个问题。

   > 解决方案原文：[gitbook 出现 TypeError: cb.apply is not a function 解决办法](https://www.cnblogs.com/cyxroot/p/13754475.html)

   1. 复制报错文件的路径，使用**除了**记事本外，任何可以编辑**纯文本**的软件打开报错的文件。*甚至你的 Python 编辑器都可以。*  
      不推荐自行翻找文件夹，有些文件夹可能被隐藏了，而且很容易找错。  
      > 请注意，***不要用 Word 和 Windows 自带的记事本***。Word 保存的不是纯文本文件，而记事本会自作聪明地在文件开始的地方加上几个特殊字符，结果会导致程序运行出现莫名其妙的错误。  
      ——廖雪峰的 [Git](https://liaoxuefeng.com/books/git/create-repo/) 和 [Python](https://liaoxuefeng.com/books/python/first-program/text-editor/) 教程
   2. 搜索 `statfix`。  
      你会看到三行包含 `statFix` 的代码。在这三行代码上面的空行加上 `/*`，下面的空行加上 `*/`，以注释掉它们。  
      或者如果你愿意的话，在这三行代码前面都加上 `//`，效果相同。
   3. 保存。

   </TabItem>
</Tabs>

### 安装 GitBook (Part II)

再次运行 `gitbook help`，仍会提示 `Installing GitBook x.y.z` (`x.y.z` 为版本号)。

耐心等待一段时间。最终将会提示：

``` text title="termux"
gitbook@3.2.3 ../usr/tmp/{tmp-xxxxxxxxxxxxxxxxx}/node_modules/gitbook
├── destroy@1.0.4
├── {若干依赖项……}
└── nunjucks@2.5.2 (asap@2.0.6, yargs@3.32.0, chokidar@1.7.0)
    build [book] [output]       build a book
    {若干帮助文档……}
        --log                   Minimum log level to display (Default is info; Values are debug, info, warn, error, disabled)
```

``` text title="windows"
gitbook@3.2.3 AppData\Local\Temp\{tmp-xxxxxxxxxxxxxxxx}\node_modules\gitbook
├── escape-html@1.0.3
├── {若干依赖项……}
└── nunjucks@2.5.2 (asap@2.0.6, yargs@3.32.0, chokidar@1.7.0)
    build [book] [output]       build a book
    {若干帮助文档……}
        --log                   Minimum log level to display (Default is info; Values are debug, info, warn, error, disabled)
```

这时，GitBook 就已经安装成功了。

## 如何使用 GitBook-cli 环境进行测试

你已经知道了 Termux / cmd 是个命令行。命令行，实际上是一个[功能强大、组合灵活](https://sspai.com/post/78249)的工具。

### 前期准备工作



<Tabs>
   <TabItem value="termux2" label="Termux" default>

   #### 存储权限

   运行 `termux-setup-storage`，并在弹窗中允许 Termux 访问存储空间。

   #### Git

   你可以使用 Git 克隆仓库、提交和推送修改等。Git 也是 @南瓜汁、@量筒 等维护者使用的维护方式。

   运行 `pkg install git` 并按前面的方式操作。

   Git 的配置及操作不在本文展开，可在[廖雪峰的 Git 教程](https://liaoxuefeng.com/books/git/)中查看。

   #### 导航到可访问目录

   Termux 的 `~` 目录，实际上等于 `/data/data/com.termux/files/home/` 目录。该目录除了 Termux 自身外，其他应用无法访问。因此，为了便于使用其他应用管理，需要导航至可以使用其他应用访问的目录。可以使用 `cd` (Change Directory) 命令满足这一需求。

   - 可以使用 `cd storage/shared`，导航至内部存储目录。等效目录为 `/sdcard/`。
   - 如果手机插了 TF 卡，则可以使用 `cd storage/external-1`，导航至 Termux 在 TF 卡内的私有目录。等效目录为 `/storage/xxxx-xxxx/Android/data/com.termux/files/`。

   在上述基础上，你可以再新建其他目录。比如在内部存储中新建一个名为 `termux` 的文件夹，则路径为 `~/storage/shared/termux`。

   </TabItem>
   <TabItem value="windows2" label="Windows">

   #### Git

   你可以使用 Git 克隆仓库、提交和推送修改等。Git 也是 @南瓜汁、@量筒 等维护者使用的维护方式。

   在 [Git 官网](https://git-scm.com/download/win) 选择系统架构并下载安装包。下载完成后安装。

   Git 的配置及操作不在本文展开，可在[廖雪峰的 Git 教程](https://liaoxuefeng.com/books/git/)中查看。

   #### 导航到自定义目录

   可以使用 `CD` (Change Directory) 命令满足这一需求。

   输入 `CD /D {path}` 导航至任意目录，其中 `{path}` 为绝对路径或相对路径。命令不区分大小写。

   </TabItem>
</Tabs>

### clone 仓库

在你指定的目录下，运行 `git clone https://github.com/PumpkinJui/groupdocs.git`。远程仓库内的所有文件将会被克隆到 `groupdocs` 文件夹下。  
如果配置了 SSH，则可以运行 `git clone git@github.com:PumpkinJui/groupdocs.git`。

此后，可以在 `groupdocs` 目录下修改群文档。

### 使用 GitBook 进行测试

导航到 `groupdocs` 目录，运行 `gitbook serve`。将会提示：

```
Live reload server started on port: 35729
Press CTRL+C to quit ...

info: {x} plugins are installed
info: {x} explicitly listed
info: loading plugin "xxxx"... OK
……
info: loading plugin "xxxx"... OK
info: found {xx} pages
info: found {xx} asset files
info: >> generation finished with success in {x.x}s !

Starting server ...
Serving book on http://localhost:4000
```

在此之后，在本机浏览器访问最后一行给出的 `http://localhost:4000`，即可预览群文档。在命令行 Ctrl+C 即可关闭此服务。

注意：livereload 插件本身用于实时更新预览，但似乎因为长期无人维护而无法使用。因此修改后，需要 Ctrl+C 并重新运行 `git serve`。

另外，GitBook 缓存目录已被加入 `.gitignore` 文件，因此不会被提交，无需担心。

<!-- markdownlint-disable-file MD040 -->
