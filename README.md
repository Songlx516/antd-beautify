# Ant Design Beautify 插件

HydroOJ 系统的 Ant Design 风格美化插件。

---

## 文件结构

```
antd-beautify/
├── index.ts              # 插件入口文件
├── templates/
│   ├── layout/
│   │   └── html5.html    # 全局布局模板（主要修改文件）
│   └── problem_main.html # 题库列表页面模板
└── README.md             # 本说明文档
```

---

## 修改内容

### 1. index.ts - 插件入口

**文件路径：** [index.ts](file:///c:/Users/songl/Desktop/Hydro-master/packages/ui-default/addon/antd-beautify/index.ts)

**修改内容：**
- 注册插件国际化文本
- 注册 `problem_main.html` 模板

---

### 2. problem_main.html - 题库列表页面

**文件路径：** [problem_main.html](file:///c:/Users/songl/Desktop/Hydro-master/packages/ui-default/addon/antd-beautify/templates/problem_main.html)

**修改内容：**
- 调整了题库列表页面的布局结构
- 添加了搜索功能优化

---

### 3. problem_detail.html - 问题详情页面模板

**文件路径：** [problem_detail.html](file:///c:/Users/songl/Desktop/Hydro-master/packages/ui-default/addon/antd-beautify/templates/problem_detail.html)

**修改内容：**
- 美化了作业/竞赛页面的问题信息显示
- 将问题信息移到与 ABCD 选项同一卡片内
- 采用两行紧凑布局（第一行4个，第二行3个）
- 添加了现代化的卡片样式和渐变背景
- 支持浅色模式和深色模式

**布局结构：**
```
┌─────────────────────────────────────────────────────────┐
│                    A. 【基础】字符串解压                │
├─────────────────────────────────────────────────────────┤
│  [A] [B] [C] [D]                                       │
├─────────────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐│
│  │   ID     │  │DIFFICULTY│  │  ACCEPT  │  │   TYPE   ││
│  │   2426   │  │  (None)  │  │    No    │  │  传统题  ││
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘│
│  ┌──────────┐  ┌──────────┐  ┌──────────┐             │
│  │ TIME     │  │ MEMORY   │  │ ACCEPT   │             │
│  │ 1000ms   │  │ 128MiB   │  │   0%     │             │
│  └──────────┘  └──────────┘  └──────────┘             │
├─────────────────────────────────────────────────────────┤
│  递归   简单循环  (紫色渐变胶囊按钮)                    │
└─────────────────────────────────────────────────────────┘
```

**样式特点：**
| 属性 | 值 |
|------|-----|
| 背景 | 渐变背景 (#f8fafc → #f1f5f9) |
| 边框 | 无边框 |
| 圆角 | 8px |
| 标签颜色 | 深灰蓝色 (#64748b) |
| 值颜色 | 深灰色 (#1e293b) |
| 悬停效果 | 背景变深 + 轻微上移 |

**深色模式适配：**
| 属性 | 值 |
|------|-----|
| 背景 | 渐变背景 (rgba 0.08 → 0.04) |
| 标签颜色 | 浅蓝灰色 (#94a3b8) |
| 值颜色 | 亮白色 (#f1f5f9) |

---

### 4. html5.html - 全局布局模板（主要修改文件）

**文件路径：** [html5.html](file:///c:/Users/songl/Desktop/Hydro-master/packages/ui-default/addon/antd-beautify/templates/layout/html5.html)

#### 3.1 CSS 样式修改

**CSS 样式写在 `<style>` 标签内，包含以下模块：**

| 行号 | 功能模块 | 说明 |
|------|---------|------|
| 5-53 | 现代化美化 - 卡片阴影与悬停 | 卡片圆角、阴影、悬停效果 |
| 55-80 | 按钮美化 - 蓝白风格 | 按钮颜色、边框、悬停状态 |
| 82-104 | 登录界面修复 | 移除多余边框 |
| 106-176 | 导航栏美化 | 浅色/深色模式适配 |
| 178-206 | 输入框美化 | 聚焦效果、边框样式 |
| 208-246 | 表格美化 | 圆角、行悬停效果 |
| 248-263 | 训练页面配色优化 | 绿色主题配色 |
| 265-280 | 排行榜列宽度调整 | 用户名列宽度：320px |
| 282-316 | 用户等级名字颜色（浅色模式） | LV0-LV10 各等级颜色 |
| 318-354 | 用户等级名字颜色（深色模式） | 深色模式适配 |
| 356-375 | 用户徽章样式 | 等级标签配色 |
| 377-395 | 问题标签样式（深色模式） | 按类型分类配色 |
| 397-413 | 问题标签样式（浅色模式） | 按类型分类配色 |
| 414-416 | 排行榜页面用户名列宽度 | 320px |
| 417-422 | 试题页面字体大小增大 | 16px，行高 1.8 |

#### 3.2 JavaScript 代码

**JS 代码写在 `<script>` 标签内，包含以下功能：**

1. **用户等级名字颜色动态设置**
   - 通过 JavaScript 动态设置用户名颜色
   - 根据 `uname--lvX` class 匹配等级
   - 支持浅色模式和深色模式

---

## 配色方案

### 用户等级颜色（宝石色系）

| 等级 | 颜色代码 | 颜色名称 |
|------|---------|---------|
| LV0 | `#9ca3af` | 钢铁灰 |
| LV1 | `#ef4444` | 红宝石 |
| LV2 | `#f97316` | 橙钻 |
| LV3 | `#eab308` | 黄钻 |
| LV4 | `#22c55e` | 祖母绿 |
| LV5 | `#14b8a6` | 翡翠 |
| LV6 | `#3b82f6` | 蓝宝石 |
| LV7 | `#6366f1` | 紫水晶 |
| LV8 | `#8b5cf6` | 紫罗兰 |
| LV9 | `#ec4899` | 粉钻 |
| LV10 | `#06b6d4` | 海蓝宝 |

### 问题标签颜色（按类型分类）

| 标签类型 | 颜色 |
|---------|------|
| 图论 | 蓝色系 |
| 数学 | 紫色系 |
| 动态规划 | 橙色系 |
| 贪心 | 黄色系 |
| 搜索 | 青色系 |
| 字符串 | 粉色系 |
| 数据结构 | 绿色系 |

---

## 字体设置

### HarmonyOS Sans 在线字体

**字体来源**：jsDelivr CDN

**CDN 地址**：
```
https://cdn.jsdelivr.net/gh/irozhi/HarmonyOS-Sans/HarmonyOS_Sans_SC/
```

**字体格式**：
- **woff2**（优先）：体积小，加载速度快
- **woff**（备用）：兼容性好

**字体栈（优先级从高到低）**：

| 字体 | 平台 | 说明 |
|------|------|------|
| `HarmonyOS_Sans_SC_Medium` | 在线加载 | 华为鸿蒙字体，现代、简洁、易读 |
| `PingFang SC` | macOS/iOS | 苹方 - 苹果系统中文默认字体 |
| `Microsoft YaHei` | Windows | 微软雅黑 - Windows 中文默认字体 |
| `Helvetica Neue` | macOS/iOS | 经典英文字体 |
| `Source Han Sans SC` | 跨平台 | 思源黑体 - Adobe 开源中文字体 |
| `Noto Sans CJK SC` | 跨平台 | Google 开源中文字体 |
| `WenQuanYi Micro Hei` | Linux | 文泉驿微米黑 |
| `-apple-system` | macOS/iOS | 系统默认字体 |
| `BlinkMacSystemFont` | macOS | macOS 系统字体 |
| `Segoe UI` | Windows | Windows 系统字体 |
| `Open Sans` | 跨平台 | Google 开源英文字体 |
| `sans-serif` | 兜底 | 系统无衬线字体 |

### 字体渲染优化

| CSS 属性 | 值 | 效果 |
|---------|-----|------|
| `-webkit-font-smoothing` | `subpixel-antialiased` | 次像素抗锯齿，Windows 上文字更清晰 |
| `text-rendering` | `optimizeLegibility` | 优化可读性，启用连字和字距调整 |
| `font-display` | `fallback` | 短暂阻塞期（约 100ms）等待字体加载，减少 FOUT 闪烁 |
| `font-size` | `17px` | 全局字号，比默认 16px 大一号 |

### 字体预加载（减少 FOUT）

使用 `<link rel="preload">` 提前加载字体：

```html
<link rel="preload" 
      href="https://cdn.jsdelivr.net/gh/irozhi/HarmonyOS-Sans/HarmonyOS_Sans_SC/HarmonyOS_Sans_SC_Medium.woff2" 
      as="font" 
      type="font/woff2" 
      crossorigin="anonymous">
```

**优点**：
- 浏览器优先下载字体
- 与 `font-display: fallback` 配合使用，大幅减少字体切换闪烁

### font-display 对比

| 值 | 效果 | 适用场景 |
|---|------|---------|
| `swap` | 立即显示备用字体，字体加载后切换 | 字体不重要，优先显示内容 |
| `fallback` | 等待约 100ms，没加载完显示备用字体 | 平衡用户体验和字体一致性 |
| `block` | 等待字体加载完成（最多 3 秒） | 字体非常重要，宁可等待 |

**当前选择**：`fallback` - 最佳平衡点

### 全局字号

**默认字号**：`16px` → **修改后**：`17px`

修改位置：`html { font-size: 17px; }`

由于 HydroOJ 使用 `rem` 单位，修改 `html` 的 `font-size` 会影响整个网站：
- 1rem = 16px（默认）
- 1rem = 17px（修改后，整体放大 6.25%）

### 版权说明

**HarmonyOS Sans** 是华为终端有限公司设计开发的字体家族，**支持免费商用**：

- 许可方授予不可转让、非排他性、免版税的全球版权许可
- 可用于软件、材料、徽标、应用软件等
- 不得单独分发或销售字体文件本身

详见官方许可协议：
- https://gitcode.com/openharmony/global_system_resources/blob/master/LICENSE_Fonts

---

## 注意事项

### 1. 样式生效方式

- **`.styl` 文件**：需要通过 webpack 编译才能生效，修改后需要重新构建
- **`html5.html` 内联样式**：直接在页面中渲染，无需构建，刷新即可生效

**重要：** 由于 HydroOJ 使用 webpack 构建前端资源，建议将所有自定义样式写在 `html5.html` 的 `<style>` 标签内，这样修改后刷新页面即可生效，无需重新构建。

### 2. CSS 优先级

- 内联样式（`style` 属性）> `<style>` 标签内样式 > 外部 CSS 文件
- 使用 `!important` 可以强制覆盖系统默认样式
- 如果发现样式不生效，检查是否被系统默认样式覆盖

### 3. 用户等级颜色机制

**当前实现方式：**

1. CSS 方式（在 `html5.html` 中）：
   - 选择器：`.user-profile-name.uname--lvX`
   - 适用于排行榜页面、首页排名卡片

2. JavaScript 方式（在 `html5.html` 中）：
   - 监听 DOM 变化，动态设置颜色
   - 适用于所有页面

**注意：** 用户详情页面的用户名颜色由系统默认样式控制，当前使用内联样式覆盖。

### 4. 问题标签样式

问题标签的 `data-tag` 属性包含标签类型，CSS 通过属性选择器匹配：
```css
a[data-tag="图论"] { color: ... }
```

### 5. 主题模式

HydroOJ 支持浅色模式和深色模式，通过以下方式区分：
```css
/* 浅色模式 */
:not(.theme--dark) .selector { ... }

/* 深色模式 */
.theme--dark .selector { ... }
```

---

## 常见问题

### Q1: 修改样式后页面没有变化？

**可能原因：**
1. 浏览器缓存 - 按 `Ctrl + Shift + R` 强制刷新
2. CSS 优先级不够 - 添加 `!important`
3. 选择器不匹配 - 检查实际 DOM 结构

**排查方法：**
- 打开浏览器开发者工具（F12）
- 选择目标元素
- 查看 Computed 面板中的实际样式

### Q2: 用户名颜色不生效？

**可能原因：**
- 用户等级 class 不匹配
- 被系统默认样式覆盖

**解决方案：**
- 检查 DOM 元素的 class 是否包含 `uname--lvX`
- 使用更具体的选择器
- 使用 JavaScript 动态设置

### Q3: 深色模式样式不生效？

**排查方法：**
- 检查选择器是否包含 `.theme--dark`
- 深色模式的样式应该覆盖浅色模式
- 确保深色模式样式写在浅色模式样式之后

---

## 修改建议

### 建议的修改流程

1. **开发阶段**：在 `html5.html` 中添加内联样式，刷新即可看到效果
2. **优化阶段**：将样式整理分类，添加注释
3. **维护阶段**：定期检查是否与系统更新冲突

### 避免的操作

1. **不要**修改系统核心的 `.styl` 文件（除非理解构建流程）
2. **不要**使用过于通用的选择器（如 `*`、`div`、`a`）
3. **不要**删除原始代码的注释
4. **不要**依赖元素的索引位置选择器（如 `nth-child`）

### 最佳实践

1. 使用页面类名限定作用域：`.page--ranking .selector`
2. 添加功能模块注释
3. 保留原始代码备份
4. 修改前检查 DOM 结构

---

## 相关文件参考

- 系统样式文件：`packages/ui-default/styles/`
- 页面样式文件：`packages/ui-default/pages/`
- 全局布局：`packages/ui-default/templates/layout/`
- 组件宏定义：`packages/ui-default/components/`
