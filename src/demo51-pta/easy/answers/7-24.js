// 7-24 走格子问题
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1787357153423937543&page=0
function move(m, n) {
  if (m * n === 0) {
    return 0;
  }
  const dp = [];

  for (let i = 0; i < m; i++) {
    dp[i] = [];

    for (let j = 0; j < n; j++) {
      if (i * j === 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
}

var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end', function () {
  const [m, n] = buf.split(' ');
  console.log(move(+m, +n));
});
