# GitBook-cli 环境配置教程 (Windows)

[Termux 教程](gitbook_termux.md)

## 为什么要有这篇教程

GitBook-cli 是 CloudFlare Pages 构建时使用的框架。

在最早，群文档的建设需要在推送更改后等待 CF Pages 更新，然后查看是否有 bug，将 bug 修复后再次提交并推送。这样很不方便，而且一次提交能解决的事情，为什么要两次提交解决呢？

后来，群文档将它使用的 [Markdown](../archives/markdown.md) 作为归档类文件添加，以期有所改善。但查看文档 (甚至是全英的文档)，怎么能比得上自己用相同的框架打包一次来得快、准确和可靠呢？

因此，作为 [Issue #21](https://github.com/PumpkinJui/groupdocs/issues/21) 的解决方案，我们将在本文中指导您如何安装 GitBook-cli，并利用它进行测试。

注：Windows 的命令行有 cmd 和 PowerShell 两种，语法不尽相同。本文中默认为 cmd。  
在命令行环境中，选中文本按右键是复制功能，不选中文本按右键是粘贴功能。  
在 cmd 中运行每一行命令后，运行完成的标志是运行路径重新出现，后面带有白色的光标。

## 安装 GitBook-cli 环境

### 前期准备工作

你需要安装 Node.js。  
在 [Node.js 官网](https://nodejs.org/zh-cn/download/prebuilt-installer) 选择使用的系统和架构后，网站会自动下载安装包。下载完成后安装。

### 安装 GitBook-cli

**从现在起，忽略任何 `deprecated` 警告，不管是哪里报的。那是 GitBook-cli 长期无人维护的锅。**

首先，**设置 npm 镜像**。  
运行 `npm config set registry https://registry.npmmirror.com`。  
此命令不会返回结果。

然后，**安装 GitBook-cli**。  
运行 `npm install -g gitbook-cli`。  
**其中 `-g` 不可省略，否则后面会报错 `No command gitbook found` 或 `gitbook: command not found`。**  
将返回 `added {x} packages in {y}s`，其中 `{x}` 和 `{y}` 为数字。

### 安装 GitBook (Part I)

没想到吧。

> The purpose of the gitbook command is to load and run the version of GitBook you have specified in your book (or the latest one), irrespective of its version.  
  参考翻译：gitbook 命令的目的是加载并运行您在书中指定的 GitBook 版本（或最新版本），无论其版本如何。

运行 `gitbook help`，会提示 `Installing GitBook x.y.z` (`x.y.z` 为版本号，应为 `3.2.3`)，然后等着。它过一会就该报错了。

### 处理报错

报错信息应为：

```
/data/data/com.termux/files/usr/lib/node_modules/gitbook-cli/node_modules/npm/node_modules/graceful-fs/polyfills.js:287
      if (cb) cb.apply(this, arguments)
                 ^

TypeError: cb.apply is not a function
    at /data/data/com.termux/files/usr/lib/node_modules/gitbook-cli/node_modules/npm/node_modules/graceful-fs/polyfills.js:287:18
    at FSReqCallback.oncomplete (node:fs:198:5)
```

我们将用三步操作解决这个问题。

> 解决方案原文：[gitbook 出现 TypeError: cb.apply is not a function 解决办法](https://www.cnblogs.com/cyxroot/p/13754475.html)

1. 使用**除了**记事本外，任何可以编辑**纯文本**的软件打开报错的文件。  
   > 请注意，***不要用 Word 和 Windows 自带的记事本***。Word 保存的不是纯文本文件，而记事本会自作聪明地在文件开始的地方加上几个特殊字符，结果会导致程序运行出现莫名其妙的错误。  
     ——廖雪峰的 [Git](https://liaoxuefeng.com/books/git/create-repo/) 和 [Python](https://liaoxuefeng.com/books/python/first-program/text-editor/) 教程
2. 搜索 `statfix`。  
   你会看到三行包含 `statFix` 的代码。在这三行代码上面的空行加上 `/*`，下面的空行加上 `*/`，以注释掉它们。  
   或者如果你愿意的话，在这三行代码前面都加上 `//`，效果相同。
3. 保存。

### 安装 GitBook (Part II)

再次运行 `gitbook help`，仍会提示 `Installing GitBook x.y.z` (`x.y.z` 为版本号)。

耐心等待一段时间。最终将会提示：

```
gitbook@3.2.3 ../usr/tmp/{tmp-xxxxxxxxxxxxxxxxx}/node_modules/gitbook
├── destroy@1.0.4
├── {若干依赖项……}
└── nunjucks@2.5.2 (asap@2.0.6, yargs@3.32.0, chokidar@1.7.0)
    build [book] [output]       build a book
    {若干帮助文档……}
        --log                   Minimum log level to display (Default is info; Values are debug, info, warn, error, disabled)
```

这时，GitBook 就已经安装成功了。

## 如何使用 GitBook-cli 环境进行测试

你已经知道了 cmd 是个命令行。命令行，实际上是一个[功能强大、组合灵活](https://sspai.com/post/78249)的工具。

### 前期准备工作

#### Git

在 [Git 官网](https://git-scm.com/download/win) 选择系统架构并下载安装包。下载完成后安装。

Git 的配置及操作不在本文展开，可在[廖雪峰的 Git 教程](https://liaoxuefeng.com/books/git/)中查看。

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

### 提交和推送修改

Git 的配置及操作不在本文展开，可在[廖雪峰的 Git 教程](https://liaoxuefeng.com/books/git/)中查看。

<!-- markdownlint-disable-file MD040 -->

> 提示  
  该文章的内容需要改进。  
  理由：直接复制的 Termux 文档，可能和 Windows 的实际情况不符。  
  L36：提示文本  
  L53~L59：报错路径  
  L81：路径
