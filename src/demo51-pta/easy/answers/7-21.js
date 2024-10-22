// 7-21 去除重复字母
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1787357153423937539&page=0
function removeLetter(s) {
  const len = s.length;
  const countMap = {};
  const inStackMap = {};
  const stack = [];

  // afbecfcd
  for (let i = 0; i < len; i++) {
    const cur = s[i];
    if (!countMap[cur]) {
      countMap[cur] = 0;
    }
    countMap[cur] += 1;
  }

  for (let i = 0; i < len; i++) {
    const cur = s[i];
    countMap[cur] -= 1;

    if (inStackMap[cur]) {
      continue;
    }
    // 如果栈顶元素大于当前字符,并且栈顶元素后续还会重复出现,则弹出栈顶元素
    while (stack.length > 0 && stack[stack.length - 1] > cur) {
      if (countMap[stack[stack.length - 1]] === 0) {
        break;
      } else {
        inStackMap[stack.pop()] = false;
      }
    }

    stack.push(cur);
    inStackMap[cur] = true;
  }

  return stack.join('');
}

var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end', function () {
  console.log(removeLetter(buf));
});
