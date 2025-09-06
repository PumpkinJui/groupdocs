---
sidebar_position: 1
---

# 服务器设定

## 说明

- 请务必遵守[群规](../rules/rules_main_text)中关于服务器的所有规定。

:::info[群规节选]

**第四十五条** 对于生存服务器，申请加入的新成员需要满足以下几点中的任意一条：

（一）管理员；

（二）积极测试地图，有纯生存经验，通过管理员在群内提问的关于 Minecraft 常识性问题考核，且表现良好的；

（三）管理员推荐，且表现良好的；

其中：

对于第二款，原则上测试地图的次数不少于 3 次，且均应在群文档中找到测试记录的有效证据，贡献较大的可酌情减少次数要求。管理员提问的常识性问题难度不应过高，每题限时，允许被考核者查询资料，被考核者回答问题后原则上不允许更改答案。提问的问题数量不少于 5 个，回答正确率需高于 80% 方可通过。

对于第三款，若管理员推荐的成员在生存服中因违规被罚第一档到第二档的，推荐该成员的管理员应当连带被处罚一档；若管理员推荐的成员在生存服中因违规被罚第三档到第五档的，推荐该成员的管理员应当引咎撤除管理员身份并处罚二档。

:::

- 各服务器使用白名单机制。若想参与各服务器的建设工作，请在群内艾特群主登记（艾特一次即可），以添加白名单。
- 温馨提醒：尽量不要尝试连接没有给出的端口。在 NAT 机器上，可能会连接到其他服务器 (共享公网 IP)；如果是独享公网 IP 的机器，可能会被设置的陷阱拦截。
- 所有游戏服务器仅支持 IPv4。如果您的设备仅限 IPv6，则建议联系您的 ISP 启用 IPv4 支持。可在 [IPW](https://ipw.cn/) 查询是否支持 v4/v6。

## 如何设定

### 简化版

**注意：仅 PC 和移动端支持自行添加服务器。**

1. 登录你的 Xbox 账号
2. 点击游戏 — 服务器，划到列表最下面，点添加服务器 (如有提示请直接忽略，并点「确定」)
3. 名称随便填 (给你自己看的)，地址和端口参考下面的对应服务器填
4. 点「保存」，在服务器列表内会出现「其他服务器」，下方有一服务器，名称为刚才填入的名称；点服务器名称，再点「加入服务器」。如有提示请直接忽略，并点「确定」

### 官方版

来自 [How to Play Minecraft: Bedrock Edition Multiplayer](https://help.minecraft.net/hc/en-us/articles/4410316619533-How-to-Play-Minecraft-Bedrock-Edition-Multiplayer)：

> #### How to play on an online server
>
> 1. From the title screen, select Play
> 2. Go to the Servers tab
> 3. Select which partner server you would like to join
> 4. If the server you want to join is not in the partner list, you can scroll to the bottom and click Add Server (PC and mobile only)
> 5. Input the server information
>    - You can get the server name, address, and port from the server owner
>    - For Minecraft servers that are safe to join and fun for all ages, check out [our official Minecraft server listing site](https://findmcserver.com/).

## 卡顿处理方案

1. 查看[宕机看板](https://status.nekoawa.com/)。
   - 监测的是服务器硬件的运行状态，具体各个服务器需要联系管理员。
2. 如有条件，在命令行执行下方命令后截图发 postmaster#nekodrive.net（请把`#`替换成`@`）。
   - Windows，管理员  
     `tracert -p <端口> -P udp <地址>`
   - Linux，管理员  
     `sudo traceroute -p <端口> -P udp <地址>`

## 连接说明

以 `xiaozhiyuqwq.top` 结尾的地址开启了 DNSSEC，如果您的设备不支持解析开启 DNSSEC 的域名，请使用 `nekoawa.com` 结尾的地址。

---

## 生存服 - III 周目

> 原版生存，无作弊，可获取成就。永远保持最新正式版。
>
> 欢迎在生存服务器开拓天地，实现你的小梦想哦！

- 地址 - banana.cvm.xiaozhiyuqwq.top / banana.cvm.nekoawa.com
- 端口 - 10000
- 版本 - 1.21.100

## 测试服

> 供测试群内部成员测试新技术或新地图的服务器，不常开启。

### 测试服 - I

- 地址 - banana.cvm.xiaozhiyuqwq.top / banana.cvm.nekoawa.com
- 端口 - 11000
- 版本 - 1.21.100

### 测试服 - II

- 地址 - banana.cvm.xiaozhiyuqwq.top / banana.cvm.nekoawa.com
- 端口 - 12000
- 版本 - 1.21.100

### 测试服 - III

- 地址 - banana.cvm.xiaozhiyuqwq.top / banana.cvm.nekoawa.com
- 端口 - 13000
- 版本 - 1.21.100

## 起床战争服

> 基于本群资源[量筒的起床战争](../resources/developing/bedwars/homepage)的最新稳定版而开服。
>
> 友谊第一，比赛第二！禁止作弊哦！

- 地址 - apple.cvm.xiaozhiyuqwq.top / apple.cvm.nekoawa.com
- 端口 - 10000
- 版本 - 1.21.100
