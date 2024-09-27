// 7-10 求最后一块石头的重量
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1740638633187987457&page=0
var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

function weightOfLastStone(stones) {
  stones.sort((a, b) => b - a);
  while (stones.length > 1) {
    const newVal = stones.shift() - stones.shift();
    for (let i = 2; i < stones.length - 1; i++) {
      const cur = stones[i];
      if (newVal >= cur) {
        stones.splice(i, 0, newVal);
        break;
      }
    }
  }
  return stones[0] || 0;
}

process.stdin.on('end', function () {
  const stones = buf.split(',');
  console.log(weightOfLastStone(stones));
});
