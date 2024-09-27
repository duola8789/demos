// 7-21 去除重复字母
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1787357153423937539&page=0
function fn(str) {
  const countMap = [...str].reduce((total, current) => {
    if (!total[current]) {
      total[current] = 0;
    }
    total[current] += 1;
    return total;
  }, {});

  const inStackMap = {},
    resultStack = [];

  for (let i = 0; i < str.length; i++) {
    const cur = str[i];
    countMap[cur] -= 1;

    if (inStackMap[cur]) {
      continue;
    }

    while (resultStack.length > 0 && resultStack[resultStack.length - 1] > cur) {
      if (countMap[resultStack[resultStack.length - 1]] === 0) {
        break;
      }
      inStackMap[resultStack.pop()] = false;
    }

    resultStack.push(cur);
    inStackMap[cur] = true;
  }
  return resultStack.join('');
}

const str1 = 'abecbcd';
const str2 = 'cbacdcbc';
const str3 = 'bcabc'; // abc

console.log(fn(str1));
console.log(fn(str2));
console.log(fn(str3));
