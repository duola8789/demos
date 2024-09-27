// 7-7 数字拆分求和
// 原题：https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1740638588686434306&page=0

function fn(n) {
  let result = 0,
    remain = n,
    targets = [5, 2, 1];

  while (remain > 0) {
    const target = targets.shift();
    const count = Math.floor(remain / target);
    remain -= target * count;
    result += count;
  }

  return result;
}

var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end', function () {
  console.log(fn(+buf));
});
