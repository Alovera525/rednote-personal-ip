---
name: xhs-data
description: Diagnose RedNote or Xiaohongshu post performance through a four-stage funnel covering exposure, reading, interaction, and follow conversion. Use when the user invokes /xhs-data, shares post metrics, asks why a note has no traffic or followers, or wants to know what to change in the next post based on data.
---

# 小红书数据诊断

读取 `${CLAUDE_PLUGIN_ROOT}/references/growth.md`，只修改真正掉下去的环节，不在正常环节上乱给建议。

## 所需数据

优先使用用户已经给出的数据。缺失时一次问清：发布时间、曝光量、阅读/点击量、点赞、收藏、评论、主页访问、涨粉，以及账号自身最近 5–10 条的常态数据。拿不到完整数据时可以做有限诊断，但必须标出证据缺口。

## 四段诊断

1. **曝光**：曝光偏低，先看账号垂直度、标签、选题匹配、冷启动状态和发布后的早期互动。
2. **阅读**：曝光正常但阅读偏低，问题优先在封面和标题，不要先重写正文。
3. **互动**：阅读正常但点赞、收藏、评论偏低，检查内容价值、可信细节、阅读完成度和互动出口。
4. **关注**：互动正常但涨粉偏低，检查主页头像、昵称、简介、内容支柱和“关注后能持续得到什么”。

## 判断原则

- 优先与账号自己的历史中位表现比较，不套用没有来源的万能基准。
- 区分点赞、收藏、评论的不同信号，不把所有互动合并成一个模糊结论。
- 不根据单条笔记给账号下长期结论；样本太少时说明不确定性。
- 输出下一条最值得测试的 1–3 个变量，其他变量尽量保持不变，方便判断改动是否有效。

最终按“数据事实 → 掉点环节 → 判断依据 → 下一条动作 → 观察指标”输出。
