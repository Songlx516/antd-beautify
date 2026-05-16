# antd-beautify 插件

HydroOJ 的现代化美化插件，提供深色模式优化、表格样式修复、代码框美化、标签分类着色等功能。

---

## 📋 功能总览

| 功能分类 | 功能名称 | 说明 |
|---------|---------|------|
| **页面美化** | 卡片阴影效果 | 现代化卡片样式与悬停上浮效果 |
| | 导航栏美化 | 浅色/深色模式导航栏样式 |
| | 登录界面修复 | 修复登录/注册页面边框问题 |
| **表格样式** | 深色模式表头 | 为所有页面表格添加深色模式支持 |
| | 首页表格修复 | 修复首页排名表格列对齐问题 |
| | 排名页面表格 | 修复 col--bio 列显示问题 |
| | 题库页面表格 | 优化题库页面表格样式 |
| **代码框美化** | 浅色模式 | 优化代码框背景、边框、字体样式 |
| | 深色模式 | 适配深色主题的代码框样式 |
| | 工具栏按钮 | 美化代码框工具栏按钮样式 |
| **按钮样式** | 蓝白风格按钮 | 统一主要按钮为蓝色主题 |
| | 章节切换按钮 | A、B 按钮紧凑布局 |
| | 收藏按钮保护 | 保留收藏星星图标的原始样式 |
| **标签系统** | 分类着色 | 根据算法类型自动着色 |
| | 标签悬停效果 | 悬停时放大和阴影效果 |
| | 分类对话框标签 | 题库分类筛选标签样式 |
| **输入框美化** | 全局输入框 | 统一输入框样式和聚焦效果 |
| **问题详情页** | 元信息区域 | 美化问题详情页面信息展示 |
| **其他功能** | 全局过渡动画 | 统一页面元素过渡效果 |
| | Markdown 表格 | 禁用自动合并单元格 |

---

## 📁 文件结构

```
antd-beautify/
├── components/
│   ├── problem/
│   │   └── tag.page.styl          # 标签分类着色样式
│   └── scratchpad/
│       ├── ScratchpadToolbarContainer.jsx
│       ├── Toolbar.page.styl
│       ├── ToolbarComponent.jsx
│       └── index.tsx
├── frontend/
│   └── code-button-beautify.page.ts
├── locales/
│   └── zh.yaml
├── templates/
│   ├── components/
│   │   └── problem.html
│   ├── layout/
│   │   └── html5.html             # 主布局样式（核心样式文件）
│   └── partials/
│       ├── footer.html
│       └── problem_list.html
├── index.ts
├── package.json
└── README.md
```

---

## 🎨 核心功能详解

### 1. 页面美化

#### 卡片阴影效果
```css
.section {
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.section:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  transform: translateY(-2px);
}
```

#### 导航栏美化
- **浅色模式**：白色渐变背景，蓝色激活状态
- **深色模式**：深色渐变背景，边框高亮激活状态

#### 登录界面修复
移除登录/注册/重置页面的多余边框和阴影，保持简洁风格。

### 2. 表格样式优化

#### 深色模式表头
```css
.theme--dark table.data-table thead tr,
.theme--dark table.data-table thead th {
  background: linear-gradient(180deg, #1a1a2e, #16213e) !important;
  border-bottom: 2px solid #0f3460 !important;
  color: #e0e0e0 !important;
}
```

#### 首页排名表格修复
```css
.page--homepage .section .data-table .col--bio {
  display: table-cell !important;
}
```

#### 题库页面表格
- 浅色模式：蓝色渐变表头，白色背景，浅蓝色斑马线
- 深色模式：深色渐变表头，深色背景，灰色斑马线

### 3. 代码框美化

**浅色模式：**
- 背景：`#f6f8fa`
- 边框：`1px solid #e1e4e8`
- 字体：Consolas/Monaco，14px

**深色模式：**
- 背景：`#1e1e2e`
- 边框：`1px solid #3b3b4f`
- 字体：Consolas/Monaco，14px

**工具栏按钮：**
- 位置：代码框右上角
- 样式：蓝色边框，悬停变蓝底白字

### 4. 按钮样式

**蓝白风格主按钮：**
```css
button.btn-primary:not(.star):not([data-star]):not([data-star-action]),
button[type="submit"]:not(.star) {
  background: #1890ff !important;
  border-color: #1890ff !important;
  color: #ffffff !important;
}
```

**排除规则：**
- 收藏按钮（`.star`, `[data-star]`, `[data-star-action]`）保留原始样式
- 评测记录列表按钮（`.col--problem-name button.link`）保留原始样式

**章节切换按钮（A、B）：**
- 紧凑布局，8px 间距
- 方形按钮，32x32px
- 蓝色激活状态

### 5. 标签分类着色

通过 `data-tag` 属性识别标签内容，自动分配颜色：

| 分类 | 背景色 | 文字色 | 示例标签 |
|------|--------|--------|----------|
| 动态规划 | #E6F7FF | #1890FF | DP、背包、LCS、LIS |
| 贪心 | #F6FFED | #52C41A | 贪心、构造、打表 |
| 树结构 | #FFF2F0 | #FF4D4F | 树、LCA、树链剖分 |
| 图结构 | #F9F0FF | #722ED1 | 图、最短路、二分图 |
| 数据结构 | #E6F7FF | #1890FF | 线段树、树状数组 |
| 字符串 | #FFF0F6 | #EB2F96 | KMP、后缀数组 |
| 数学 | #E6FFFB | #13C2C2 | 快速幂、矩阵 |
| 搜索 | #FFF7E6 | #FA8C16 | DFS、BFS |

### 6. 题库分类对话框标签

```css
.widget--category-filter__tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 14px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}
```
- 浅色模式：浅灰背景，悬停变蓝色
- 深色模式：深灰背景，悬停变蓝色

### 7. 输入框美化

```css
input, select, textarea, .textbox {
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  transition: all 0.2s ease;
}
input:focus {
  border-color: #40a9ff;
  box-shadow: 0 0 0 3px rgba(24,144,255,0.1);
}
```

### 8. 问题详情页美化

#### 元信息区域
- 浅色模式：白色渐变背景，阴影边框
- 深色模式：深色渐变背景，边框高亮

#### 标题样式
```css
.section:first-child .section__title {
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}
```

### 9. 全局过渡动画

```css
* {
  transition: color 0.2s ease, background-color 0.2s ease, 
              border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}
```

### 10. Markdown 表格禁用合并

自动拆分带有 `rowspan`/`colspan` 属性的单元格，确保表格显示直观。

---

## ⚠️ 样式优先级说明

### 核心问题
`html5.html` 中的内联样式优先级高于外部 `.styl` 文件，因此：

**高优先级文件**：`templates/layout/html5.html`
- 直接在 `<style>` 标签中定义样式
- 使用 `!important` 声明增强优先级

**低优先级文件**：`components/problem/tag.page.styl`
- 外部样式文件
- 样式可能被覆盖

### 修改建议
1. **优先修改** `html5.html`，确保样式立即生效
2. 使用浏览器开发者工具（F12）检查生效样式来源
3. 避免在多个文件中重复定义相同样式

---

## 🛠️ 安装与使用

1. **添加插件**：
   ```bash
   hydrooj addon add /path/to/ui-default/addon/antd-beautify
   ```

2. **重启服务**：
   ```bash
   hydrooj restart
   ```

3. **清除缓存**：`Ctrl+Shift+R` 强制刷新浏览器

---

## 📝 更新日志

### v2.4.0 (2026-05)
- ✨ 代码结构优化：合并重复的 CSS 样式定义
- 🎨 统一按钮选择器，减少重复代码
- 📝 更新 README 文档，完善功能说明

### v2.3.0 (2026-05)
- 🎨 添加代码框美化样式（浅色/深色模式）
- 🎨 修复首页排名表格列对齐问题
- 🎨 添加全局深色模式表格表头样式

### v2.2.0 (2025-05)
- 🎨 优化代码框工具栏按钮位置
- 📝 新增 `frontend/code-button-beautify.page.ts`

### v2.0.0 (2024-04)
- ✨ 现代化卡片阴影与悬停效果
- ✨ 按钮样式优化（蓝白风格）
- ✨ 导航栏美化
- ✨ 表单输入框美化
- ✨ 统一全局过渡动画

### v1.0.0
- 🎨 问题标签按分类着色
- 🏷️ 标签悬停动画效果

---

## 📄 许可证

MIT License