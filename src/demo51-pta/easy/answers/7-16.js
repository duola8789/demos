// 7-16 向数组中追加 K 个整数
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1787357153419743234&page=0
var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

function insertToNums(nums, k) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = 1;
  }
  let sum = 0,
    start = 1,
    count = 0;
  while (count < k) {
    if (map[start]) {
      start += 1;
      continue;
    }

    count += 1;
    sum += start;
    start += 1;
  }

  return sum;
}

process.stdin.on('end', function () {
  const [param1, param2] = buf.split('\n');
  const nums = param1.split(' ');
  const k = +param2;
  console.log(insertToNums(nums, k));
});
