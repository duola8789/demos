// 7-24 走格子问题
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1787357153423937543&page=0
// 重点：转移方程是dp[i][j] = dp[i-1][j] + dp[i][j - 1];因为求的是有多少条走法，而不是需要多少步
function fn(m, n) {}

const m = 3,
  n = 3;

console.log(fn(m, n));
