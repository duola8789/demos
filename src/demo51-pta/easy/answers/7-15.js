// 7-15 最长回文子串
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1744596436660166663&page=0
var fs = require('fs');
var buf = '';

function fn(str) {
  const dp = [],
    len = str.length;
  let result = '';

  if (len < 2) {
    return str;
  }

  for (let L = 2; L <= len; L++) {
    for (let i = 0; i < len; i++) {
      if (!dp[i]) {
        dp[i] = [];
      }

      let j = L + i - 1;
      if (j >= len) {
        break;
      }

      if (str[i] !== str[j]) {
        dp[i][j] = false;
      } else {
        if (j - i < 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      if (dp[i][j] && j - i + 1 > result.length) {
        result = str.slice(i, j + 1);
      }
    }
  }
  return result;
}

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end', function () {
  console.log(fn(buf));
});
