import { addPage, NamedPage } from '@hydrooj/ui-default';

addPage(new NamedPage(['problem_detail', 'homework_detail_problem', 'contest_detail_problem', 'problem_list', 'training_detail', 'contest'], async () => {
  const style = document.createElement('style');
  style.textContent = `
    /* 星星图标选中状态 - 黄色 */
    html [data-star="1"],
    html [data-star="1"] *,
    html [data-star="true"],
    html [data-star="true"] *,
    html .star.selected,
    html .star.selected *,
    html .col--problem-name[data-star="1"],
    html .col--problem-name[data-star="1"] *,
    html .col--problem-name[data-star="true"],
    html .col--problem-name[data-star="true"] *,
    html table.data-table tbody tr td.col--problem-name[data-star="1"],
    html table.data-table tbody tr td.col--problem-name[data-star="1"] *,
    html table.data-table tbody tr td.col--problem-name[data-star="true"],
    html table.data-table tbody tr td.col--problem-name[data-star="true"] *,
    html [data-star="1"] svg,
    html [data-star="1"] svg *,
    html [data-star="true"] svg,
    html [data-star="true"] svg * {
      color: #fadb14 !important;
      fill: #fadb14 !important;
    }

    /* === dtoj.team 风格标签样式 - 圆角矩形按钮风格 === */
    html body .problem__tags {
      margin: 0 !important;
      padding: 0 !important;
      list-style: none !important;
      font-size: 0;
      word-break: keep-all;
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      align-items: center;
      line-height: 1;
    }

    html body .problem__tag {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      vertical-align: top !important;
      margin: 0 !important;
      padding: 0 !important;
    }

    html body .problem__tag-item,
    html body .problem__tag-link {
      padding: 4px 12px !important;
      margin-left: 0 !important;
      margin-bottom: 4px !important;
      margin-right: 4px !important;
      display: inline-flex !important;
      flex-direction: row !important;
      align-items: center !important;
      border: 1px solid #d9d9d9 !important;
      border-radius: 6px !important;
      font-size: 12px !important;
      font-weight: 500 !important;
      letter-spacing: 0.2px !important;
      line-height: 18px !important;
      max-width: 100% !important;
      min-height: 24px !important;
      min-width: auto !important;
      position: relative !important;
      background-color: #f5f5f5 !important;
      color: #5D6C7B !important;
      transition: all 150ms ease !important;
      box-shadow: none !important;
      height: auto !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      white-space: nowrap !important;
      text-decoration: none !important;
    }

    html body .problem__tag-item:hover,
    html body .problem__tag-link:hover {
      text-decoration: none !important;
      filter: brightness(0.95) !important;
    }

    /* 标签配色 - dtoj风格 */
    html body .problem__tag-item[data-tag="CSP-J"],
    html body .problem__tag-link[data-tag="CSP-J"] {
      background: #fff1f0 !important;
      border: 1px solid #ffa39e !important;
      color: #cf1322 !important;
    }
    html body .problem__tag-item[data-tag="CSP-S"],
    html body .problem__tag-link[data-tag="CSP-S"] {
      background: #fff7e6 !important;
      border: 1px solid #ffd591 !important;
      color: #d48806 !important;
    }
    html body .problem__tag-item[data-tag="NOIP"],
    html body .problem__tag-link[data-tag="NOIP"] {
      background: #f9f0ff !important;
      border: 1px solid #d3adf7 !important;
      color: #531dab !important;
    }
    html body .problem__tag-item[data-tag="GESP"],
    html body .problem__tag-link[data-tag="GESP"] {
      background: #fffbe6 !important;
      border: 1px solid #ffe58f !important;
      color: #d48806 !important;
    }
    html body .problem__tag-item[data-tag="贪心"],
    html body .problem__tag-link[data-tag="贪心"] {
      background: #f6ffed !important;
      border: 1px solid #b7eb8f !important;
      color: #389e0d !important;
    }
    html body .problem__tag-item[data-tag="动态规划"],
    html body .problem__tag-link[data-tag="动态规划"] {
      background: #e6f7ff !important;
      border: 1px solid #91d5ff !important;
      color: #0050b3 !important;
    }
    html body .problem__tag-item[data-tag="树结构"],
    html body .problem__tag-link[data-tag="树结构"] {
      background: #f6ffed !important;
      border: 1px solid #95de64 !important;
      color: #237804 !important;
    }
    html body .problem__tag-item[data-tag="图论"],
    html body .problem__tag-link[data-tag="图论"] {
      background: #f9f0ff !important;
      border: 1px solid #b37feb !important;
      color: #531dab !important;
    }
    html body .problem__tag-item[data-tag="数据结构"],
    html body .problem__tag-link[data-tag="数据结构"] {
      background: #e6fffb !important;
      border: 1px solid #87e8de !important;
      color: #006d75 !important;
    }
    html body .problem__tag-item[data-tag="数论"],
    html body .problem__tag-link[data-tag="数论"] {
      background: #fff7e6 !important;
      border: 1px solid #ffd591 !important;
      color: #d48806 !important;
    }
    html body .problem__tag-item[data-tag="搜索算法"],
    html body .problem__tag-link[data-tag="搜索算法"],
    html body .problem__tag-item[data-tag="深度优先搜索"],
    html body .problem__tag-link[data-tag="深度优先搜索"],
    html body .problem__tag-item[data-tag="广度优先搜索"],
    html body .problem__tag-link[data-tag="广度优先搜索"],
    html body .problem__tag-item[data-tag="DFS"],
    html body .problem__tag-link[data-tag="DFS"],
    html body .problem__tag-item[data-tag="BFS"],
    html body .problem__tag-link[data-tag="BFS"] {
      background: #fff1f0 !important;
      border: 1px solid #ffbb96 !important;
      color: #d4380d !important;
    }
    html body .problem__tag-item[data-tag="字符串"],
    html body .problem__tag-link[data-tag="字符串"] {
      background: #fff0f6 !important;
      border: 1px solid #ffadd2 !important;
      color: #c41d7f !important;
    }
    html body .problem__tag-item[data-tag="分治"],
    html body .problem__tag-link[data-tag="分治"],
    html body .problem__tag-item[data-tag="RMQ"],
    html body .problem__tag-link[data-tag="RMQ"],
    html body .problem__tag-item[data-tag="分块"],
    html body .problem__tag-link[data-tag="分块"] {
      background: #f0f5ff !important;
      border: 1px solid #adc6ff !important;
      color: #1d39c4 !important;
    }
    html body .problem__tag-item[data-tag="数学"],
    html body .problem__tag-link[data-tag="数学"],
    html body .problem__tag-item[data-tag="数学与数论"],
    html body .problem__tag-link[data-tag="数学与数论"],
    html body .problem__tag-item[data-tag="快速幂"],
    html body .problem__tag-link[data-tag="快速幂"],
    html body .problem__tag-item[data-tag="排列组合"],
    html body .problem__tag-link[data-tag="排列组合"],
    html body .problem__tag-item[data-tag="位运算"],
    html body .problem__tag-link[data-tag="位运算"],
    html body .problem__tag-item[data-tag="进制转换"],
    html body .problem__tag-link[data-tag="进制转换"] {
      background: #e6fffb !important;
      border: 1px solid #87e8de !important;
      color: #006d75 !important;
    }
    html body .problem__tag-item[data-tag="构造"],
    html body .problem__tag-link[data-tag="构造"],
    html body .problem__tag-item[data-tag="打表"],
    html body .problem__tag-link[data-tag="打表"] {
      background: #f6ffed !important;
      border: 1px solid #b7eb8f !important;
      color: #389e0d !important;
    }
    html body .problem__tag-item[data-tag="LCS"],
    html body .problem__tag-link[data-tag="LCS"],
    html body .problem__tag-item[data-tag="LIS"],
    html body .problem__tag-link[data-tag="LIS"],
    html body .problem__tag-item[data-tag="背包"],
    html body .problem__tag-link[data-tag="背包"],
    html body .problem__tag-item[data-tag="DP"],
    html body .problem__tag-link[data-tag="DP"] {
      background: #e6f7ff !important;
      border: 1px solid #91d5ff !important;
      color: #0050b3 !important;
    }
    html body .problem__tag-item[data-tag="最近公共祖先"],
    html body .problem__tag-link[data-tag="最近公共祖先"],
    html body .problem__tag-item[data-tag="LCA"],
    html body .problem__tag-link[data-tag="LCA"],
    html body .problem__tag-item[data-tag="生成树"],
    html body .problem__tag-link[data-tag="生成树"],
    html body .problem__tag-item[data-tag="次小生成树"],
    html body .problem__tag-link[data-tag="次小生成树"],
    html body .problem__tag-item[data-tag="DFS序列"],
    html body .problem__tag-link[data-tag="DFS序列"],
    html body .problem__tag-item[data-tag="树上倍增"],
    html body .problem__tag-link[data-tag="树上倍增"],
    html body .problem__tag-item[data-tag="树的分治"],
    html body .problem__tag-link[data-tag="树的分治"],
    html body .problem__tag-item[data-tag="树链剖分"],
    html body .problem__tag-link[data-tag="树链剖分"],
    html body .problem__tag-item[data-tag="Link-Cut-Tree"],
    html body .problem__tag-link[data-tag="Link-Cut-Tree"],
    html body .problem__tag-item[data-tag="LCT"],
    html body .problem__tag-link[data-tag="LCT"] {
      background: #f6ffed !important;
      border: 1px solid #95de64 !important;
      color: #237804 !important;
    }
    html body .problem__tag-item[data-tag="Floyd"],
    html body .problem__tag-link[data-tag="Floyd"],
    html body .problem__tag-item[data-tag="Dijkstra"],
    html body .problem__tag-link[data-tag="Dijkstra"],
    html body .problem__tag-item[data-tag="SPFA"],
    html body .problem__tag-link[data-tag="SPFA"],
    html body .problem__tag-item[data-tag="负权边"],
    html body .problem__tag-link[data-tag="负权边"],
    html body .problem__tag-item[data-tag="平面图"],
    html body .problem__tag-link[data-tag="平面图"],
    html body .problem__tag-item[data-tag="二分图"],
    html body .problem__tag-link[data-tag="二分图"],
    html body .problem__tag-item[data-tag="二分图匹配"],
    html body .problem__tag-link[data-tag="二分图匹配"],
    html body .problem__tag-item[data-tag="最短路"],
    html body .problem__tag-link[data-tag="最短路"],
    html body .problem__tag-item[data-tag="差分约束"],
    html body .problem__tag-link[data-tag="差分约束"],
    html body .problem__tag-item[data-tag="拓扑排序"],
    html body .problem__tag-link[data-tag="拓扑排序"] {
      background: #f9f0ff !important;
      border: 1px solid #b37feb !important;
      color: #531dab !important;
    }
    html body .problem__tag-item[data-tag="栈"],
    html body .problem__tag-link[data-tag="栈"],
    html body .problem__tag-item[data-tag="队列"],
    html body .problem__tag-link[data-tag="队列"],
    html body .problem__tag-item[data-tag="链表"],
    html body .problem__tag-link[data-tag="链表"],
    html body .problem__tag-item[data-tag="单调队列"],
    html body .problem__tag-link[data-tag="单调队列"],
    html body .problem__tag-item[data-tag="并查集"],
    html body .problem__tag-link[data-tag="并查集"],
    html body .problem__tag-item[data-tag="堆"],
    html body .problem__tag-link[data-tag="堆"],
    html body .problem__tag-item[data-tag="平衡树"],
    html body .problem__tag-link[data-tag="平衡树"],
    html body .problem__tag-item[data-tag="线段树"],
    html body .problem__tag-link[data-tag="线段树"],
    html body .problem__tag-item[data-tag="树状数组"],
    html body .problem__tag-link[data-tag="树状数组"],
    html body .problem__tag-item[data-tag="树套树"],
    html body .problem__tag-link[data-tag="树套树"],
    html body .problem__tag-item[data-tag="四分树"],
    html body .problem__tag-link[data-tag="四分树"],
    html body .problem__tag-item[data-tag="划分树"],
    html body .problem__tag-link[data-tag="划分树"],
    html body .problem__tag-item[data-tag="归并树"],
    html body .problem__tag-link[data-tag="归并树"],
    html body .problem__tag-item[data-tag="替罪羊树"],
    html body .problem__tag-link[data-tag="替罪羊树"],
    html body .problem__tag-item[data-tag="左偏树"],
    html body .problem__tag-link[data-tag="左偏树"],
    html body .problem__tag-item[data-tag="k-d树"],
    html body .problem__tag-link[data-tag="k-d树"],
    html body .problem__tag-item[data-tag="块状链表"],
    html body .problem__tag-link[data-tag="块状链表"],
    html body .problem__tag-item[data-tag="Hashing"],
    html body .problem__tag-link[data-tag="Hashing"] {
      background: #e6fffb !important;
      border: 1px solid #87e8de !important;
      color: #006d75 !important;
    }
    html body .problem__tag-item[data-tag="容器"],
    html body .problem__tag-link[data-tag="容器"],
    html body .problem__tag-item[data-tag="map"],
    html body .problem__tag-link[data-tag="map"],
    html body .problem__tag-item[data-tag="stack"],
    html body .problem__tag-link[data-tag="stack"],
    html body .problem__tag-item[data-tag="deque"],
    html body .problem__tag-link[data-tag="deque"],
    html body .problem__tag-item[data-tag="list"],
    html body .problem__tag-link[data-tag="list"],
    html body .problem__tag-item[data-tag="queue"],
    html body .problem__tag-link[data-tag="queue"],
    html body .problem__tag-item[data-tag="哈希表"],
    html body .problem__tag-link[data-tag="哈希表"] {
      background: #f5f5f5 !important;
      border: 1px solid #d9d9d9 !important;
      color: #595959 !important;
    }
    html body .problem__tag-item[data-tag="二分查找"],
    html body .problem__tag-link[data-tag="二分查找"],
    html body .problem__tag-item[data-tag="三分查找"],
    html body .problem__tag-link[data-tag="三分查找"],
    html body .problem__tag-item[data-tag="双指针扫描"],
    html body .problem__tag-link[data-tag="双指针扫描"],
    html body .problem__tag-item[data-tag="排序"],
    html body .problem__tag-link[data-tag="排序"] {
      background: #f0f5ff !important;
      border: 1px solid #adc6ff !important;
      color: #1d39c4 !important;
    }
    html body .problem__tag-item[data-tag="递推"],
    html body .problem__tag-link[data-tag="递推"],
    html body .problem__tag-item[data-tag="递归"],
    html body .problem__tag-link[data-tag="递归"] {
      background: #fff1f0 !important;
      border: 1px solid #ffa39e !important;
      color: #cf1322 !important;
    }
    html body .problem__tag-item[data-tag="输入输出语句"],
    html body .problem__tag-link[data-tag="输入输出语句"],
    html body .problem__tag-item[data-tag="一维数组"],
    html body .problem__tag-link[data-tag="一维数组"],
    html body .problem__tag-item[data-tag="二维数组"],
    html body .problem__tag-link[data-tag="二维数组"],
    html body .problem__tag-item[data-tag="字符型"],
    html body .problem__tag-link[data-tag="字符型"],
    html body .problem__tag-item[data-tag="分支问题"],
    html body .problem__tag-link[data-tag="分支问题"],
    html body .problem__tag-item[data-tag="函数问题"],
    html body .problem__tag-link[data-tag="函数问题"],
    html body .problem__tag-item[data-tag="结构体"],
    html body .problem__tag-link[data-tag="结构体"],
    html body .problem__tag-item[data-tag="简单循环"],
    html body .problem__tag-link[data-tag="简单循环"],
    html body .problem__tag-item[data-tag="嵌套循环"],
    html body .problem__tag-link[data-tag="嵌套循环"],
    html body .problem__tag-item[data-tag="拆数字"],
    html body .problem__tag-link[data-tag="拆数字"],
    html body .problem__tag-item[data-tag="基础问题"],
    html body .problem__tag-link[data-tag="基础问题"],
    html body .problem__tag-item[data-tag="客观题"],
    html body .problem__tag-link[data-tag="客观题"] {
      background: #f5f5f5 !important;
      border: 1px solid #d9d9d9 !important;
      color: #595959 !important;
    }
    html body .problem__tag-item[data-tag="模拟"],
    html body .problem__tag-link[data-tag="模拟"],
    html body .problem__tag-item[data-tag="枚举"],
    html body .problem__tag-link[data-tag="枚举"],
    html body .problem__tag-item[data-tag="暴力"],
    html body .problem__tag-link[data-tag="暴力"],
    html body .problem__tag-item[data-tag="杂项"],
    html body .problem__tag-link[data-tag="杂项"],
    html body .problem__tag-item[data-tag="月赛"],
    html body .problem__tag-link[data-tag="月赛"],
    html body .problem__tag-item[data-tag="语法周赛"],
    html body .problem__tag-link[data-tag="语法周赛"] {
      background: #f5f5f5 !important;
      border: 1px solid #d9d9d9 !important;
      color: #595959 !important;
    }

    /* 额外标签配色 */
    html body .problem__tag-item[data-tag="杜教筛"],
    html body .problem__tag-link[data-tag="杜教筛"] {
      background: #e6f7ff !important;
      border: 1px solid #91d5ff !important;
      color: #0050b3 !important;
    }
    html body .problem__tag-item[data-tag="莫比乌斯反演"],
    html body .problem__tag-link[data-tag="莫比乌斯反演"] {
      background: #fff0f6 !important;
      border: 1px solid #ffadd2 !important;
      color: #c41d7f !important;
    }
    html body .problem__tag-item[data-tag="除法分块"],
    html body .problem__tag-link[data-tag="除法分块"] {
      background: #f6ffed !important;
      border: 1px solid #b7eb8f !important;
      color: #389e0d !important;
    }
    html body .problem__tag-item[data-tag="Tarjan"],
    html body .problem__tag-link[data-tag="Tarjan"] {
      background: #f9f0ff !important;
      border: 1px solid #d3adf7 !important;
      color: #531dab !important;
    }
    html body .problem__tag-item[data-tag="树上启发式合并"],
    html body .problem__tag-link[data-tag="树上启发式合并"] {
      background: #fff7e6 !important;
      border: 1px solid #ffd591 !important;
      color: #d48806 !important;
    }
    html body .problem__tag-item[data-tag="笛卡尔树"],
    html body .problem__tag-link[data-tag="笛卡尔树"] {
      background: #fffbe6 !important;
      border: 1px solid #ffe58f !important;
      color: #d48806 !important;
    }
    html body .problem__tag-item[data-tag="后缀数组"],
    html body .problem__tag-link[data-tag="后缀数组"] {
      background: #fff0f6 !important;
      border: 1px solid #ffadd2 !important;
      color: #c41d7f !important;
    }
    html body .problem__tag-item[data-tag="快速数论变换"],
    html body .problem__tag-link[data-tag="快速数论变换"],
    html body .problem__tag-item[data-tag="NTT"],
    html body .problem__tag-link[data-tag="NTT"] {
      background: #fff7e6 !important;
      border: 1px solid #ffd591 !important;
      color: #d48806 !important;
    }

    /* 年份和难度标签 - 灰色系 */
    html body .problem__tag-item[data-tag*="2019"],
    html body .problem__tag-link[data-tag*="2019"],
    html body .problem__tag-item[data-tag*="2020"],
    html body .problem__tag-link[data-tag*="2020"],
    html body .problem__tag-item[data-tag*="2021"],
    html body .problem__tag-link[data-tag*="2021"],
    html body .problem__tag-item[data-tag*="2022"],
    html body .problem__tag-link[data-tag*="2022"],
    html body .problem__tag-item[data-tag="A"],
    html body .problem__tag-link[data-tag="A"],
    html body .problem__tag-item[data-tag="B"],
    html body .problem__tag-link[data-tag="B"],
    html body .problem__tag-item[data-tag="C"],
    html body .problem__tag-link[data-tag="C"],
    html body .problem__tag-item[data-tag="D"],
    html body .problem__tag-link[data-tag="D"] {
      background: #f5f5f5 !important;
      border: 1px solid #d9d9d9 !important;
      color: #595959 !important;
    }
  `;
  document.head.appendChild(style);
}));

addPage(new NamedPage(['problem_detail', 'homework_detail_problem', 'contest_detail_problem'], async () => {
  const style = document.createElement('style');
  style.textContent = `
    body .section.sample,
    body .problem-statement .sample,
    body .richmedia .sample {
      position: relative;
    }
    body .section.sample > pre > .toolbar,
    body .problem-statement .sample > pre > .toolbar,
    body .richmedia .sample > pre > .toolbar,
    body .section.sample > .toolbar,
    body .problem-statement .sample > .toolbar,
    body .richmedia .sample > .toolbar,
    html body .sample > pre > .toolbar,
    html body .sample > .toolbar {
      position: absolute !important;
      right: 15px !important;
      top: 20px !important;
      background: transparent !important;
      padding: 0 !important;
      gap: 12px !important;
      display: flex !important;
      align-items: center !important;
      opacity: 1 !important;
      z-index: 9999 !important;
      width: auto !important;
      margin: 0 !important;
      float: none !important;
    }
    body .toolbar .toolbar-item a,
    body .toolbar .toolbar-item.scratchpad-fill-button a {
      font-size: 12px !important;
      padding: 4px 14px !important;
      color: #1890ff !important;
      background: transparent !important;
      border: 1px solid #1890ff !important;
      border-radius: 4px !important;
      transition: all 0.2s ease !important;
      white-space: nowrap !important;
      box-shadow: none !important;
      min-height: 26px !important;
      min-width: 64px !important;
      line-height: 1.5 !important;
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      margin: 0 !important;
      font-family: inherit !important;
      font-weight: normal !important;
      text-decoration: none !important;
    }
    body .toolbar .toolbar-item a:hover,
    body .toolbar .toolbar-item.scratchpad-fill-button a:hover {
      color: #ffffff !important;
      background: #1890ff !important;
      border-color: #1890ff !important;
      box-shadow: 0 2px 8px rgba(24,144,255,0.3) !important;
      transform: translateY(-1px) !important;
    }
    body .toolbar .toolbar-item a:active,
    body .toolbar .toolbar-item.scratchpad-fill-button a:active {
      transform: translateY(0) !important;
      box-shadow: none !important;
    }
  `;
  document.head.appendChild(style);
}));
