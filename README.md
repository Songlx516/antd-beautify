# Antd-Beautify Plugin

HydroOJ 插件，为系统添加 Ant Design 风格的美化效果。

## 功能特性

### 搜索框美化
- 将搜索框移至侧边栏独立卡片中
- 现代化的圆角输入框设计
- 蓝色主题搜索按钮
- 支持浅色/深色模式自动切换

### 标签分类着色
- 动态规划 - 紫色系
- 贪心 - 橙色系
- 树结构 - 绿色系
- 图结构 - 蓝色系
- 搜索 - 青色系
- 数学 - 粉色系

### 按钮美化
- 现代化的蓝白风格按钮
- 悬停和点击动画效果

### 表格样式优化
- 深色模式下表头样式优化
- 代码框美化

### 全局过渡动画
- 平滑的页面过渡效果

## 安装方式

1. 将本目录放置于 `packages/ui-default/addon/` 目录下
2. 在 HydroOJ 管理后台启用插件
3. 重启 HydroOJ 服务

## 文件结构

```
antd-beautify/
├── index.ts              # 插件入口
├── README.md             # 说明文档
├── templates/
│   ├── layout/
│   │   └── html5.html    # 全局样式和布局
│   └── problem_main.html # 题库页面模板
├── components/
│   ├── problem/
│   │   └── tag.page.styl # 标签样式
│   └── scratchpad/       # 在线编辑器组件
└── locales/
    └── zh.yaml           # 中文翻译
```

## 使用说明

插件启用后自动生效，无需额外配置。

## 兼容性

- HydroOJ >= 2.0
- 支持现代浏览器（Chrome, Firefox, Safari, Edge）

## 许可证

MIT License
