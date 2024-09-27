/**
 * Created by zh on 2020/6/22.
 */
export function parseText(text) {
  const tagRE = /\{\{((?:.|\n)+?)\}\}/g;
  if (!tagRE.test(text)) {
    return;
  }

  const tokens = [];
  let lastIndex = (tagRE.lastIndex = 0);
  let match, index;

  while ((match = tagRE.exec(text))) {
    index = match.index;

    // 先把 {{ 左边的文本添加到 tokens 中
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }

    // 把变量改为 _s(x) 的形式也添加到数组中
    tokens.push(`_s(${match[1].trim()})`);

    // 设置 lastIndex 来保证下一轮循环时，不会将已经添加过的文本重复添加到数组中
    lastIndex = index + match[0].length;
  }

  // 所有变量处理完毕后，如果最后一个变量右边还有文本，就将文本添加到数组中
  if (lastIndex > text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }

  return tokens.join('+');
}
