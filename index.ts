import { Context } from 'hydrooj';
import { join } from 'path';

export async function apply(ctx: Context) {
  ctx.i18n.load('zh', {
    "Ant Design Beautify": "Ant Design 风格美化",
    "Search": "搜索",
    "Search problems": "Search problems",
  });
  
  ctx.template.register('problem_main.html', join(__dirname, 'templates', 'problem_main.html'));
}