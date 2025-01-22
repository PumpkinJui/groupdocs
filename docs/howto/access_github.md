# 如何访问 GitHub

由于服务器不在国内及 GFW 封锁等，GitHub 在部分地区 (特别是大多数国内地区) 加载较为缓慢，有时可能显示报错「连接超时」「无法找到服务器 IP 地址」等。

此教程提供各种*或许*可以加速访问 GitHub 的方法。不过，如果没有效果，也请勿苛责。

## CLI & 客户端

对于访问仓库内容，[Git](https://git-scm.com/downloads) 是极好的方式。**Git**Hub 本身即基于 Git。

~~至少在使用 SSH URL 时，Git 的网速有时可达 MB/s 量级。~~  
更新：现在即使使用 SSH 也无法连接 GitHub 了，建议与下方工具配合使用。提示信息如下：

```plaintext
ssh: connect to host github.com port 22: Connection timed out
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

[GitHub CLI](https://cli.github.com/) 亦是如此，但其功能与 Git 并非完全重叠。更新：目前尚未受上述问题影响。

对于任何反感 Git 命令行特性的人来说，GitHub 桌面版客户端 (见下) 和 [Visual Studio Code](https://code.visualstudio.com/) 亦可作为图形界面替代。

GitHub 客户端在某些场景似乎使用了不同的链接通路，至少在 Android 客户端上，加载速度相对较快。(但 Releases 下载速度和图片加载速度依旧很差)  
客户端分为[桌面版](https://github.com/apps/desktop)和[移动版](https://github.com/mobile)。Android 移动端发布在 Google Play Store，需用特殊方式获取安装包。

## 使用下载器

下载器可以通过包括多线程下载在内的多种方式加快下载速度，可以与其他方法叠加食用。

知名的下载器包括：

- [Internet Download Manager](https://www.internetdownloadmanager.com/) (Windows；收费，很贵)
- [Free Download Manager](https://www.freedownloadmanager.org/) (Windows、Android、macOS、Linux；免费)
- [Neat Download Manager](https://neatdownloadmanager.com/) (Windows；免费，轻量便携)

*很难想象它们的网址怎么都这么长。*

## 修改 Hosts

通过使用访问速度较快的 IP 实现加速的方法。必须具有管理员权限 (Windows) 或 root 权限 (Linux & Android)。

实践之一为 [GitHub520](https://github.com/521xueweihan/github520) 项目。

## 某些加速软件

加速原理通常是本地反代、域前置等。

实践包括 [Watt Toolkit (原名 Steam++)](https://steampp.net/)、[steamcommunity 302](https://www.dogfight360.com/blog/686/) 等。

在下载后，可能还需要进行一定设置才能有加速效果。

## 镜像站

实践之一为 [KGitHub 镜像站](https://kkgithub.com/)。  
以下来自 [KGitHub Help](https://help.kkgithub.com/questions/) (虽然这似乎不完全算「存在的问题」……)：

> 本站目前存在的问题：
>
> 1. 不能注册
> 2. 不能上传文件，可以登录，可以在线编辑
> 3. 来自 raw.githubusercontent.com 的下载可使用 raw.kkgithub.com 替代

## 代理加速下载网站

只需要下载时可以使用。

实践包括 [GitHub Proxy](https://ghproxy.link/)、[GitMirror](https://gitmirror.com) 等。

## CDN

只需要获取仓库内容时可以使用。

实践之一为 [jsDelivr](https://www.jsdelivr.com/)。

链接格式为：

- `https://cdn.jsdelivr.net/gh/<用户名>/<仓库名>/`
- `https://www.jsdelivr.com/package/gh/<用户名>/<仓库名>`

局限性：

- 无法提供图片和可执行程序加速服务
- 不能加载大小大于 50 MB 的仓库文件列表，但仍然可以通过直接输入文件路径进行下载
- 使用「Low latency “Near China” network」(低延迟的「临近中国」的网络) 进行服务，但仍可能无法访问  
  如有此类情况发生，可以使用以下非官方的国内镜像站点访问：  
  `https://cdn.jsdmirror.com/gh/<用户名>/<仓库名>/`

## VPN

俗称「魔法」「梯子」。

不到万不得已不建议使用，可能违反相关法律。  
群文档亦不对这一方式提供指导。
