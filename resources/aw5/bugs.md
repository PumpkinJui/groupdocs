# 冒险世界：筑梦 漏洞与建议汇报

## 当前仍存在的问题

| 编号 | 汇报者 | 漏洞内容 |
| --- | --- | --- |
| aw5-001 | 量筒 | 可以用木材作为燃料，镐子作为烧制物，烧出铁粒。 |
| aw5-002 | 硫化银、沫尘 | 内容日志出现命令语法错误和`blocks.json`的报错 |
| aw5-007 | 文雨 | 心之容器黑色部分添加深浅变化 |
| aw5-008 | 比翼鸟 | 无法辨认剑可破坏的方块，缺少提示 |
| aw5-009 | lanos | 归还田萍镐子过程中，仍旧可以进行交互对话 |


## 已解决的问题

| 编号 | 汇报者 | 漏洞内容 | 解决状态及版本 |
| --- | --- | --- | --- |
| aw5-003 | 烟雨 | （建议）打完一轮之后铁镐耐久不足 | 不予修复 |
| aw5-004 | 宽判 | 火焰伤害疑似未关闭 | 不予修复 |
| aw5-005 | 沫尘 | 镇长不必以死亡的方式退场，可进行一定的优化 | 不予修复 |
| aw5-006 | 沫尘 | 矿洞 Boss 战应明确任务目标 | 不予修复 |
| aw5-008 | 量筒 | 一些重置的功能可以考虑用可使用的自定义物品（例如挖方块跑酷） | 不予修复 |

---

## 备注

- aw5-002 的内容日志报错全文（修复后删除本段）：

```
[Commands][warning]-Function lib/modify_data/game/refresh_1_mine failed to load correctly with error(s):

[Commands][warning]-Error on line 15: command failed to parse with error '语法错误：意外的“0”：出现在“s matches >>0<< run clone”'

[Blocks][warning]-Warning: The blocks.json "format_version" field was not given. "format_version" 1.1.0 will be used.
```