// 7-2 或运算的最小翻转次数
// https://pintia.cn/problem-sets/1740639867689107456/exam/problems/type/7?problemSetProblemId=1740640113873649664&page=0
function fn(a, b, c) {
  let a2 = a.toString(2),
    b2 = b.toString(2),
    c2 = c.toString(2);

  const len = Math.max(a2.length, b2.length, c2.length);

  a2 = a.toString(2).padStart(len, '0');
  b2 = b.toString(2).padStart(len, '0');
  c2 = c.toString(2).padStart(len, '0');

  let result = 0;
  for (let i = 0; i < c2.length; i++) {
    const curA = a2[i],
      curB = b2[i],
      curC = c2[i];
    if (+curC === 0) {
      if (+curB === 1) {
        result += 1;
      }
      if (+curA === 1) {
        result += 1;
      }
    } else {
      if (+curA === 0 && +curB === 0) {
        result += 1;
      }
    }
  }
  return result;
}

const a = 2,
  b = 6,
  c = 5;
console.log(fn(a, b, c));
