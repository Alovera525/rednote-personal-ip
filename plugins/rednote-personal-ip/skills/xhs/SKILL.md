---
name: xhs
description: Route RedNote or Xiaohongshu personal-IP work to the correct focused workflow. Use when the user invokes /xhs, mentions 小红书 or RedNote without a specific deliverable, or wants help choosing between writing copy, creating a cover, building a voice profile, checking a draft, or diagnosing performance data.
---

# 小红书个人 IP 工作台

插件资源路径：Claude Code 使用 `${CLAUDE_PLUGIN_ROOT}` 作为插件根目录；Codex 从本 `SKILL.md` 向上两级得到插件根目录。以下资源路径均相对插件根目录。

先判断用户已经说清楚要做什么没有。说清楚了就直接进入对应流程，不要再让用户选一次；没有说清楚时，只问一个问题：

> 这次想做哪件事？
> 1. 写标题、正文和标签
> 2. 只做封面
> 3. 选择个人风格，或更新声音档案
> 4. 发布前检查
> 5. 看数据，判断下一条改什么

按下面的映射读取对应 Skill，然后严格执行它：

| 用户目标 | 读取 |
|---|---|
| 选题、标题、正文、标签、评论区引导，或从零做一条笔记 | `skills/xhs-post/SKILL.md` |
| 明确要求封面、内页、轮播图、版式、风格主题或继续制作视觉 | `skills/xhs-cover/SKILL.md` |
| 选择个人风格、建声音档案、学用户语气、根据选择或改稿更新风格 | `skills/xhs-voice/SKILL.md` |
| 发布前合规、限流风险、去 AI 腔检查 | `skills/xhs-check/SKILL.md` |
| 曝光、阅读、互动、涨粉数据诊断 | `skills/xhs-data/SKILL.md` |

文案范围按用户的话直接判断：

- 只要标题 → 复用已有风格；没有时先做一次轻量风格选择，再只给标题。
- 只要正文 → 复用已有风格；没有时先做一次轻量风格选择，再只给正文；标签只有用户需要时才附上。
- 要标题和内容或“做一条笔记” → 先交付标题、正文、hashtags 和置顶评论，再问是否需要制作封面；收到选择后继续发布前自检。
- 明确要封面或轮播视觉 → 才进入 `xhs-cover`。

“做一条完整笔记”默认也是**先文案、后确认封面**，不是一次跑完图片流程。用户未明确提出视觉需求前，不读取封面资源、不打开模板、不生成或渲染图片。用户不需要封面时，只跳过出图，仍继续执行文案自检；用户后续提供改稿时仍执行改稿回流。

新账号第一次生成文案时，先按 `xhs-post` 第 0 步确定风格 DNA。不要只让用户交 3–5 段微信；应根据行业 / 身份推荐 4–6 张风格卡。输入空泛时用结构化的真实场景问题补强，不替用户编细节。

用户只要其中一小部分时，只交付那一部分。不要把“主入口”变成长表单，也不要替用户编经历、分数、时间、对话或效果数据。
