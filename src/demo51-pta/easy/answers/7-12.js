// 7-12 字符串编辑距离
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1744596436660166657&page=0
var fs = require('fs');
var buf = '';

function editDistance(str1, str2) {
  const m = str1.length,
    n = str2.length,
    dp = [];

  if (m * n === 0) {
    return m + n;
  }

  for (let i = 0; i <= m; i++) {
    dp[i] = [];
    for (let j = 0; j <= n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = 0;
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1] + 1;
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] + 1;
      } else if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }

  return dp[m][n];
}

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end', function () {
  const [word1, word2] = buf.split(' ');
  console.log(editDistance(word1, word2));
});
