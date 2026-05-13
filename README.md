# antd-beautify 插件

HydroOJ 的现代化美化插件，包含深色模式优化、表格样式修复、代码框美化、标签分类着色等功能。

---

## 功能特性与代码位置

### 1. 深色模式表格表头样式

**修改文件**：`templates/layout/html5.html`（第 102-130 行）

为所有页面的表格添加深色模式支持：

```css
.theme--dark table.data-table thead tr,
.theme--dark table.data-table thead th {
  background: linear-gradient(180deg, #1a1a2e, #16213e) !important;
  border-bottom: 2px solid #0f3460 !important;
  color: #e0e0e0 !important;
}
```

### 2. 首页表格深色模式

**修改文件**：`templates/layout/html5.html`（第 132-155 行）

为首页的训练和排名表格表头添加深色模式样式：

```css
.theme--dark.page--homepage .section .data-table thead tr,
.theme--dark.page--homepage .section .data-table thead th {
  background: linear-gradient(180deg, #1a1a2e, #16213e) !important;
  border-bottom: 2px solid #0f3460 !important;
  color: #e0e0e0 !important;
}
```

### 3. 首页排名表格列对齐修复

**修改文件**：`templates/layout/html5.html`（第 157-165 行）

修复首页排名表格 `.col--bio` 列的显示问题：

```css
.page--homepage .section .data-table .col--bio {
  display: table-cell !important;
}
```

### 4. 全局深色模式表格表头样式

**修改文件**：`templates/layout/html5.html`（第 167-173 行）

适用于训练、比赛、作业、评测记录、排名等页面：

```css
.theme--dark table.data-table thead tr,
.theme--dark table.data-table thead th {
  background: linear-gradient(180deg, #1a1a2e, #16213e) !important;
  border-bottom: 2px solid #0f3460 !important;
  color: #e0e0e0 !important;
}
```

### 5. 排名页面表格列对齐修复

**修改文件**：`templates/layout/html5.html`（第 175-182 行）

```css
.page--ranking .section .data-table .col--bio {
  display: table-cell !important;
}

.page--ranking .section .data-table td.col--bio {
  height: auto !important;
}
```

### 6. 代码框美化 - 浅色模式

**修改文件**：`templates/layout/html5.html`（第 184-198 行）

```css
.theme--default .sample pre,
.sample pre:not(.theme--dark *) {
  background: #f6f8fa !important;
  border: 1px solid #e1e4e8 !important;
  border-radius: 6px !important;
  padding: 12px 16px !important;
}

.theme--default .sample code,
.sample code:not(.theme--dark *) {
  background: transparent !important;
  color: #24292e !important;
  font-family: "Consolas", "Monaco", "Source Code Pro", "Monospace" !important;
  font-size: 14px !important;
  line-height: 1.5 !important;
}
```

### 7. 代码框美化 - 深色模式

**修改文件**：`templates/layout/html5.html`（第 200-214 行）

```css
.theme--dark .sample pre {
  background: #1e1e2e !important;
  border: 1px solid #3b3b4f !important;
  border-radius: 6px !important;
  padding: 12px 16px !important;
}

.theme--dark .sample code {
  background: transparent !important;
  color: #e4e4e7 !important;
  font-family: "Consolas", "Monaco", "Source Code Pro", "Monospace" !important;
  font-size: 14px !important;
  line-height: 1.5 !important;
}
```

### 8. 问题标签分类着色

**修改文件**：`components/problem/tag.page.styl`（第 104-597 行）

通过 `data-tag` 属性识别标签内容，为不同类型的算法标签分配独特的颜色方案：

| 分类 | 背景色 | 悬停色 | 示例标签 |
|------|--------|--------|----------|
| 动态规划 | `#0064E0` | `#0050B3` | 动态规划、LCS、LIS、背包、DP |
| 贪心 | `#52C41A` | `#389E0D` | 贪心、构造、打表 |
| 树结构 | `#237804` | `#135200` | 树结构、LCA、生成树、树链剖分 |
| 图结构 | `#722ED1` | `#531DAB` | 图结构、Floyd、Dijkstra、最短路 |
| 数据结构 | `#1677FF` | `#0958D9` | 数据结构、栈、队列、线段树、树状数组 |
| 搜索算法 | `#FA8C16` | `#D46B08` | DFS、BFS、IDDFS |
| 数学与数论 | `#13C2C2` | `#08979C` | 快速幂、排列组合、位运算、矩阵 |
| 字符串 | `#EB2F96` | `#C41D7F` | KMP、Manacher、后缀数组、Trie |
| 分治 | `#F759AB` | `#EB2F96` | 分治、RMQ、分块 |
| 竞赛等级 | 渐变背景 | - | GESP、CSP-J、CSP-S、NOIP |

### 9. 标签悬停效果

**修改文件**：`components/problem/tag.page.styl`（第 86-91 行）

```css
.problem__tag-link:hover {
  filter: brightness(0.85) saturate(1.2) !important;
  box-shadow: 0 2px 8px rgba(0,0,0,0.25) !important;
  transform: scale(1.05);
}
```

### 10. 全局过渡动画

**修改文件**：`templates/layout/html5.html`（第 216-219 行）

```css
* {
  transition: color 0.2s ease, background-color 0.2s ease, 
              border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}
```

### 11. 代码框工具栏按钮位置

**修改文件**：`templates/layout/html5.html` 和 `frontend/code-button-beautify.page.ts`

通过页面特定选择器实现独立定位：

```css
/* 题库页面 */
.page--problem_detail .section.sample > .toolbar {
  top: 40px !important;
}

/* 作业页面 */
.page--homework_detail_problem .section.sample > .toolbar {
  top: 20px !important;
}

/* 比赛页面 */
.page--contest_detail_problem .section.sample > .toolbar {
  top: 20px !important;
}
```

### 12. 章节切换按钮样式

**修改文件**：`templates/layout/html5.html`（第 1099-1164 行）

- 按钮间距：`8px`（更紧凑）
- 按钮尺寸：`32x32px` 方形按钮
- 圆角：`8px`
- 默认状态：灰色边框 + 灰色文字
- 悬停状态：蓝色边框 + 蓝色文字 + 浅蓝色背景
- 激活状态：蓝色背景 + 白色文字
- 通过状态（pass）：绿色边框 + 绿色文字
- 失败状态（fail）：红色边框 + 红色文字

### 13. 评测记录详情页面侧边栏按钮

**修改文件**：`templates/layout/html5.html`（第 2018-2068 行）

- 按钮间距：`8px`（增加间距）
- 按钮背景：蓝色 (#1890ff)
- 按钮文字：白色
- 圆角：`8px`
- 内边距：`10px 16px`
- 阴影效果：悬停时增强
- 悬停动画：上移 1px

### 14. 问题详情页元信息标签

**修改文件**：`templates/layout/html5.html`（第 1500-1525 行）

- 圆角：`border-radius: 6px !important`
- 背景：`#f1f5f9`（浅灰）
- 边框：`1px solid #e2e8f0`

### 15. 在线编辑模式面板标题样式

**修改文件**：`templates/layout/html5.html`

修复"自测"和"评测记录"标签页标题栏的颜色风格：

```css
/* 浅色模式 */
.scratchpad__panel-title {
  background: linear-gradient(135deg, #1890ff, #096dd9) !important;
  color: #ffffff !important;
  border-radius: 8px 8px 0 0 !important;
  box-shadow: 0 2px 8px rgba(24,144,255,0.2) !important;
}

/* 深色模式 */
.theme--dark .scratchpad__panel-title {
  background: linear-gradient(135deg, #1a1a2e, #16213e) !important;
  color: #e0e0e0 !important;
}
```

---

## 样式优先级注意事项

### 核心问题：样式优先级冲突

**问题现象**：在修改 `tag.page.styl` 文件中的深色模式标签样式后，页面显示没有变化。

**根本原因**：`html5.html` 模板文件中直接定义了内联 CSS 样式，这些样式的优先级高于外部 `.styl` 文件中的样式。

**高优先级样式文件**：`templates/layout/html5.html`

该文件在 `<style>` 标签中定义了完整的深色模式标签样式（约第 221-380 行），使用了高优先级选择器：
- `html.theme--dark .problem__tag-link`
- `body.theme--dark .problem__tag-link`
- `.theme--dark .problem__tag-link`

**低优先级样式文件**：`components/problem/tag.page.styl`

### 修改策略

#### 策略一：修改 html5.html（推荐）

直接修改 `templates/layout/html5.html` 文件中的内联样式，这是最直接有效的方式。

**优点**：
- 优先级最高，修改后立即生效
- 无需考虑其他文件的影响

**缺点**：
- 样式代码混杂在 HTML 模板中，维护性较差

#### 策略二：提高 tag.page.styl 的选择器优先级

在 `tag.page.styl` 中使用更高优先级的选择器，但这可能仍然无法覆盖 `html5.html` 中的 `!important` 声明。

### 样式优先级规则

按优先级从高到低排列：

1. **内联样式**（`style=""` 属性）
2. **ID 选择器**（`#element`）
3. **类选择器、伪类、属性选择器**（`.class`, `:hover`, `[attr]`）
4. **元素选择器**（`div`, `p`）
5. **通配符选择器**（`*`）

**特殊规则**：
- `!important` 声明会提升优先级
- 相同优先级时，后面定义的样式会覆盖前面的
- 内联样式始终优先于外部样式表

### 实践建议

1. **先检查 html5.html**：在修改任何 `.styl` 文件之前，先检查 `templates/layout/html5.html` 中是否已有相关样式定义。

2. **使用浏览器开发者工具**：通过浏览器的开发者工具（F12）检查元素的样式来源，确认哪个样式文件正在生效。

3. **统一修改位置**：建议将所有样式修改集中在 `html5.html` 中，避免在多个文件中重复定义。

4. **清理重复定义**：定期检查并清理 `tag.page.styl` 中被 `html5.html` 覆盖的样式，保持代码整洁。

---

## 按钮样式修改（重要）

### 关键选择器

**讨论区使用的收藏/锁定按钮**：
- `<button class="star">` - 讨论区收藏主题按钮
- `<button class="star">` - 讨论区锁定主题按钮

**问题列表使用的收藏按钮**：
- `[data-star]` 属性
- `[data-star-action]` 属性

### 排除规则

在定义蓝色按钮样式时，必须排除这些元素：

```css
button:not(.star):not([data-star]):not([data-star-action])
```

### 恢复原始样式

添加规则恢复收藏按钮的原始样式：

```css
.star,
[data-star],
[data-star-action],
.star *,
[data-star] *,
[data-star-action] *,
.col--problem-name button:not(.problem__tag-link),
.col--problem-name a:not(.problem__tag-link),
.col--problem-name button.link,
.col--problem-name button.link:hover,
.col--problem-name button.link:active,
.col--problem-name button.link:focus {
  background: transparent !important;
  border: none !important;
  color: inherit !important;
  box-shadow: none !important;
}
```

### 蓝色按钮应用范围

以下按钮会被修改为蓝色（#1890ff）：
- `button.btn-primary` - 主要按钮
- `button[type="submit"]` - 提交按钮
- `.section__tools button` - 工具栏按钮
- `.toolbar button` - 工具栏按钮

---

## 标签样式修改

### 解决方案

1. **在通用按钮规则中排除标签链接**：
```css
button:not(.problem__tag-link)
```

2. **为标签链接单独保留边框样式**：
```css
.problem__tag-link {
  border-radius: inherit !important;
}
```

3. **浅色模式标签边框必须显式定义**：
```css
html:not(.theme--dark) .problem__tag-link {
  border: 1px solid currentColor !important;
}
```

### 标签样式规范

**浅色模式和深色模式标签样式一致**：
- 背景：浅色（如 #FFF0F6）
- 文字：深色（如 #EB2F96）
- 边框：与文字颜色一致
- 圆角：14px

---

## 常见标签样式映射

| 标签类型 | 浅色背景 | 深色文字/边框 | 圆角 |
|---------|---------|--------------|------|
| 动态规划 | #E6F7FF | #1890FF | 14px |
| 贪心 | #F6FFED | #52C41A | 14px |
| 树结构 | #F6FFED | #389E0D | 14px |
| 图结构 | #F9F0FF | #722ED1 | 14px |
| 数据结构 | #E6F7FF | #1890FF | 14px |
| 数学 | #E6FFFB | #13C2C2 | 14px |
| 字符串 | #FFF0F6 | #EB2F96 | 14px |
| 搜索 | #FFF7E6 | #FA8C16 | 14px |
| 递推/递归 | #FFF7E6 | #FA8C16 | 14px |
| 数组 | #FFF0F6 | #EB2F96 | 14px |
| 分治 | #FFF0F5 | #EB2F96 | 14px |
| 回溯 | #F5F5F5 | #8C8C8C | 14px |
| 分支问题 | #F6FFED | #73D13D | 14px |
| 循环 | #E6F7FF | #1890FF | 14px |
| 结构体 | #FFF7E6 | #FA8C16 | 14px |
| 容器 | #FFFBE6 | #FAAD14 | 14px |
| 数学与数论 | #F9F0FF | #9C27B0 | 14px |
| 基础算法技巧 | #F5F5F5 | #666666 | 14px |
| 竞赛CSP-J/S | #FFF2F0 | #FF4D4F | 14px |
| GESP | #F6FFED | #52C41A | 14px |
| 客观题 | #F5F5F5 | #666666 | 14px |

---

## Scratchpad 组件修改

### 问题预览和设置按钮
- **位置**：`components/scratchpad/index.tsx`
- **修改内容**：左侧 `scratchpad__tablist` 面板包含问题预览和设置两个图标按钮
- **样式**：现代圆角设计，悬停高亮效果

### Scratchpad 工具栏样式
- **位置**：`components/scratchpad/Toolbar.page.styl`
- **样式特点**：
  - 浅色模式：浅灰背景、白色按钮、蓝色激活状态
  - 深色模式：深灰背景、灰色按钮、蓝色高亮
  - 按钮悬停上移效果和发光阴影

### Scratchpad 问题内容区域
- **位置**：`templates/layout/html5.html`（第 1051-1253 行）
- **样式特点**：
  - 浅色模式：白色背景、圆角容器、柔和阴影
  - 深色模式：深灰背景、适配深色主题的文字颜色
  - 代码块：等宽字体、适当内边距

### 国际化翻译
- **位置**：`locales/zh.yaml`
- **新增翻译**：
  - `'Font size': '字体大小'`
  - `'Tab size': 'Tab大小'`
  - `'Open theme select': '打开主题选择'`

---

## 评测记录列表页面按钮

### 问题描述
评测记录列表页面的"重测"和"取消成绩"按钮被全局按钮样式覆盖，显示为蓝色背景。

### 解决方案

```css
.col--problem-name button.link,
.col--problem-name button.link:hover,
.col--problem-name button.link:active,
.col--problem-name button.link:focus {
  background: transparent !important;
  border: none !important;
  color: inherit !important;
  box-shadow: none !important;
}
```

---

## 收藏星星图标

### 当前状态
- **试题页面**：已修复，选中后显示黄色
- **题库页面**：保留原始状态

### 注意事项
- 星星图标样式不能使用 `*` 通配符，否则会影响文字颜色
- 只能针对 SVG 元素设置颜色：`svg` 和 `svg path`

---

## Markdown 表格自动合并功能

### 问题描述
Markdown 渲染的表格会自动合并相邻的相同值单元格（通过 rowspan/colspan 属性实现），导致表格显示不直观。

### 解决方案
- **位置**：`templates/layout/html5.html`
- **CSS 样式**：添加 `.typo table { border-collapse: collapse !important; }` 确保表格边框合并显示
- **JavaScript**：页面加载时自动查找并拆分所有带有 `rowspan` 或 `colspan` 属性的单元格

### 实现原理
1. 页面加载时自动查找所有 `.typo table`（`.typo` 是 Hydro OJ 中 Markdown 内容的标准类名）
2. 移除单元格的 `rowspan` 和 `colspan` 属性
3. 对于 `colspan > 1`：在当前行创建额外的单元格副本
4. 对于 `rowspan > 1`：在后续行的对应位置插入单元格副本
5. 添加 `MutationObserver` 监听 DOM 变化，确保动态加载的表格也能被处理
6. 使用 `table.dataset.mergeHandled` 标记防止重复处理同一个表格

### CSS 代码
```css
/* === 禁用 Markdown 表格单元格合并 === */
.typo table {
  border-collapse: collapse !important;
}

.typo table td[rowspan],
.typo table th[rowspan],
.typo table td[colspan],
.typo table th[colspan] {
  vertical-align: inherit !important;
}
```

### JavaScript 代码
```javascript
(function() {
  function disableTableMerge() {
    var tables = document.querySelectorAll('.typo table');
    tables.forEach(function(table) {
      if (table.dataset.mergeHandled) return;
      table.dataset.mergeHandled = 'true';
      
      var rows = Array.from(table.querySelectorAll('tr'));
      
      rows.forEach(function(row, rowIndex) {
        var cells = Array.from(row.querySelectorAll('td, th'));
        var cellsToAdd = [];
        
        cells.forEach(function(cell) {
          var rowspan = parseInt(cell.getAttribute('rowspan') || '1', 10);
          var colspan = parseInt(cell.getAttribute('colspan') || '1', 10);
          
          if (colspan > 1) {
            cell.removeAttribute('colspan');
            for (var i = 1; i < colspan; i++) {
              var newCell = document.createElement(cell.tagName);
              newCell.innerHTML = cell.innerHTML;
              newCell.className = cell.className;
              cellsToAdd.push(newCell);
            }
          }
          
          if (rowspan > 1) {
            cell.removeAttribute('rowspan');
            for (var r = 1; r < rowspan; r++) {
              var targetRow = rows[rowIndex + r];
              if (targetRow) {
                var newCell = document.createElement(cell.tagName);
                newCell.innerHTML = cell.innerHTML;
                newCell.className = cell.className;
                var insertIndex = Array.from(row.querySelectorAll('td, th')).indexOf(cell);
                targetRow.insertBefore(newCell, targetRow.children[insertIndex] || null);
              }
            }
          }
        });
        
        cellsToAdd.forEach(function(newCell) {
          row.appendChild(newCell);
        });
      });
    });
  }
  
  function initObserver() {
    disableTableMerge();
    
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach(function(node) {
            if (node.nodeType === 1) {
              if (node.classList && (node.classList.contains('typo') || node.querySelector('.typo'))) {
                disableTableMerge();
              }
            }
          });
        }
      });
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initObserver);
  } else {
    initObserver();
  }
})();
```

### 注意事项
- 此修改在 antd-beautify 文件夹内实现，不修改 packages/ui-default 源码
- 脚本会在 DOM 加载完成后立即执行，并持续监听 DOM 变化

---

## 文件差异总览

### templates/layout/html5.html
| 修改内容 | 位置（行号） |
|----------|--------------|
| 表格美化基础样式 | 102-119 |
| 深色模式表格样式 | 121-130 |
| 首页表格深色模式 | 132-155 |
| 首页排名表格修复 | 157-165 |
| 全局深色模式表头 | 167-173 |
| 排名页面表格修复 | 175-182 |
| 代码框美化（浅色模式） | 184-198 |
| 代码框美化（深色模式） | 200-214 |
| 全局过渡动画 | 216-219 |
| 按钮现代化美化 | 107-126 |
| 输入框样式 | 200-230 |
| 表格深色模式 | 232-264 |
| 代码框样式 | 266-304 |
| 深色模式标签样式 | 305-510 |
| 浅色模式标签样式 | 530-802 |
| 章节切换按钮样式 | 1099-1164 |
| 问题详情页元信息标签 | 1500-1525 |
| Markdown 表格禁用合并 | 2291-2309, 2350-2395 |

### components/problem/tag.page.styl
| 修改内容 | 位置（行号） |
|----------|--------------|
| 标签基础样式 | 1-66 |
| 动态规划标签配色 | 104-124 |
| 贪心标签配色 | 125-137 |
| 树结构标签配色 | 138-176 |
| 图结构标签配色 | 177-221 |
| 数据结构标签配色 | 222-297 |
| 容器标签配色 | 299-327 |
| 搜索算法标签配色 | 329-347 |
| 分治标签配色 | 349-364 |
| 数学与数论标签配色 | 366-414 |
| 基础算法技巧配色 | 416-435 |
| 字符串标签配色 | 437-467 |
| 递推/递归标签配色 | 469-477 |
| 数组类型标签配色 | 483-491 |
| 类型相关标签配色 | 493-516 |
| 竞赛等级标签配色 | 518-537 |
| 电子学会标签配色 | 566-569 |
| 模糊匹配兜底配色 | 571-597 |

---

## 目录结构

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
├── docs/
│   └── style-override-notes.md    # 样式覆盖注意事项（已整合到 README.md）
├── frontend/
│   └── code-button-beautify.page.ts
├── locales/
│   └── zh.yaml
├── templates/
│   ├── components/
│   │   └── problem.html
│   ├── layout/
│   │   └── html5.html             # 主布局样式
│   └── partials/
│       ├── footer.html
│       └── problem_list.html
├── index.ts
├── package.json
└── README.md
```

---

## 安装方法

1. 添加插件：
   ```bash
   hydrooj addon add /path/to/ui-default/addon/antd-beautify
   ```

2. 重启服务：
   ```bash
   hydrooj restart
   ```

3. 清除浏览器缓存：`Ctrl+F5`

---

## 更新日志

### v2.3.0 (2026-05)
- 🎨 添加代码框美化样式（浅色模式和深色模式）
- 🎨 修复首页排名表格列对齐问题
- 🎨 添加全局深色模式表格表头样式（训练、比赛、作业、评测记录、排名页面）
- 📝 更新 README 文档

### v2.2.0 (2025-05)
- 🎨 优化代码框工具栏按钮位置
- 📝 新增 `frontend/code-button-beautify.page.ts`
- 📝 完善 README 文档

### v2.1.0 (2024-04)
- 🎨 美化代码框工具栏按钮（Copy / 填充到自测）

### v2.0.0 (2024-04)
- ✨ 现代化卡片阴影与悬停上浮效果
- ✨ 按钮样式优化
- ✨ 导航栏美化
- ✨ 表单输入框美化
- ✨ 表格样式美化
- ✨ 统一全局过渡动画

### v1.0.0
- 🎨 问题标签按分类着色
- 🏷️ 标签悬停动画效果

---

## 许可证

MIT License