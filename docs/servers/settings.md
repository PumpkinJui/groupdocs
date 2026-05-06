---
sidebar_position: 1
---

# 服务器设定

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::warning

请务必遵守[群规](../rules/rules_main_text)中关于服务器的所有规定。

恶意破坏服务器的，将处以最高至五档的群规处罚。

:::

## 地址及端口

:::tip

如果您不知道这些信息怎么用，请参阅[如何设定自定义服务器](../tools/howto/set_servers)。

:::

本群所有服务器地址相同，端口不同。地址均为：

- `banana.cvm.xiaozhiyuqwq.top`
- `banana.cvm.nekoawa.com`
- `server.8088263.xyz`
- `101.37.17.212`

所有地址基本等价，仅有细微不同，可以随意选择。如果无法连接，可以尝试其他的地址。

<Tabs>
<TabItem value="s3" label="生存" default>

:::tip

生存服当前位于 III 周目。有关生存服的更多信息，请参阅[概述页面](s3)。

生存服白名单有额外的限制条件，请参阅[生存服审核规则](s3/audit)。

:::

原版生存，无作弊，可获取成就。永远保持最新正式版。

欢迎在生存服务器开拓天地，实现你的小梦想哦！

- 端口：30000
- 版本：26.20

</TabItem><TabItem value="test" label="测试">

供测试群内部成员测试新技术或新地图的服务器。

 <Tabs><TabItem value="t1" label="测试 I" default>

- 端口：31000
- 版本：26.20

 </TabItem><TabItem value="t2" label="测试 II">

- 端口：32000
- 版本：26.20

 </TabItem><TabItem value="t3" label="测试 III">

- 端口：33000
- 版本：26.20

 </TabItem></Tabs>
</TabItem><TabItem value="bedwars" label="起床">

基于本群资源[量筒的起床战争](../resources/bedwars)而开服。

友谊第一，比赛第二！禁止作弊哦！

 <Tabs><TabItem value="b1" label="稳定服" default>

基于起床战争的稳定版本开服。

- 端口：34000
- 版本：26.0

 </TabItem><TabItem value="b2" label="测试服">

基于起床战争的最新测试版本开服。

- 端口：35000
- 版本：26.0

 </TabItem></Tabs>
</TabItem><TabItem value="dev" label="开发">

开发服是供开发者开发的服务器，一般仅供管理员和受邀人员进入。

 <Tabs><TabItem value="d1" label="开发 I" default>

当前开发项目：《[冒险世界：筑梦](../resources/aw/aw5)》！

- 端口：36000
- 版本：26.20

 </TabItem><TabItem value="d2" label="开发 II">

:::tip

本服务器无需管理权限，全部已登记成员均拥有白名单。

:::

当前开发项目：《[炸翻它 2](../resources/boom/boom2)》！

- 端口：37000
- 版本：26.20

 </TabItem><TabItem value="d3" label="开发 III">

- 端口：38000
- 版本：26.20

 </TabItem></Tabs>
</TabItem></Tabs>

## 说明

- 根据群规规定，各服务器使用白名单机制。若想参与各服务器的建设与测试工作，请在群内艾特群主登记（一次即可），说明意图，以添加白名单。
- 除另有撤销以外，全部已登记成员均默认拥有测试服白名单。生存服需要在满足申请条件后通过考核，方可添加白名单。开发服除管理员和受邀人员外不对外开放。
- 如遇卡顿，请联系管理员核实。卡顿可能由硬件故障、软件漏洞、地图规模过大或仅仅是连续开服时间过长导致。可在[宕机看板](https://status.nekoawa.com/)查看服务器硬件的运行状态。
- 对于 iOS 和 iPadOS 设备，如果找不到服务器 IP 或卡微软验证，可以从[此页面](https://app.nekodrive.net/s/neViK)中选择下载 DNSPod 的 config，然后根据 Safari 的提示进行操作。
  - 该页面归属于本群服务器管理方。通过应用该 mobileconfig，DNS 请求将优先由 [DNSPod Public DNS](https://www.dnspod.cn/products/publicdns) 进行解析，使用 DoH 和 DoT 方法。DNSPod 归属于腾讯云。
  - 请避免从未知来源随意安装 mobileconfig 文件，以免威胁到您的隐私与安全。如确实需要安装，请人工检查 config 内容，或使用 AI 进行审计。
  - 如需卸载，请在设置页面中搜索「描述文件」，选择此 config 并删除。
- 不要尝试连接没有给出的端口。如果是 NAT 服务器（共享公网 IP），可能会连接到其他服务器；如果是独享公网 IP 的服务器，可能会被设置的陷阱拦截封禁。
