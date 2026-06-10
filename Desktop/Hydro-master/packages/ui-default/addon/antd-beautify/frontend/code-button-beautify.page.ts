import { addPage, NamedPage } from '@hydrooj/ui-default';

addPage(new NamedPage(['*'], async () => {
  const injectStyle = () => {
    const style = document.createElement('style');
    style.id = 'antd-beautify-tag-styles';
    style.textContent = `
      :root {
        --tag-bg-default: #f5f5f5 !important;
        --tag-border-default: #d9d9d9 !important;
        --tag-text-default: #595959 !important;
      }

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
        background-image: none !important;
      }

      html body .problem__tag-item:hover,
      html body .problem__tag-link:hover {
        text-decoration: none !important;
        filter: brightness(0.95) !important;
      }

      /* 灰色系标签 */
      html body .problem__tag-link[data-tag="月赛"],
      html body .problem__tag-link[data-tag="语法周赛"],
      html body .problem__tag-link[data-tag="模拟"],
      html body .problem__tag-link[data-tag="枚举"],
      html body .problem__tag-link[data-tag="暴力"],
      html body .problem__tag-link[data-tag="杂项"],
      html body .problem__tag-link[data-tag="其他"],
      html body .problem__tag-link[data-tag="基础问题"],
      html body .problem__tag-link[data-tag="拆数字"],
      html body .problem__tag-link[data-tag="函数问题"],
      html body .problem__tag-link[data-tag="输入输出语句"],
      html body .problem__tag-link[data-tag="客观题"] {
        background: #f5f5f5 !important;
        border-color: #d9d9d9 !important;
        color: #595959 !important;
        background-image: none !important;
      }

      /* 紫色系 - 图论 */
      html body .problem__tag-link[data-tag="图论"],
      html body .problem__tag-link[data-tag="图结构"],
      html body .problem__tag-link[data-tag="Floyd"],
      html body .problem__tag-link[data-tag="Dijkstra"],
      html body .problem__tag-link[data-tag="SPFA"],
      html body .problem__tag-link[data-tag="Tarjan"],
      html body .problem__tag-link[data-tag="二分图"],
      html body .problem__tag-link[data-tag="二分图匹配"],
      html body .problem__tag-link[data-tag="最短路"],
      html body .problem__tag-link[data-tag="拓扑排序"],
      html body .problem__tag-link[data-tag="差分约束"] {
        background: #f9f0ff !important;
        border-color: #b37feb !important;
        color: #531dab !important;
        background-image: none !important;
      }

      /* 粉色系 - 字符串 */
      html body .problem__tag-link[data-tag="字符串"],
      html body .problem__tag-link[data-tag="KMP"],
      html body .problem__tag-link[data-tag="Manacher"],
      html body .problem__tag-link[data-tag="后缀数组"],
      html body .problem__tag-link[data-tag="后缀自动机"],
      html body .problem__tag-link[data-tag="AC自动机"],
      html body .problem__tag-link[data-tag="Trie"],
      html body .problem__tag-link[data-tag="字符串哈希"] {
        background: #fff0f6 !important;
        border-color: #ffadd2 !important;
        color: #c41d7f !important;
        background-image: none !important;
      }

      /* 蓝色系 - 动态规划 */
      html body .problem__tag-link[data-tag="动态规划"],
      html body .problem__tag-link[data-tag="LCS"],
      html body .problem__tag-link[data-tag="LIS"],
      html body .problem__tag-link[data-tag="背包"],
      html body .problem__tag-link[data-tag="DP"],
      html body .problem__tag-link[data-tag="杜教筛"] {
        background: #e6f7ff !important;
        border-color: #91d5ff !important;
        color: #0050b3 !important;
        background-image: none !important;
      }

      /* 青色系 - 数据结构/数学 */
      html body .problem__tag-link[data-tag="数据结构"],
      html body .problem__tag-link[data-tag="栈"],
      html body .problem__tag-link[data-tag="队列"],
      html body .problem__tag-link[data-tag="链表"],
      html body .problem__tag-link[data-tag="单调队列"],
      html body .problem__tag-link[data-tag="并查集"],
      html body .problem__tag-link[data-tag="堆"],
      html body .problem__tag-link[data-tag="平衡树"],
      html body .problem__tag-link[data-tag="线段树"],
      html body .problem__tag-link[data-tag="树状数组"],
      html body .problem__tag-link[data-tag="树套树"],
      html body .problem__tag-link[data-tag="Hashing"],
      html body .problem__tag-link[data-tag="数学"],
      html body .problem__tag-link[data-tag="数学与数论"],
      html body .problem__tag-link[data-tag="快速幂"],
      html body .problem__tag-link[data-tag="排列组合"],
      html body .problem__tag-link[data-tag="位运算"],
      html body .problem__tag-link[data-tag="进制转换"],
      html body .problem__tag-link[data-tag="高斯消元"],
      html body .problem__tag-link[data-tag="矩阵"] {
        background: #e6fffb !important;
        border-color: #87e8de !important;
        color: #006d75 !important;
        background-image: none !important;
      }

      /* 橙色系 - 数论 */
      html body .problem__tag-link[data-tag="数论"],
      html body .problem__tag-link[data-tag="质数"],
      html body .problem__tag-link[data-tag="素数"],
      html body .problem__tag-link[data-tag="模运算"],
      html body .problem__tag-link[data-tag="组合数学"],
      html body .problem__tag-link[data-tag="快速数论变换"],
      html body .problem__tag-link[data-tag="NTT"],
      html body .problem__tag-link[data-tag="除法分块"],
      html body .problem__tag-link[data-tag="树上启发式合并"],
      html body .problem__tag-link[data-tag="笛卡尔树"] {
        background: #fff7e6 !important;
        border-color: #ffd591 !important;
        color: #d48806 !important;
        background-image: none !important;
      }

      /* 橙红色系 - 搜索 */
      html body .problem__tag-link[data-tag="搜索算法"],
      html body .problem__tag-link[data-tag="深度优先搜索"],
      html body .problem__tag-link[data-tag="广度优先搜索"],
      html body .problem__tag-link[data-tag="DFS"],
      html body .problem__tag-link[data-tag="BFS"],
      html body .problem__tag-link[data-tag="递推"],
      html body .problem__tag-link[data-tag="递归"] {
        background: #fff1f0 !important;
        border-color: #ffbb96 !important;
        color: #d4380d !important;
        background-image: none !important;
      }

      /* 绿色系 - 贪心/树结构 */
      html body .problem__tag-link[data-tag="贪心"],
      html body .problem__tag-link[data-tag="构造"],
      html body .problem__tag-link[data-tag="打表"],
      html body .problem__tag-link[data-tag="树结构"],
      html body .problem__tag-link[data-tag="最近公共祖先"],
      html body .problem__tag-link[data-tag="LCA"],
      html body .problem__tag-link[data-tag="生成树"],
      html body .problem__tag-link[data-tag="次小生成树"],
      html body .problem__tag-link[data-tag="DFS序列"],
      html body .problem__tag-link[data-tag="树上倍增"],
      html body .problem__tag-link[data-tag="树的分治"],
      html body .problem__tag-link[data-tag="树链剖分"],
      html body .problem__tag-link[data-tag="Link-Cut-Tree"],
      html body .problem__tag-link[data-tag="LCT"] {
        background: #f6ffed !important;
        border-color: #b7eb8f !important;
        color: #389e0d !important;
        background-image: none !important;
      }

      /* 蓝色系 - 分治 */
      html body .problem__tag-link[data-tag="分治"],
      html body .problem__tag-link[data-tag="分治与查询技术"],
      html body .problem__tag-link[data-tag="RMQ"],
      html body .problem__tag-link[data-tag="分块"],
      html body .problem__tag-link[data-tag="二分查找"],
      html body .problem__tag-link[data-tag="三分查找"],
      html body .problem__tag-link[data-tag="双指针扫描"],
      html body .problem__tag-link[data-tag="排序"] {
        background: #f0f5ff !important;
        border-color: #adc6ff !important;
        color: #1d39c4 !important;
        background-image: none !important;
      }

      /* 紫色系 - 莫比乌斯反演 */
      html body .problem__tag-link[data-tag="莫比乌斯反演"] {
        background: #fff0f6 !important;
        border-color: #ffadd2 !important;
        color: #c41d7f !important;
        background-image: none !important;
      }

      /* 竞赛等级标签 */
      html body .problem__tag-link[data-tag="GESP"] {
        background: #fffbe6 !important;
        border-color: #ffe58f !important;
        color: #d48806 !important;
        background-image: none !important;
      }

      html body .problem__tag-link[data-tag="CSP-J"] {
        background: #fff1f0 !important;
        border-color: #ffa39e !important;
        color: #cf1322 !important;
        background-image: none !important;
      }

      html body .problem__tag-link[data-tag="CSP-S"] {
        background: #fff7e6 !important;
        border-color: #ffd591 !important;
        color: #d48806 !important;
        background-image: none !important;
      }

      html body .problem__tag-link[data-tag="NOIP"] {
        background: #f9f0ff !important;
        border-color: #d3adf7 !important;
        color: #531dab !important;
        background-image: none !important;
      }

      /* 年份和难度标签 */
      html body .problem__tag-link[data-tag*="2019"],
      html body .problem__tag-link[data-tag*="2020"],
      html body .problem__tag-link[data-tag*="2021"],
      html body .problem__tag-link[data-tag*="2022"],
      html body .problem__tag-link[data-tag="A"],
      html body .problem__tag-link[data-tag="B"],
      html body .problem__tag-link[data-tag="C"],
      html body .problem__tag-link[data-tag="D"] {
        background: #f5f5f5 !important;
        border-color: #d9d9d9 !important;
        color: #595959 !important;
        background-image: none !important;
      }
    `;
    
    const existingStyle = document.getElementById('antd-beautify-tag-styles');
    if (existingStyle) {
      existingStyle.remove();
    }
    document.head.appendChild(style);
  };

  injectStyle();
  
  document.addEventListener('DOMContentLoaded', injectStyle);
  setTimeout(injectStyle, 100);
  setTimeout(injectStyle, 500);
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
