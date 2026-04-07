# antd-beautify 插件

HydroOJ 的 Ant Design 风格美化插件，提供现代化的界面样式、标签颜色分类、主题切换和自定义页脚功能。

## 功能特性

### 1. 界面美化
- **Ant Design 风格**：采用 Ant Design 的设计元素和配色方案
- **圆角设计**：卡片、按钮等元素使用圆角设计，提升视觉体验
- **平滑过渡**：添加了平滑的过渡动画效果
- **统一样式**：按钮、输入框、表单等组件的统一美化

### 2. 标签系统优化
- **标签默认展开**：访问题库页面时标签自动显示，无需点击展开
- **标签颜色分类**：按照算法类型为标签分配不同颜色，便于识别
- **标签悬停效果**：鼠标悬停时标签变为蓝色，提升交互体验

### 3. 代码编辑器优化
- **工具栏美化**：美化 scratchpad 工具栏，采用 Ant Design 风格
- **设置按钮调整**：将设置按钮从左侧标签列表移动到顶部工具栏
- **工具栏布局**：优化工具栏的布局和样式

### 4. 主题切换功能
- **浅色/深色主题**：在页脚提供主题切换菜单
- **标准/兼容模式**：支持在标准模式和兼容模式之间切换
- **多语言支持**：支持界面语言切换

### 5. 自定义页脚
- **增强页脚布局**：优化页脚的布局和样式
- **系统信息显示**：显示系统信息和性能数据
- **额外内容支持**：支持额外的 HTML 内容注入

## 标签颜色分类

| 类别 | 颜色 | 包含标签 |
|------|------|----------|
| 动态规划 | 蓝色 | LCS、LIS、背包、单调性DP、环形DP、树形DP、状态压缩DP |
| 贪心 | 绿色 | 贪心 |
| 树结构 | 红色 | 最近公共祖先、生成树、次小生成树、DFS序列、树上倍增、树的分治、树链剖分、Link-Cut-Tree |
| 图结构 | 紫色 | Floyd、Dijkstra、SPFA、负权边、平面图、二分图、二分图匹配、最短路、差分约束、拓扑排序 |
| 数据结构 | 青色 | 栈、队列、链表、单调队列、并查集、堆、平衡树、线段树、树状数组、树套树、四分树、划分树、归并树、替罪羊树、左偏树、k-d树、块状链表、Hashing、函数式编程 |
| 递推 | 橙色 | 递推 |
| 递归 | 棕色 | 递归 |
| 容器 | 黄色 | map、vector、stack、deque、list |
| 其他 | 灰色 | 二分查找、三分查找、双指针扫描、分治、分块、RMQ、快速幂、排序、构造、打表、位运算、深度优先搜索、广度优先搜索、排列组合、迭代加深搜索、进制转换、NPC |
| 数组 | 粉色 | 一维数组、二维数组 |
| 字符串 | 青色 | 字符串、字符型 |
| 函数问题 | 绿色 | 函数问题、分支问题 |
| 循环 | 蓝色 | 简单循环、嵌套循环 |
| 结构体 | 紫色 | 结构体 |
| 哈希表 | 青色 | 哈希表 |
| 电子学会 | 蓝色 | 电子学会等级 |

## 技术实现

### 核心文件

1. **模板文件**
   - `templates/layout/html5.html` - 主布局模板，包含 Ant Design 样式和脚本
   - `templates/components/problem.html` - 问题组件模板，添加了标签的 data-tag 属性
   - `templates/partials/problem_list.html` - 问题列表模板，修改为默认展开标签
   - `templates/partials/footer.html` - 自定义页脚，包含主题切换功能

2. **组件文件**
   - `components/scratchpad/ScratchpadToolbarContainer.jsx` - 工具栏容器组件
   - `components/scratchpad/ToolbarComponent.jsx` - 工具栏组件
   - `components/scratchpad/Toolbar.page.styl` - 工具栏样式
   - `components/scratchpad/index.tsx` - 工具栏入口文件，移除了左侧设置按钮
   - `components/problem/tag.page.styl` - 标签样式

3. **本地化文件**
   - `locales/zh.yaml` - 中文翻译文件，包含插件相关的翻译

4. **配置文件**
   - `package.json` - 插件配置文件
   - `README.md` - 插件说明文档

### 实现方式

1. **界面美化**
   - 在 `html5.html` 中引入 Ant Design 的 CSS 和 JS 文件
   - 添加 Ant Design 风格的 CSS 样式定义
   - 使用 CSS 变量和过渡效果

2. **标签系统优化**
   - 在 `problem.html` 中为标签添加 `data-tag` 属性
   - 在 `html5.html` 中添加按标签内容分类的颜色样式
   - 在 `problem_list.html` 中移除 `hide-problem-tag` 类，使标签默认展开

3. **代码编辑器优化**
   - 修改 `ScratchpadToolbarContainer.jsx`，在工具栏末尾添加设置按钮
   - 修改 `index.tsx`，从左侧标签列表中移除设置按钮
   - 添加 `Toolbar.page.styl`，美化工具栏样式

4. **主题切换和页脚**
   - 添加 `footer.html`，包含主题切换菜单
   - 添加 `zh.yaml`，提供中文翻译

## 安装方法

1. **添加插件到 HydroOJ 系统**：
   ```bash
   hydrooj addon add /path/to/ui-default/addon/antd-beautify
   ```

2. **重启 HydroOJ 服务**：
   ```bash
   hydrooj restart
   # 或者
   pm2 restart hydrooj
   ```

3. **清除浏览器缓存**：
   在浏览器中按 Ctrl+F5 强制刷新页面，或者清除浏览器缓存后重新访问。

## 目录结构

```
antd-beautify/
├── components/
│   ├── problem/
│   │   └── tag.page.styl      # 标签样式
│   └── scratchpad/            # 代码编辑器工具栏
│       ├── ScratchpadToolbarContainer.jsx
│       ├── ToolbarComponent.jsx
│       ├── Toolbar.page.styl
│       └── index.tsx
├── locales/
│   └── zh.yaml                # 中文本地化文件
├── templates/
│   ├── components/
│   │   └── problem.html       # 问题组件模板
│   ├── layout/
│   │   └── html5.html         # 主布局模板
│   └── partials/
│       ├── footer.html        # 自定义页脚
│       └── problem_list.html  # 问题列表模板
├── package.json               # 插件配置文件
└── README.md                  # 插件说明文档
```

## 兼容性

- 兼容 HydroOJ 最新版本
- 支持主流浏览器：Chrome、Firefox、Safari、Edge
- 响应式设计，适配不同屏幕尺寸

## 整合说明

本插件整合了以下功能：
- **原始功能**：Ant Design 风格界面美化、标签系统优化、代码编辑器美化
- **整合功能**：主题切换、自定义页脚、本地化支持（来自 hydro-ui-enhancer）

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个插件！

## 许可证

MIT License
