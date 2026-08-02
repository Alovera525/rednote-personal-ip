# rednote-personal-ip

小红书 / RedNote 个人 IP 内容工作台：从人设定位、选题和文案，到封面、声音档案、发布前检查与发布后数据诊断。

它不是一套“万能爆款句式”。它把创作拆成可以重复执行的判断流程：先理解账号和用户手里的素材，再决定发布类型、内容形态、文案和视觉；发布后只改数据真正掉下去的环节。

> 当前版本：`0.1.8` · 作者：VeraQ · 许可证：MIT

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
| 0 · 建立创作卡 | 新号从 3 组 IP 风格 + 文章口气中选择；老号导入爆帖 | 一组为推荐、两组可选；默认直接输出文案 |
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
- 人物故事、品牌 / 项目复盘、影评书评、PLOG、关系记录与阶段性随笔的高人感长文写法
- 不替用户编造经历、数字、对话或效果

### 声音档案

先识别账号阶段，再建立或复用档案。

| 账号阶段 | 怎么开始 | 确认后做什么 |
|---|---|---|
| 从零起号 | 按行业给出 3 组“个人 IP 风格 + 文章口气”：1 组推荐、2 组可选；可选提供 1–3 个参考账号 | 用户选 `1 / 2 / 3`、按推荐或微调后，再写文案 |
| 已运营账号 | 导入 1–3 篇自己的或已获授权的爆帖 | 提炼后回显“账号风格确认卡”，确认后再创作 |

参考账号只适用于从零起号时建立内容方向：只参考定位、读者、栏目和内容结构，并转化为用户自己的方向；不复制原文、口头禅、经历或视觉设计。已有账号优先用自己的或已获授权的爆帖建立档案，不用外部账号替代本人声音。

声音档案每次都按四块回显：

| 区块 | 包含内容 |
|---|---|
| 账号定位 | 行业 / 身份、目标读者、内容边界 |
| 个人 IP 与文章口气 | 主 / 辅助 / 不要风格、与读者关系、两个标志动作 |
| 文字习惯与禁用项 | 句长、段落、问句、语气词、emoji、禁用词与例句对照 |
| 本次确认与下一步 | 本轮新增偏好、待确认项、是否授权保存 |

内置 12 种风格母型：冷静拆解、犀利前辈、反常识观点、真实测评、买手筛选、在地侦察、闺蜜口述、温柔陪伴、场景故事、成长日记、高能教练和审美策展。风格与行业分开组合，例如“学生博主 × 成长日记”或“情感博主 × 温柔陪伴”。

偏好不会一次就被固化：用户明确要求进入“已确认偏好”；在不同主题连续出现三次才成为“稳定规则”；模型仅从一次聊天或一次改稿推断出的内容，只能放进“待观察”。没有制作封面也会继续学习文字偏好。快速创作卡不保存长期档案，除非用户同意。

### 可复制的聊天交付

完整笔记默认直接在聊天中输出可发布文案：标题、正文、按“大词 / 精准词 / 个人 IP（或栏目）词”显式分层的 hashtags，以及置顶评论。用户明确说“给我 `.md`”或“给我 `.txt`”时，才改为相应格式；插件不生成附件，也不附带程序或文件导出器。

正文不再按固定句数换行。Skill 会先确定核心结论，再按干货、故事、观点、复盘、测评或文化评论的逻辑链组织内容；只有观点、场景、证据、行动阶段或转折变化时才分段。人物故事、项目复盘与随笔会先补身份、触发、拉扯、选择与回声等真实材料，避免把抽象感悟写成空泛长文；故事可自然升华，但领悟必须来自前文的具体选择与变化，不能强行鸡汤式总结。

每篇完整笔记还会附一份“内容成长诊断”（35 分）：真实锚点、个人位置、冲突与变化、内容价值、结构与节奏、人感与网感、个人风格辨识度。它只基于本次确认的材料与当前稿指出缺口，并给出下一版可补的事实、场景或表达习惯；不预测流量，也不对用户本人下判断。只要标题或短改写不会附这份诊断。

### 空泛输入补强

风格只能补表达，不能替用户编事实。完整笔记先要有一个明确结论，以及至少两个内容锚点（真实场景、具体选择、方法步骤、判断标准、证据或适用边界）。输入空泛时，Skill 会最多追问三个具体问题；如果用户一时给不出例子，会先给 6 个明确标为“供确认”的候选方向讨论，不能把候选写成用户的经历或结果。仍无法确认事实时，只交付结构稿与清晰占位符，不把空泛内容包装成可直接发布的成稿。

### 封面与轮播

- 6 款封面：大字报、便签、清单、语录、对比、照片文字卡
- 3 款内页：分点页、金句页、结尾页
- 7 套视觉主题，可与 9 款版式自由组合
- HTML 模板精确渲染中文；氛围类封面支持生成无文字画面的 prompt

### 发布前合规与去 AI 腔

完整笔记无论是否制作封面，都会经过发布前自检；也可单独调用 `/xhs-check`。检查会覆盖平台限制、合规风险、真实性、逻辑与段落，以及常见 AI 腔：过度对仗、连续“不是……而是……”、书面连接词、强行金句、平均分配 emoji、空泛形容词和没有真实细节的段落。

去 AI 腔不是编造细节来“装真人”。Skill 会优先保留用户给出的真实锚点与表达习惯，删掉无信息量句子，补足方法、证据或适用边界，并通过朗读检查不自然的书面表达；缺少事实时会追问或保留占位，不虚构经历、数字、对话或结果。

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

> **第一次使用 Claude Code？** 请先按 [Claude Code 官方安装与登录指南](https://docs.anthropic.com/en/docs/claude-code/setup) 完成安装，再回到这里执行下方插件安装命令。

```bash
claude plugin marketplace add Alovera525/rednote-personal-ip
claude plugin install rednote-personal-ip@rednote-skills
```

进入 Claude Code 后运行 `/reload-plugins`。以下每条都可单独复制：

```text
/rednote-personal-ip:xhs 我想做一个面向新手妈妈的心理科普账号，但还没有选题。请先判断我这次应该从定位、选题还是完整笔记开始。
```

```text
/rednote-personal-ip:xhs-cover 给标题“作品集卡住时，我先做了这件小事”做一张封面：便签版式、克制审美主题、不要人物照片。
```

```text
/rednote-personal-ip:xhs-check 这是我准备发布的笔记：[粘贴标题、正文、hashtags]。请检查合规风险、AI 腔、逻辑和段落；保留原意，列出必须改与可选改。
```

Claude Code 会给 Marketplace Plugin 的 Skill 加命名空间，因此实际命令不是裸 `/xhs-post`，而是 `/rednote-personal-ip:xhs-post`。这可以防止不同插件里的同名 Skill 冲突。

### Codex

```bash
codex plugin marketplace add Alovera525/rednote-personal-ip --ref main
codex plugin add rednote-personal-ip@rednote-skills
```

安装后开启一个新的 Codex 任务。以下每条都可单独复制：

```text
@rednote-personal-ip 我是学生博主，想写“作品集做不下去时我怎么重新开始”。先给我 3 个个人 IP 风格 + 文章口气组合，标出推荐；我选完后直接输出标题、正文和 hashtags，不生成图片。
```

```text
@rednote-personal-ip 我是情感博主，面向刚结束一段关系的女生。请建立声音档案，并按账号定位、个人 IP 与文章口气、文字习惯与禁用项、本次确认与下一步四块回显。
```

```text
@rednote-personal-ip 曝光 12000、阅读 530、点赞 18、收藏 41、评论 2、涨粉 0；标题是“……”，封面是“……”。按曝光、阅读、互动、关注四段判断问题，并给下一条最优先的一项改法。
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

不同平台的更新方式不同：Claude Code 可以由用户开启自动更新；Codex 的第三方 Git Marketplace 目前需要手动刷新。更新不会影响你的声音档案或已完成的笔记。

#### Claude Code：首次开启后自动更新

1. 在 Claude Code 输入 `/plugin`。
2. 进入 **Marketplaces → rednote-skills**。
3. 选择 **Enable auto-update**。

之后 Claude Code 会在启动时检查新版本；收到更新提示后运行 `/reload-plugins`，再开启新的对话即可使用最新版。

#### Codex：手动刷新最新版本

Codex 目前没有可由本插件替用户开启的第三方 Git Marketplace 后台自动更新。需要更新时，在终端复制运行：

```bash
codex plugin marketplace upgrade rednote-skills
codex plugin add rednote-personal-ip@rednote-skills
```

完成后开启一个新的 Codex 任务。第一条命令刷新 Marketplace 快照，第二条命令让已安装的插件使用最新版本。

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
