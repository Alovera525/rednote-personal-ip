# rednote-personal-ip

VeraQ 的小红书 / RedNote 个人 IP 内容工作台：从人设定位、选题和文案，到封面、声音档案、发布前检查与发布后数据诊断。

它不是一套“万能爆款句式”。它把创作拆成可以重复执行的判断流程：先理解账号和用户手里的素材，再决定发布类型、内容形态、文案和视觉；发布后只改数据真正掉下去的环节。

> 当前版本：`0.1.0` · 作者：VeraQ · 许可证：MIT

## 功能入口

安装为 Claude Code Plugin 后，Skill 会带上 `rednote-personal-ip:` 命名空间。

| Skill | Marketplace 中的实际命令 | 做什么 |
|---|---|---|
| `/xhs` | `/rednote-personal-ip:xhs` | 主入口；询问本次目标并分诊 |
| `/xhs-post` | `/rednote-personal-ip:xhs-post` | 从零做一条完整笔记，走七步流程 |
| `/xhs-cover` | `/rednote-personal-ip:xhs-cover` | 只做封面：9 款版式 × 7 套风格主题 |
| `/xhs-voice` | `/rednote-personal-ip:xhs-voice` | 建立或更新声音档案，让笔记更像本人 |
| `/xhs-check` | `/rednote-personal-ip:xhs-check` | 发布前合规与去 AI 腔检查 |
| `/xhs-data` | `/rednote-personal-ip:xhs-data` | 用四段诊断判断下一条应该改什么 |

不使用快捷命令也可以直接说需求。Claude 会根据各 Skill 的描述自动选择对应流程。

## 七步工作流

完整笔记由 `/rednote-personal-ip:xhs-post` 执行：

| 步骤 | 做什么 | 关键判断 |
|---|---|---|
| 0 · 建档 | 分开建立 IP 档案与声音档案 | 定位管战略，声音管具体表达 |
| 1 · 接素材 | 先确认用户已有话题、草稿或照片 | 有素材就在原材料上改，不另起炉灶 |
| 2 · 定形态 | 先定发布入口，再定内容形态 | 普通图文、想法和长文的限制不同 |
| 3 · 文案 | 标题、正文、标签、评论区引导 | 内容骨架与用户声音同时生效 |
| 4 · 出图 | 选择固定主题与本次版式 | 中文文字由模板排版，不交给图片模型生成 |
| 5 · 自检 | 检查限制、合规、可读性和真实性 | 图片里的文字也要一起检查 |
| 6 · 回流 | 从用户改稿中提取新偏好 | 每条规则经用户确认后才写入声音档案 |

## 核心能力

### 文案与个人 IP

- 情感、知识干货、专业专家和经历分享四类账号框架
- 普通图文、想法、长文笔记的内容选择
- 标题钩子、正文结构、标签与评论区引导
- 不替用户编造经历、数字、对话或效果

### 声音档案

不靠“真诚、接地气”这类抽象形容词猜风格，而是从 3–5 段自然语料中提取句长、标点、人称、emoji、口头禅和禁用词。用户每次改稿，都可以成为下一次写得更像本人的依据。

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

### Claude Code Plugin Marketplace

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

## 使用示例

```text
我想做一个面向新手妈妈的心理科普账号，先帮我定定位。

这是一段我写的草稿，不要重写，只帮我调整结构和标题。

/rednote-personal-ip:xhs-cover
给这条清单型笔记做一张封面，沿用上次的视觉主题。

/rednote-personal-ip:xhs-voice
这是我平时发给朋友的几段话，帮我建立声音档案。

/rednote-personal-ip:xhs-data
曝光 12000、阅读 530、点赞 18、收藏 41、评论 2、涨粉 0，下一条先改什么？
```

## 仓库结构

```text
rednote-personal-ip/
├── .claude-plugin/
│   └── marketplace.json
├── plugins/
│   └── rednote-personal-ip/
│       ├── .claude-plugin/
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
│       │   ├── growth.md
│       │   └── covers.md
│       └── assets/
│           └── covers.html
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

Marketplace 刷新后，在 Claude Code 的 `/plugin` 界面更新已安装插件。由于 manifest 固定了 `0.1.0`，每次正式发布都需要同步提升 `plugin.json` 与 `marketplace.json` 的版本号。

## 贡献

欢迎通过 Issue 描述具体的小红书创作场景、失效规则或模板问题。提交改动时，请说明影响的是哪个 Skill、reference 或封面版式，并避免提交真实用户的声音档案和个人数据。

## 许可证

[MIT](LICENSE) © 2026 VeraQ
