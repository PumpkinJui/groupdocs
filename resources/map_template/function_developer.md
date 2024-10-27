# 函数系统（开发者系统） 文档

## 包性质

本包为行为包和资源包的结合。

我们建议您把此包和「函数系统」结合使用，效果更好。否则，其中的部分内容可能需要您的单独适配。

## 使用说明


* 本包已经搭建了一套较为初步的开发者系统，以便您基于此编写一些您在开发时所独有的功能，便于您的开发。

* 您可以使用`/function settings/developer_mode`命令（前提是当您和「函数系统」包结合使用，并且进行了初始化）启用开发者模式。

* 启用开发者模式后，您可以使用`/function developer/query/variables`查询各记分板变量。
  * 添加新变量后，您需要在此文件中以及资源包的语言文件中添加您的新变量的描述，以便您在后续能够方便地查询您的记分板变量。

* 启用开发者模式后，您将获得 4 个物品，手持它们即可切换模式。在旁观模式下抬头可切换为创造模式。
  * 这些物品是自定义物品，使用了`template:`命名空间，请及时将它们改掉。