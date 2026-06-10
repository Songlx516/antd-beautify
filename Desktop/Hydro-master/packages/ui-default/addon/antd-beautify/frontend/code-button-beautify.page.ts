import { addPage, NamedPage } from '@hydrooj/ui-default';

addPage(new NamedPage(['problem_detail', 'homework_detail_problem', 'contest_detail_problem', 'problem_list'], async () => {
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
