// 7-6 数字拆分求和
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1740638588686434306&page=0

function fn(k) {
  const result = [];
  for (let i = 0; i < Math.ceil(k / 2); i++) {
    let sum = 0,
      gap = 0,
      temp = [];
    for (let j = 1; j < Infinity; j++) {
      if (sum >= k) {
        if (sum === k) {
          result.push(temp);
        }
        break;
      }
      const cur = i + gap;
      sum += cur;
      gap += j;
      temp.push(cur);
    }
  }
  return result;
}

const k = 55;
console.log(fn(k));
