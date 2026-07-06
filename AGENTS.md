# 太阳能储能逆变器精选 - 需求拆解文档

## 产品概述

- **产品类型**: 淘宝客商品展示单页网站
- **场景类型**: <scene_type>prototype-app</scene_type>
- **目标用户**: 对太阳能储能、逆变器设备有采购需求的消费者
- **核心价值**: 聚合太阳能储能逆变器商品，提供价格对比与佣金导购，引导用户跳转淘宝/天猫完成购买
- **界面语言**: 中文
- **主题偏好**: 深蓝+绿色渐变（能源科技风）
- **导航模式**: 无导航（单页展示）

---

## 页面结构总览

> **说明**：此表为页面生成的唯一数据源，单页场景

**页面文件**: `HomePage.tsx`

| 区域 | 说明 |
|-----|------|
| 顶部标题栏 | 品牌标识"能源芯智社 - 太阳能储能设备精选" |
| 搜索与排序工具栏 | 关键词搜索框 + 价格排序切换按钮 |
| 商品卡片网格 | 12 个商品卡片，响应式网格布局 |
| 底部声明 | 推广导购提示文字 |

---

## 页面布局建议

- **布局模式**: 上下分区（标题栏 → 工具栏 → 卡片网格 → 底部声明）
- **视觉重心**: 商品卡片网格（用户浏览选品的核心区域）
- **结果承载区**: 商品卡片网格，初始态为 12 个商品全量展示；搜索无结果时显示空状态提示

---

## 数据来源声明

| 数据/操作 | 来源类型 | 实现要求 | mock 兜底 |
|---|---|---|---|
| 商品列表展示 | demo-mock | `src/data/products.ts` 导出 12 条商品数据常量 | ✅ 本身就是 mock |
| 商品图片 | demo-mock | 直接使用用户提供的 alicdn 图片 URL | ✅ 本身就是 mock |
| 淘宝客推广链接 | demo-mock | 直接使用用户提供的 s.click.taobao.com 链接，`window.open(link, '_blank')` | ✅ 本身就是 mock |

---

## 功能列表

- **页面/区块**: 商品展示主页
  - **页面目标**: 展示 12 款太阳能储能逆变器商品，支持搜索与排序，引导用户跳转购买
  - **功能点**:
    - **标题栏展示**: 页面顶部固定显示"能源芯智社 - 太阳能储能设备精选"，深蓝渐变背景，白色文字
    - **商品卡片网格**: 以响应式卡片网格展示 12 个商品，桌面端 4 列、平板 3 列、手机 2 列或 1 列；每张卡片包含商品主图（`<img>` 加载 alicdn 图片）、商品名称、活动到手价（橙色/红色醒目显示）、预估佣金（绿色小字"预估佣金 ¥XX"）、"立即购买"按钮
    - **关键词搜索**: 顶部工具栏提供搜索输入框，输入关键词实时过滤商品名称（前端 `filter` 匹配 `name` 字段），搜索结果为空时显示"未找到相关商品"空状态
    - **价格排序**: 工具栏提供排序切换按钮（价格从低到高 / 从高到低），点击切换排序方向，商品卡片列表实时重排
    - **立即购买跳转**: 点击卡片上的"立即购买"按钮，调用 `window.open(item.link, '_blank', 'noopener,noreferrer')` 在新标签页打开淘宝客推广链接
    - **底部声明**: 页面底部显示"商品及售后由淘宝/天猫商家提供，本站为推广导购页面"，灰色小字居中

---

## 数据共享配置

无跨页面数据需求，单页内使用 `useState` 管理搜索关键词与排序状态。

-------

<scene_type>prototype-app</scene_type>

# UI 设计指南

## 1. 设计推导依据

- **参考意图**: Free Direction —— 无成品参考图，按产品语义与用户风格要求自主设计。
- **核心情绪 / 应用类型**: 专业可信的能源科技导购 —— 用户浏览工业级储能逆变器产品，需要清晰对比参数、快速识别价格与佣金，同时保持对平台的信赖感。
- **独特记忆点**: 深蓝渐变背景上的“电路板网格线”纹理，让页面像一块通电的能源控制面板，商品卡片悬浮其上如同设备模块。

## 2. Art Direction

- **方向名**: 能源控制面板
- **Design Style**: Swiss Minimalist 瑞士极简 + 科技仪表感 —— 克制的信息层级让用户快速扫描参数，深蓝渐变与绿色点缀传递光伏能源的清洁与专业，不做花哨装饰。
- **DNA 参数**: 圆角 subtle（`rounded-md` ~ `rounded-lg`）/ 阴影 subtle（`shadow-sm`，卡片 hover 时 `shadow-md`）/ 间距 standard（`gap-4` ~ `gap-6`）/ 字体方向 无衬线清晰科技感 / 装饰手法 顶部渐变背景 + 细网格线纹理，卡片纯白底，hover 上浮 4px。
- **应用类型**: Landing / 导购单页 —— 单页滚动，网格卡片展示，顶部固定标题栏 + 搜索排序工具栏。

## 3. Color System

**色彩关系**: 深蓝渐变主基底 + 绿色能源点缀 + 暖橙价格锚点 + 纯白卡片承载面。
**配色设计理由**: 深蓝渐变（夜空到深海）建立科技信任感；绿色用于佣金标签和品牌标识，传递光伏/清洁能源语义；暖橙仅用于价格和 CTA 按钮，形成强视觉锚点；大面积中性灰白保证卡片内文字可读性。
**主色推导**: 用户明确要求“深蓝+绿色渐变（能源+科技感）”，primary 取深蓝渐变的核心色，accent 取低饱和绿用于状态反馈和佣金标签底，价格和购买按钮用暖橙作为语义强调色，不进入 primary 角色。
**使用比例**: 60% 中性（bg/card/text/textMuted/border）/ 30% 辅助（accent/accentForeground）/ 10% primary（标题栏渐变、主按钮、激活态）。

| 角色 | CSS 变量 | Tailwind Class | HSL 值 | 设计说明 |
|---|---|---|---|---|
| bg | `--background` | `bg-background` | hsl(220 20% 96%) | 页面全局浅灰底，衬托卡片 |
| card | `--card` | `bg-card` | hsl(0 0% 100%) | 纯白卡片，商品信息承载面 |
| text | `--foreground` | `text-foreground` | hsl(220 15% 15%) | 深灰近黑，标题和正文 |
| textMuted | `--muted-foreground` | `text-muted-foreground` | hsl(220 8% 50%) | 辅助说明、佣金小字、底部提示 |
| primary | `--primary` | `bg-primary` / `text-primary` | hsl(215 60% 28%) | 标题栏渐变深蓝、主按钮、搜索框聚焦边框 |
| primaryForeground | `--primary-foreground` | `text-primary-foreground` | hsl(0 0% 98%) | primary 上的白色文字和图标 |
| accent | `--accent` | `bg-accent` | hsl(145 35% 92%) | 佣金标签浅绿底、hover/focus 浅底、排序选中态 |
| accentForeground | `--accent-foreground` | `text-accent-foreground` | hsl(145 45% 28%) | 佣金文字、绿色品牌点缀 |
| border | `--border` | `border-border` | hsl(220 10% 88%) | 卡片边框、输入框边界、分割线 |

**语义色提示**:
- **价格强调色（暖橙）**: 不进入 primary 角色，仅用于价格数字和“立即购买”按钮。价格文字 `hsl(18 85% 48%)`，购买按钮背景同色、文字白色。与 primary 深蓝形成冷暖对比，色温偏暖约 197°，饱和度高于 primary 约 25%，仅占页面 5% 面积。
- **成功/佣金绿**: 复用 accent 体系，`bg-accent` + `text-accent-foreground`，与 primary 色温对齐（同属冷色系），饱和度低于 primary 约 15%。
- **无警告/错误色需求**。

## 4. 字体与节奏

- **font-display**: Noto Sans SC —— 中文标题清晰有力，适配科技工业品导购的正式感。
- **font-body**: Inter —— 西文数字和价格清晰可辨，与 Noto Sans SC 搭配自然。
- **字号**: H1（标题栏）text-2xl ~ text-3xl；卡片商品名 text-sm leading-snug；价格 text-lg font-bold；佣金 text-xs；按钮 text-sm。
- **圆角**: 小到中（`rounded-md` ~ `rounded-lg`）—— 卡片和按钮微圆角保持专业感，不做 pill 或尖锐直角。

## 5. 全局布局契约

- **Reference Layout Use**: 按需求结构推导 —— 顶部标题栏固定，下方搜索排序工具栏，主体商品卡片网格，底部提示文字。
- **Page / Section Order**: 标题栏 → 搜索 + 排序工具栏 → 商品卡片网格（3 列桌面 / 2 列平板 / 1 列手机）→ 底部免责提示。
- **Standard Content Zone**: `max-w-6xl`（约 1280px）+ `mx-auto`，适配 12 个商品卡片的 3 列网格。
- **Shell / Frame Alignment**: 单页无导航框架，内容容器独立居中滚动。
- **Padding & Rhythm**: `px-4 md:px-6 lg:px-8 py-6 md:py-10`，卡片间距 `gap-5`。
- **Full-bleed Zones**: 顶部标题栏背景渐变可 `w-full`，内部标题文字和搜索栏仍受 `max-w-6xl mx-auto` 约束。
- **Local Narrowing**: 搜索输入框和排序下拉在工具栏内自然宽度，不额外收窄。
- **Overflow Strategy**: 商品名过长时 `line-clamp-2`，不撑破卡片；图片 `aspect-[4/3]` 统一比例。
- **Flexibility Boundary**: 允许移动端改为单列网格、卡片内边距微调；不允许改标题栏渐变方向、卡片圆角系统、价格色和佣金色。

## 6. 视觉与动效

- **装饰**: 标题栏深蓝渐变（`hsl(215 60% 20%)` → `hsl(215 50% 35%)`）叠加半透明细网格线纹理（`background-image` 重复 SVG 网格），模拟电路板或能源面板质感。
- **阴影/边界**: 轻 —— 卡片默认 `shadow-sm`，hover 时 `shadow-md` + `translateY(-4px)` 过渡。
- **动效**: 克制 —— 卡片 hover 上浮 `transition-all duration-200`；搜索输入聚焦时边框色过渡到 primary；排序下拉和按钮 hover 做微妙的背景色切换。

## 7. 组件原则

- **商品卡片**: Default 白底 + 浅灰边框；Hover 上浮 4px + 阴影加深；图片区域 `aspect-[4/3]` 裁切居中；商品名 `line-clamp-2`；价格大号暖橙；佣金小字绿色 `bg-accent` 圆角标签；“立即购买”按钮暖橙实心，hover 加深。
- **搜索框**: 浅灰底输入框，聚焦时边框变为 primary，placeholder 用 textMuted。
- **排序下拉**: 使用 Select 组件，选中项高亮为 accent 浅底，未选中项默认样式。
- **底部提示**: textMuted 小字居中，与上方内容用 `border-t` 浅灰分割线隔开。
- 加载与空状态：搜索无结果时显示“未找到匹配商品”空状态，居中灰色文字 + 浅灰图标，延续克制风格。

## 8. Image Direction

- **Image Role**: 商品主图 —— 每张卡片顶部展示淘宝商品图，是用户决策的核心视觉依据。
- **Image Art Direction**: 商品图来自阿里 CDN，风格不统一（有蓝白科技风、纯白产品图、场景图等）。卡片内图片统一 `aspect-[4/3]` 裁切 + `object-cover`，居中展示产品主体；卡片白底和浅灰边框作为中性承载面，不抢夺商品图视觉权重。页面本身无 Hero 图或品牌主视觉需求。
- **Image Prompt Keywords**: 无（商品图由外部 CDN 提供，不生成）。
- **Image Avoidance**: 不对商品图做额外滤镜或色彩叠加处理，保持原始产品图的真实感；避免在卡片内添加装饰性插画或图标背景。

## 9. Anti-patterns

- **Split personality**: 标题栏深蓝渐变与卡片纯白底是唯二的两个色彩区域，不在页面中间插入第三种背景色块。
- **Phantom tokens**: 只使用已定义的 9 个基础色角色 + 价格强调色，不编造 `--card-hover` 等未定义变量。
- **Default SaaS drift**: 不出现通用蓝紫色渐变、默认 shadcn 蓝色按钮；购买按钮用暖橙，佣金用绿色，与能源科技语义绑定。
- **Invisible interaction**: 卡片 hover 上浮必须有 `focus-visible` 的 outline 样式；排序下拉和搜索框聚焦状态明确。
- **Mono-hue tyranny**: primary 深蓝仅用于标题栏渐变、主按钮和聚焦边框；价格和购买按钮用暖橙强调色；佣金用绿色 accent 体系；三者权重分明。
- **Status color drift**: 价格暖橙饱和度高于 primary 约 25%，但仅占页面 5% 面积，不刺眼；佣金绿饱和度低于 primary 约 15%，与整体冷色系协调。