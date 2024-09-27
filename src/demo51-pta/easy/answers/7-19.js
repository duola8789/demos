// 7-19 爬阶梯问题
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1787357153423937537&page=0
function stairs(num) {
  if (num <= 1) {
    return num;
  }
  const dp = [0, 1, 2];
  for (let i = 3; i <= num; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[num];
}

var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end', function () {
  const num = +buf;
  console.log(stairs(num).toString());
});
