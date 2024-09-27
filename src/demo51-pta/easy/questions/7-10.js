// 7-10 求最后一块石头的重量
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1740638633187987457&page=0
function fn(stones) {
  while (stones.length > 1) {
    stones = stones.sort((a, b) => b - a);
    const a = stones.shift(),
      b = stones.shift();
    const result = a - b;
    if (result !== 0) {
      stones.push(result);
    }
  }
  return stones[0] || 0;
}

const stones = [2, 7, 4, 1, 8, 1];
console.log(fn(stones));
