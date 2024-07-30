# 群文档编辑指南

> 本页面用于规范群文档编辑的细枝末节，并对编辑提出指导。  
如果你真的不想读这页东西或者认为过于麻烦，可以写好以后让我调格式。

## [如何作出贡献](../CONTRIBUTING.md)

## 盘古之白

所有群文档页面都应该适配「盘古之白」。

### 何谓「盘古之白」？

摘自[给你的 Markdown 挑挑刺——语法检查器入门与进阶 | 少数派](https://sspai.com/prime/story/markdown-linter-a-primer)：

> 中英文之间加入空隙，是为了实现视觉上的区隔，更加美观和易读。理想情况下，这种「空隙」应当由排版引擎自动加入，宽度宜为 1/4 个全角空格（em）。但由于数字排版环境复杂多变，在大多数时候（包括最常见的网页环境）不能指望排版引擎有这种能力，因此只能退而求其次，手动插入一个半角空格（因其宽度通常接近于 1/4 em），达到类似效果。

### 什么时候添加「盘古之白」？

基本按[此博客文章](https://blog.xiaoquankong.ai/zh/posts/chinese-document-typesetting-specification-spacing-of-pangu/)进行处理。例外情况如下：

- 链接以中文形式显示时无需添加盘古之白，如「一个[示例](https://example.com)网站」。但「一个 [example](https://example.com) 网站」仍需要。
- 对于 @，如果是借助该符号提及某个成员，则应当将 `@xxx` 作为一个整体添加盘古之白，即使该成员使用中文昵称。其他情况下单独为 `@` 添加盘古之白。

## 直角引号

为避免引号的「弯与直」和「中文还是英文」等问题，推荐使用直角引号。

- 「弯与直」：弯引号 `“”‘’` 与直引号 `"'` 之争。它们的码位按顺序分别为：`U201C U201D U2018 U2019 U0022 U0027`。
- 「中文还是英文」：引号是中文符号还是英文符号之争。影响「盘古之白」的添加。
- 「盘古之白」：难以判断是否应添加「盘古之白」，因为某些字体会把弯引号渲染为半角效果，有些则是全角。

直角引号为 `「」`，码位为 `U300C U300D`。

## 括号

有两种括号可以使用：

- 全角括号 `（）`，码位为 `UFF08 UFF09`。
- 半角括号 `()`，码位为 `U0028 U0029`。

对括号的使用不作要求，凭个人喜好决定；但半角括号需注意适配盘古之白。

## 引用（包括对群文档其他内容的引用和图片插入）

请尽量使用 MarkDown 格式 `[描述](链接) ![描述](图片链接)`。**请务必填写描述内容。**

引用互联网文章时，请写全网址 (包含 `https://`)。如网页支持，请填写 HTTPS 而非 HTTP。

在链接位置填写文件（相对）路径，可实现对群文档其他文件的引用。规则为：

- `<name>` 指一个文件或一个文件夹。对于一个文件，它指 `文件名.后缀名`，且**后缀名不可省略**。
- 同级目录是正在编写的文件所在的目录，上级和下级目录则是相对于同级目录而言的。下级目录是同级目录下的目录，也可称为「子文件夹」。上级目录反之。
- 同级目录下的文件：`./<name>`，`./` 可省略。如 `./a.md` 和 `a.md` 都表示同级目录下的文件 a.md。
- 上级目录下的文件：`../<name>`。如 `../a.md` 表示上级目录下的文件 a.md。
- 下级目录下的文件：`文件夹名/<name>`。如 `files/a.md` 表示下级目录 files 下的文件 a.md。
- 叠加使用：三者可以相互叠加。如以下都是成立的：  
  - ../../a.md
  - ../files/a.md
  - files/web/a.html
  
  但是 `././` 不成立。

需要注意，填写文件路径时**不可填写绝对路径**！如果路径以某个盘符或者 `/` 开始，那就是绝对路径。这样的路径在你的设备上可能运行良好，**但无法被其他设备及服务器识别！**

引用网络图片时，请将网络图片以最高清晰度下载，移动至群文档的 assets 目录下，使用文件路径进行引用。最好自行重命名，以防止路径过长。

链接中有中文的请进行转义。*这类情况最好避免掉，因为它可能导致各种各样的问题出现。*