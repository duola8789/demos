// 7-19 爬阶梯问题
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1787357153423937537&page=0
function fn(n) {
  if (n < 2) {
    return n;
  }

  const dp = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

const n = 3;

console.log(fn(n));
