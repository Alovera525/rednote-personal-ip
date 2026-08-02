---
name: xhs
description: Route RedNote or Xiaohongshu personal-IP work to the correct focused workflow. Use when the user invokes /xhs, mentions 小红书 or RedNote without a specific deliverable, or wants help choosing between making a full post, creating a cover, building a voice profile, checking a draft, or diagnosing performance data.
---

# 小红书个人 IP 工作台

先判断用户已经说清楚要做什么没有。说清楚了就直接进入对应流程，不要再让用户选一次；没有说清楚时，只问一个问题：

> 这次想做哪件事？
> 1. 从零做一条完整笔记
> 2. 只做封面
> 3. 建立或更新声音档案
> 4. 发布前检查
> 5. 看数据，判断下一条改什么

按下面的映射读取对应 Skill，然后严格执行它：

| 用户目标 | 读取 |
|---|---|
| 完整笔记、选题、标题、正文、标签、评论区引导 | `${CLAUDE_PLUGIN_ROOT}/skills/xhs-post/SKILL.md` |
| 封面、内页、轮播图、版式或风格主题 | `${CLAUDE_PLUGIN_ROOT}/skills/xhs-cover/SKILL.md` |
| 建声音档案、学用户语气、根据改稿更新风格 | `${CLAUDE_PLUGIN_ROOT}/skills/xhs-voice/SKILL.md` |
| 发布前合规、限流风险、去 AI 腔检查 | `${CLAUDE_PLUGIN_ROOT}/skills/xhs-check/SKILL.md` |
| 曝光、阅读、互动、涨粉数据诊断 | `${CLAUDE_PLUGIN_ROOT}/skills/xhs-data/SKILL.md` |

用户只要其中一小部分时，只交付那一部分。不要把“主入口”变成长表单，也不要替用户编经历、分数、时间、对话或效果数据。
