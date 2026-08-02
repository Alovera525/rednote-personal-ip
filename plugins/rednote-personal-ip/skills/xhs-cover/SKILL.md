---
name: xhs-cover
description: Create RedNote or Xiaohongshu cover images and carousel pages using 9 layouts and 7 visual themes. Use when the user invokes /xhs-cover or asks for 小红书封面, 轮播内页, 封面排版, 视觉主题, HTML-to-PNG rendering, or an image-generation prompt for an atmospheric cover.
---

# 小红书封面

只处理封面和轮播视觉，不附赠整篇正文。开始前读取 `${CLAUDE_PLUGIN_ROOT}/references/covers.md`；需要模板时使用 `${CLAUDE_PLUGIN_ROOT}/assets/covers.html`。

## 工作流

1. 复用用户已经提供的标题、照片、账号定位和视觉偏好，不重复提问。
2. 信息不足时，一次问清：封面文字、账号类型、是否有照片、是否已有固定主题。
3. 首次做图时让用户从实际预览中选择一套 `theme-*`；主题是账号长期视觉，不要每条更换。
4. 按内容选择 `style-*`。版式可以每条更换，但不要为了展示能力一次交付多套用户没要的方案。
5. 信息型内容使用 HTML 模板渲染；氛围型内容先生成无文字画面，再用模板叠加中文。
6. 输出前检查尺寸、文字溢出、中文字体、缩略图可读性、页码、账号标识和轮播页数。

## 硬规则

- 不让生成式图片模型直接绘制中文文字。
- 不编造地点、经历、成绩或用户没有给出的细节。
- 用户只要 prompt 时只给 prompt；只要一张封面时不扩成整套轮播。
- 轮播每页只讲一个点，整套保持同一主题。
- 渲染 PNG 后必须实际查看成图，不能只凭 HTML 或代码判断成功。
