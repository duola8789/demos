// 7-15 最长回文子串
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1744596436660166663&page=0
function test(str) {
  return str === [...str].reverse().join('');
}

function fn(str) {
  let result = str[0];
  for (let i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length; j++) {
      const current = str.slice(i, j + 1);
      if (test(current) && current.length > result.length) {
        result = current;
      }
    }
  }
  return result;
}

const str = 'zyrcbabd';
console.log(fn(str));
