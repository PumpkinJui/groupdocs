# 交互实体 文档

## 包性质

本包为行为包和资源包结合的包。

## 使用说明

装载本包之后，将在您的世界添加一种新实体：交互实体。

### 交互实体简介

交互实体是 Java 版中一种无重力、无外观、无行为的实体。但是，该实体可以检测玩家对其进行的操作，即「攻击」和「交互」。

我们在基岩版实现了交互实体的基本功能，即攻击和交互的检测。

为防止其名称在玩家与其交互时显示出来，交互实体将常隐身。

为防止玩家在攻击交互实体时被打死，交互实体将拥有高等级的抗性提升。

### 基本使用方法

#### 1. 生成一个交互实体

您可以使用`/summon template:interaction ...`命令召唤一个交互实体。

您可以在生成时为其命名，便于您筛选合适的交互实体。例：

```
summon template:interaction "bookshelf_interaction"
```

#### 2. 与交互实体右键（长按）交互时

在您与交互实体进行交互时，交互实体会执行函数`entities/interaction/interacted`。目前，我们在这个函数中写入了一条命令：

```
say 我被交互了！
```

因此，当您与该实体交互时，它将会说出“我被交互了！”。您可以自定义该函数的内容，使其在交互时能够符合您的需求。

#### 3. 与交互实体左键（点按）攻击时

在您攻击交互实体时，交互实体会执行函数`entities/interaction/attacked`。目前，我们在这个函数中写入了一条命令：

```
say 我被攻击了！
```

因此，当您攻击该实体时，它将会说出“我被攻击了！”。您可以自定义该函数的内容，使其在被攻击时能够符合您的需求。

#### 4. 自定义碰撞箱

我们指定了其默认状态下的碰撞箱为宽 1 格，高 1 格。但是，您可以自定义一个碰撞箱以符合您的需求。自定义的方法如下：

1. 打开交互实体的 SE 文件（`BP/entities/template/interaction.server_entity.json`），找到事件和组件组的内容：

``` json
"events": {
    "minecraft:entity_spawned": { "add": { "component_groups": [ "default_size", "default_state" ] } },
    ...
},
"component_groups": {
    "default_size": {
        "minecraft:custom_hit_test": { "hitboxes": [ { "width": 1, "height": 1, "pivot": [ 0, 0.5, 0 ] } ] }
    },
    ...
}
```

这里，只展示了`"minecraft:entity_spawned"`事件和`"default_size"`组件组，是因为它们是决定碰撞箱的关键内容。只要您拥有一定的附加包基础，您可以很快理解这些内容。

2. 现在，我们要加入一个新的碰撞箱，例如宽 1 高 2 的交互实体。您需要加入一个新的组件组和新的事件：

``` json
"events": {
    "minecraft:entity_spawned": { "add": { "component_groups": [ "default_size", "default_state" ] } },
    "w1_h2": { "add": { "component_groups": [ "w1_h2", "default_state" ] } },
    ...
},
"component_groups": {
    "default_size": {
        "minecraft:custom_hit_test": { "hitboxes": [ { "width": 1, "height": 1, "pivot": [ 0, 0.5, 0 ] } ] }
    },
    "w1_h2": {
        "minecraft:custom_hit_test": { "hitboxes": [ { "width": 1, "height": 2, "pivot": [ 0, 0.5, 0 ] } ] }
    },
    ...
}
```

其中`"w1_h2"`事件和`"w1_h2"`组件组是我们新加入的内容。

3. 然后，您可以使用下面的命令生成这样的实体：

```
summon template:interaction <坐标> <旋转> "w1_h2" [名称]
```

## 注意事项

1. 该实体执行的函数的执行者为交互实体。无法精准获取交互玩家。您可以使用`@p`以近似处理。
2. 模板包中提供的交互实体的 ID 为`template:interaction`，请在发布前更改其命名空间，不要使用`template:`作为命名空间。
3. 您需要在复制粘贴时，注意以下可能造成冲突的文件：
   - `RP/texts/en_US.lang`
   - `RP/texts/zh_CN.lang`
   - `RP/sounds.json`

## 参考文献

- [交互实体 - 中文 Minecraft Wiki](https://zh.minecraft.wiki/w/交互实体)
