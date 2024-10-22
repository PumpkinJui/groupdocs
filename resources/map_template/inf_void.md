# 无限虚空 文档

## 包性质

本包为行为包。

## 使用说明

* 装载本包之后，将在主世界、下界和末地未加载的区块上产生无限虚空。

* 您可以选择性地保留文件，以对特定的维度生效。更改维度的文件为`dimensions/`文件夹下的内容：
  * `dimensions/overworld.json` - 对主世界应用虚空生成
  * `dimensions/nether.json` - 对下界应用虚空生成
  * `dimensions/the_end.json` - 对末地应用虚空生成

* 此外，您可以利用此包更改主世界的最高高度和最低高度。您可以打开`dimensions/overworld.json`对下面的内容进行更改：

``` json
"minecraft:dimension_bounds": { "min": -64, "max": 320 }
```

请注意最小值和最大值都应该是 16 的倍数。

## 参考文献

* 本文参考了微软文档「Data-Driven Overworld Height and Void Generation」的内容，链接为 https://learn.microsoft.com/en-us/minecraft/creator/documents/datadrivenoverworldheight?view=minecraft-bedrock-stable 。
