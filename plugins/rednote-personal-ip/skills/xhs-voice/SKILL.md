---
name: xhs-voice
description: Select, build, or update a RedNote creator voice profile using cross-industry personal-IP style archetypes and ongoing text feedback. Use when the user invokes /xhs-voice, asks what writing style suits their industry, wants to choose a 个人IP风格, says 改成我的语气 or 这不像我说话, provides writing samples, chooses among copy variants, or returns an edited draft whose differences should improve future writing.
---

# 小红书声音档案

插件资源路径：Claude Code 使用 `${CLAUDE_PLUGIN_ROOT}` 作为插件根目录；Codex 从本 `SKILL.md` 向上两级得到插件根目录。以下资源路径均相对插件根目录。

读取 `references/voice.md` 和 `references/style-archetypes.md`。风格母型用于快速建立起点，用户后续选择、反馈和改稿用于把它校准成本人的声音。只记录可观察、可执行的特征，不模仿具体博主。

## 新建档案

1. 一次问清行业 / 身份、目标读者和明确不喜欢的表达；用户说“你帮我选”时直接推荐。
2. 根据行业映射只展示 4–6 张风格卡，让用户选 **1 个主风格 + 0–1 个辅助风格 + 1 个明确不要的风格**。
3. 围绕同一主题生成 3 段 80–120 字的校准样稿，让用户选最像自己的版本；记录选择原因。
4. 生成风格 DNA：与读者的关系、情绪温度、叙事视角、证据偏好、最多两个标志动作、禁用词和禁用句式。
5. 自然语料改为可选增强项。用户愿意提供时，可用微信长消息、朋友圈、群聊、语音转文字或本人满意的旧笔记继续校准；不要强制要求 3–5 段。
6. 用户同意长期保存后再创建声音档案。IP 定位档案与声音档案分开；没有项目记忆工具时，写入当前工作目录的 `voice-profile.md`。

情感博主与学生博主必须使用对应行业提醒：情感内容要有真实关系节点，不能用空泛鸡汤代替细节；学生内容要从真实校园场景、专业或爱好形成差异，不能虚构学校、成绩、录取或实习经历。

## 更新档案

1. 收集本轮的风格选择、标题 / 样稿选择、明确反馈和改稿差异；没有制作图片也要执行。
2. 用户主动选择或明确说出的偏好，写入“已确认偏好”；跨不同主题重复三次后才升为稳定规则。
3. 从改稿或普通聊天推断的偏好，先问“这条要不要固化下来？”，确认后再写入。
4. 把每条偏好改写成可执行规则并给出对应例句；保留适用语境。
5. 新规则与旧规则冲突时保留例外，不要为了统一而抹掉差异。

最终交付声音档案本身，以及本次新增或调整的规则摘要；不要顺手生成新笔记。用户没有授权保存时，只在对话里展示暂定风格 DNA。
