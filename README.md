# antd-beautify 插件

HydroOJ 的 Ant Design 风格美化插件，提供了现代化的界面样式和标签颜色分类。

## 功能特性

### 1. 界面美化
- 采用 Ant Design 风格的设计元素
- 圆角卡片设计
- 按钮、输入框等组件的美化
- 平滑的过渡动画效果

### 2. 标签系统优化
- **标签默认展开**：访问题库页面时标签自动显示，无需点击展开
- **标签颜色分类**：按照算法类型为标签分配不同颜色，便于识别
- **标签悬停效果**：鼠标悬停时标签变为蓝色，提升交互体验

### 3. 代码编辑器优化
- 美化 scratchpad 工具栏
- 将设置按钮从左侧标签列表移动到顶部工具栏
- 工具栏按钮的 Ant Design 风格美化

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
├── templates/
│   ├── layout/
│   │   └── html5.html          # 美化的布局模板
│   ├── components/
│   │   └── problem.html        # 美化的问题组件
│   └── partials/
│       └── problem_list.html    # 美化的问题列表模板
├── components/
│   └── scratchpad/              # 美化的 scratchpad 组件
│       ├── ScratchpadToolbarContainer.jsx
│       ├── ToolbarComponent.jsx
│       ├── Toolbar.page.styl
│       └── index.tsx
├── package.json                 # 插件配置文件
└── README.md                    # 插件说明文档
```

## 技术实现

- **CSS 样式**：使用 Ant Design 风格的 CSS 变量和样式定义
- **标签颜色**：通过 data-tag 属性和 CSS 选择器实现按类型分类的颜色
- **模板覆盖**：使用 HydroOJ 的插件系统覆盖默认模板
- **热重载**：支持 HydroOJ 的热重载功能，修改后无需重启服务

## 兼容性

- 兼容 HydroOJ 最新版本
- 支持主流浏览器：Chrome、Firefox、Safari、Edge
- 响应式设计，适配不同屏幕尺寸

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个插件！

## 许可证

MIT License
