---
name: xhs-voice
description: Build or update a RedNote creator voice profile so generated posts sound like the user rather than generic AI copy. Use when the user invokes /xhs-voice, says 改成我的语气, 这不像我说话, 学一下我的风格, provides writing samples, or returns an edited draft whose differences should improve future writing.
---

# 小红书声音档案

插件资源路径：Claude Code 使用 `${CLAUDE_PLUGIN_ROOT}` 作为插件根目录；Codex 从本 `SKILL.md` 向上两级得到插件根目录。以下资源路径均相对插件根目录。

读取 `references/voice.md`，只记录可观察、可执行的语言特征。

## 新建档案

1. 不问“你是什么风格”。请求 3–5 段自然语料，优先微信长消息、朋友圈、群聊表达或语音转文字。
2. 提取句长、段落节奏、人称、标点、emoji、口头禅、常用开头和收尾。
3. 优先建立禁用词与禁用句式；正面形容词不能单独作为写作规则。
4. 样本不足三段时，把结论标为“待观察”，不要固化成硬规则。
5. IP 定位档案与声音档案分开保存。没有项目记忆工具时，写入当前工作目录的 `voice-profile.md`。

## 更新档案

1. 对比原稿与用户改稿，只从真实差异中推断偏好。
2. 把差异改写成一条可执行规则，并给出对应例句。
3. 每条新规则先问“这条要不要固化下来？”，得到确认后再写入档案。
4. 新规则与旧规则冲突时保留语境，不要为了统一而抹掉例外。

最终交付声音档案本身，以及本次新增或调整的规则摘要；不要顺手生成新笔记。
