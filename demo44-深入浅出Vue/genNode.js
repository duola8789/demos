/**
 * Created by zh on 2020/6/23.
 */
export function genNode(node, state) {
  if (node.type === 1) {
    return genElement(node, state);
  }
  if (node.type === 3 && node.isComment) {
    return genComment(node);
  } else {
    return genText(node);
  }
}

export function genData(el, state) {
  let data = '{';
  if (el.key) {
    data += `key:${el.key}`;
  }
  if (el.ref) {
    data += `ref:${el.ref}`;
  }
  if (el.pre) {
    data += `pre:${el.pre}`;
  }
  // 还有很多类似的逻辑
  // ...
  data = data.replace(/.$/, '') + '}';
  return data;
}

export function genChildren(el, state) {
  const children = el.children;
  if (children.length) {
    return `[${children.map((c) => genNode(c, state)).join(',')}]`;
  }
}

export function genElement(el, state) {
  // plain 属性是在编译时发现的，如果节点没有属性 plain 为 true
  const data = el.plain ? undefined : genData(el, state);

  const children = genChildren(el, state);

  return `_c('${el.tag}'${data ? `,${data}` : ''}${children ? `,${children}` : ''})`;
}


export function genText(text) {
  // 如果是动态文本使用 expression，否则使用 JSON.stringify 为字符串额外包一层""
  return `_v(${type.type === 2 ? text.expression : JSON.stringify(text.text)})`;
}

export function genComment(comment) {
  return `_e(${JSON.stringify(comment.text)})`;
}
