// 7-3 删除无效的括号
// https://pintia.cn/problem-sets/1740639867689107456/exam/problems/type/7?problemSetProblemId=1740640113873649669&page=0
// https://leetcode.cn/problems/minimum-remove-to-make-valid-parentheses/description/
function fn(str) {
  const result = [],
    left = [],
    right = [];

  for (let i = 0; i < str.length; i++) {
    const cur = str[i];
    if (cur === '(') {
      left.push({ content: cur, index: i });
    } else if (cur === ')') {
      if (left.length > 0) {
        left.pop();
      } else {
        right.push({ content: cur, index: i });
      }
    }
  }

  const invalidIndex = [...left, ...right].map(v => v.index);

  for (let i = 0; i < str.length; i++) {
    if (!invalidIndex.includes(i)) {
      result.push(str[i]);
    }
  }

  return result.join('');
}

const str = 'a)())()';
console.log(fn(str));
