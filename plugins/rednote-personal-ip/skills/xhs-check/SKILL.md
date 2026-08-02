---
name: xhs-check
description: Run a pre-publish RedNote or Xiaohongshu review for platform limits, compliance risks, fabricated details, readability, and generic AI tone. Use when the user invokes /xhs-check or asks to 检查笔记, 发布前自检, 查违禁词, 去AI腔, 看会不会限流, or review title, body, tags, cover text, and carousel pages before publishing.
---

# 小红书发布前检查

读取 `${CLAUDE_PLUGIN_ROOT}/references/copywriting.md`，检查用户实际提供的标题、正文、标签和图片文字。只报告能从材料中观察到的问题，不虚构平台判定或保证流量结果。

## 检查顺序

1. **发布类型与上限**：确认是普通图文、想法还是长文，再按对应规则检查标题、正文、标签和图片数量。
2. **合规与真实性**：扫描敏感表达、绝对化承诺、医疗/法律/金融越界、引流话术，以及用户没有提供的经历、数字和对话。
3. **信息流表现**：检查标题前部钩子、正文首句、前 200 字、封面缩略图可读性和轮播页数。
4. **去 AI 腔**：检查过度对仗、连续“不是…而是…”，书面连接词、强行金句、平均分配 emoji、空泛形容词和没有真实细节的段落。
5. **人设一致性**：有声音档案时逐条对照；没有时只做通用检查，不假装知道用户语气。

## 输出格式

```markdown
结论：可发 / 修改后可发 / 建议暂缓

必须改
- 原文位置 → 问题 → 可直接替换的版本

建议改
- 原文位置 → 为什么影响阅读或可信度 → 修改建议

已通过
- 简列确认无问题的关键项
```

不要为了显得严格而制造问题。平台规则会变化；遇到来源文件未覆盖或无法确认的规则，要明确标为待核实。
