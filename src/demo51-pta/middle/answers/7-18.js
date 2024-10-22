// 7-18 连续数列
// https://pintia.cn/problem-sets/1740639867689107456/exam/problems/type/7?problemSetProblemId=1787356096979423235&page=0

function fn(str) {
  const nums = str.split(',').map(Number);
  const dp = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }

  return Math.max(...dp);
}

const buf = `-2,1,-3,4,-1,2,1,-5,4`;
console.log(fn(buf));
