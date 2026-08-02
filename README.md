# rednote-personal-ip

小红书 / RedNote 个人 IP 内容工作台：从人设定位、选题和文案，到封面、声音档案、发布前检查与发布后数据诊断。

它不是一套“万能爆款句式”。它把创作拆成可以重复执行的判断流程：先理解账号和用户手里的素材，再决定发布类型、内容形态、文案和视觉；发布后只改数据真正掉下去的环节。

> 当前版本：`0.1.3` · 作者：VeraQ · 许可证：MIT

## 功能入口

同一套 Skill 同时供 Claude Code 与 Codex 使用。Claude Code 会为 Marketplace Skill 加上 `rednote-personal-ip:` 命名空间；Codex 可以通过已安装的 Plugin 或自然语言选择对应流程。

| Skill | Claude Marketplace 实际命令 | 做什么 |
|---|---|---|
| `/xhs` | `/rednote-personal-ip:xhs` | 主入口；询问本次目标并分诊 |
| `/xhs-post` | `/rednote-personal-ip:xhs-post` | 先锁定创作设定，再做标题、正文、hashtags，最后确认是否继续封面 |
| `/xhs-cover` | `/rednote-personal-ip:xhs-cover` | 只做封面：9 款版式 × 7 套风格主题 |
| `/xhs-voice` | `/rednote-personal-ip:xhs-voice` | 从跨行业风格卡建立或持续更新声音档案 |
| `/xhs-check` | `/rednote-personal-ip:xhs-check` | 发布前合规与去 AI 腔检查 |
| `/xhs-data` | `/rednote-personal-ip:xhs-data` | 用四段诊断判断下一条应该改什么 |

不使用快捷命令也可以直接说需求。Claude Code 与 Codex 都可以根据各 Skill 的描述选择对应流程。

## 七步工作流

完整笔记由 `/rednote-personal-ip:xhs-post` 分阶段执行：先交付文案，再确认是否需要封面。第 4 步可以跳过出图，但不能结束七步流程；无论是否做图，都继续自检，用户后续提供改稿时继续回流声音档案。

| 步骤 | 做什么 | 关键判断 |
|---|---|---|
| 0 · 快速创作卡 | 推荐 IP 风格、本篇表达方式和两个风格落点 | 一次确认即可开写，不把创作变成问卷 |
| 1 · 接素材 | 先确认用户已有话题、草稿或照片 | 有素材就在原材料上改，不另起炉灶 |
| 2 · 定形态 | 先定发布入口，再定内容形态 | 普通图文、想法和长文的限制不同 |
| 3 · 文案 | 标题、正文、标签、评论区引导 | 内容骨架与用户声音同时生效 |
| 4 · 封面分支 | 询问是否继续制作封面 | 不需要时只跳过出图，流程继续 |
| 5 · 自检 | 检查限制、合规、可读性和真实性 | 始终执行；有图时增加视觉检查 |
| 6 · 回流 | 从用户后续改稿中提取新偏好 | 收到改稿即触发，经确认后写入声音档案 |

## 核心能力

### 文案与个人 IP

- 覆盖美妆穿搭、母婴教育、情感关系、心理健康、学生校园、职场商业、法律财务、健身、家居、科技和旅行探店
- 普通图文、想法、长文笔记的内容选择
- 标题钩子、以逻辑主线组织的正文结构、标签与评论区引导
- 不替用户编造经历、数字、对话或效果

### 声音档案

首次使用不再强制提交 3–5 段微信。完整笔记默认只先展示一张“快速创作卡”：按行业 / 身份推荐一个暂定 IP 风格、本篇表达方式和两个会落实到正文的风格动作；用户回复“按推荐写”即可开始。长期的主风格、辅助风格、明确不要的风格和样稿校准，留给 `/xhs-voice` 深度建档。

内置 12 种风格母型：冷静拆解、犀利前辈、反常识观点、真实测评、买手筛选、在地侦察、闺蜜口述、温柔陪伴、场景故事、成长日记、高能教练和审美策展。风格和行业分开组合，例如“学生博主 × 成长日记”或“情感博主 × 温柔陪伴”。

声音档案会从风格选择、标题 / 样稿选择、明确反馈和用户改稿中持续学习；没有制作图片也会更新文字偏好。它会谨慎记录问句、句尾“呢 / 呀 / 吧”、标点、emoji / 颜文字、开头和结尾等微习惯：明确要求可确认，跨主题重复三次才稳定，普通聊天只待观察。快速创作卡不保存长期档案，除非用户同意。自然语料仍可用于增强，但不再是前置条件。

### 可复制的聊天交付

完整笔记开始前，用户可以选 Word 友好版、Markdown（`.md`）或纯文本（`.txt`）。三者都是聊天中的最终内容格式：Word 友好版可直接粘贴进 Word，Markdown 和纯文本可由用户自行保存；插件保持纯 Markdown，不附带程序或文件导出器。

正文不再按固定句数换行。Skill 会先确定核心结论，再按干货、故事、观点、复盘或测评的逻辑链组织内容；只有观点、场景、证据、行动阶段或转折变化时才分段。故事可自然升华，但领悟必须来自前文的具体选择与变化，不能强行鸡汤式总结。

### 空泛输入补强

风格只能补表达，不能替用户编事实。输入比较空泛时，Skill 会围绕真实现场、发生的变化和可验证细节最多追问三个具体问题；用户要先看初稿时，会用明确占位符标出尚未提供的经历、数字或对话。

### 封面与轮播

- 6 款封面：大字报、便签、清单、语录、对比、照片文字卡
- 3 款内页：分点页、金句页、结尾页
- 7 套视觉主题，可与 9 款版式自由组合
- HTML 模板精确渲染中文；氛围类封面支持生成无文字画面的 prompt

### 数据诊断

按曝光 → 阅读 → 互动 → 关注四段定位问题：

```text
曝光低                  → 选题、标签、垂直度、冷启动
曝光正常但阅读低        → 封面与标题
阅读正常但互动低        → 内容价值、可信细节、互动出口
互动正常但涨粉低        → 主页定位与关注承诺
```

## 安装

### Claude Code

```bash
claude plugin marketplace add Alovera525/rednote-personal-ip
claude plugin install rednote-personal-ip@rednote-skills
```

进入 Claude Code 后运行 `/reload-plugins`，再调用任一命令，例如：

```text
/rednote-personal-ip:xhs
/rednote-personal-ip:xhs-post 帮我把这段草稿做成一条完整笔记
/rednote-personal-ip:xhs-check 检查这条笔记能不能发
```

Claude Code 会给 Marketplace Plugin 的 Skill 加命名空间，因此实际命令不是裸 `/xhs-post`，而是 `/rednote-personal-ip:xhs-post`。这可以防止不同插件里的同名 Skill 冲突。

第三方 Marketplace 默认不会自动更新。首次安装后运行 `/plugin`，进入 **Marketplaces → rednote-skills**，选择 **Enable auto-update**。之后 Claude Code 会在启动时刷新 Marketplace；版本变化时自动更新已安装插件，并提示运行 `/reload-plugins`。

### Codex

```bash
codex plugin marketplace add Alovera525/rednote-personal-ip --ref main
codex plugin add rednote-personal-ip@rednote-skills
```

安装后开启一个新的 Codex 任务，再直接描述需求或明确选择 Plugin，例如：

```text
@rednote-personal-ip 我是学生博主，先选个人 IP 风格、本篇复盘日记和 Word 友好版，再写标题、正文和 hashtags，不生成图片
@rednote-personal-ip 我是学生博主，先帮我从风格卡里选一个长期个人风格
@rednote-personal-ip 检查这条笔记的合规风险和 AI 腔
```

Codex 的 Git Marketplace 当前需要手动刷新快照并重新安装最新版本：

```bash
codex plugin marketplace upgrade rednote-skills
codex plugin add rednote-personal-ip@rednote-skills
```

## 使用示例

```text
我想做一个面向新手妈妈的心理科普账号，先帮我定定位。

这是一段我写的草稿，不要重写，只帮我调整结构和标题。

帮我做一条完整笔记，先完成文案；文案确认后再问我要不要做封面。

/rednote-personal-ip:xhs-cover
给这条清单型笔记做一张封面，沿用上次的视觉主题。

/rednote-personal-ip:xhs-voice
我是情感博主，面向刚结束一段关系的女生。给我几种有辨识度但不鸡汤的风格选择。

/rednote-personal-ip:xhs-data
曝光 12000、阅读 530、点赞 18、收藏 41、评论 2、涨粉 0，下一条先改什么？
```

## 仓库结构

```text
rednote-personal-ip/
├── .agents/
│   └── plugins/
│       └── marketplace.json
├── .claude-plugin/
│   └── marketplace.json
├── .github/
│   └── workflows/
│       └── validate-version.yml
├── plugins/
│   └── rednote-personal-ip/
│       ├── .claude-plugin/
│       │   └── plugin.json
│       ├── .codex-plugin/
│       │   └── plugin.json
│       ├── skills/
│       │   ├── xhs/
│       │   ├── xhs-post/
│       │   ├── xhs-cover/
│       │   ├── xhs-voice/
│       │   ├── xhs-check/
│       │   └── xhs-data/
│       ├── references/
│       │   ├── copywriting.md
│       │   ├── voice.md
│       │   ├── style-archetypes.md
│       │   ├── output-delivery.md
│       │   ├── growth.md
│       │   └── covers.md
│       └── assets/
│           └── covers.html
├── scripts/
│   └── version.mjs
├── README.md
└── LICENSE
```

## 封面渲染依赖

文案、定位、检查和数据诊断不需要 API Key。只有把 HTML 封面渲染为 PNG 时需要：

- Playwright 与 Chromium
- Noto Sans CJK、思源黑体或其他可用中文字体

模板基准尺寸为 `1242 × 1656`（3:4）；默认建议以 2× 分辨率截图，上传平台压缩后仍能保持清晰。

## 数据与隐私

Skill 可能在当前工作目录读取或创建 `ip-profile.md` 与 `voice-profile.md`，用于保存账号定位和语言偏好。它们可能包含个人经历或表达样本：公开仓库、提交 Issue 或分享项目文件前，请先检查是否需要排除这些内容。

## 适用范围与限制

- 只覆盖小红书 / RedNote 图文内容，不制作视频笔记。
- 不保证流量、涨粉或商业结果。
- 平台字数、图片数量、审核和推荐规则可能变化；发布前应以平台当前界面与规则为准。
- 医疗、法律、金融等专业内容仍需要具备相应资质的人进行最终审核。

## 更新

### 用户更新

- **Claude Code**：为 `rednote-skills` 开启一次 auto-update 后，启动时会检查版本变化并自动更新。
- **Codex Git Marketplace**：运行 `codex plugin marketplace upgrade rednote-skills`，再运行 `codex plugin add rednote-personal-ip@rednote-skills`。当前 Codex CLI 没有第三方 Git Marketplace 的后台自动更新开关。

### 发布新版本

每次正式更新默认将 patch 版本精确增加 1，例如 `0.1.1 → 0.1.2`：

```bash
node scripts/version.mjs bump
node scripts/version.mjs check
```

`bump` 会同步修改 Claude Marketplace、Claude manifest、Codex manifest 和 README。GitHub Actions 会在 Skill、reference、asset、Marketplace 或 manifest 发生变化时检查版本是否恰好增加一个 patch；版本未增加、不同步或跳号都会失败。

## 贡献

欢迎通过 Issue 描述具体的小红书创作场景、失效规则或模板问题。提交改动时，请说明影响的是哪个 Skill、reference 或封面版式，并避免提交真实用户的声音档案和个人数据。

## 许可证

[MIT](LICENSE) © 2026 VeraQ
