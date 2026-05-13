import { Context } from 'hydrooj';

export async function apply(ctx: Context) {
  ctx.i18n.load('zh', {
    "Ant Design Beautify": "Ant Design 风格美化",
  });
}