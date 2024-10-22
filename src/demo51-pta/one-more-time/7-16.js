// 7-16 向数组中追加 K 个整数
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1787357153419743234&page=0
// 重点：暴力法

function fn(nums, k) {
  const map = nums.reduce((total, current) => {
    total[current] = true;
    return total;
  }, {});
  let count = 0,
    start = 1,
    result = 0;

  while (count < k) {
    if (!map[start]) {
      count += 1;
      result += start;
    }
    start += 1;
  }
  return result;
}

const nums = [1, 4, 25, 10, 25],
  k = 2;
console.log(fn(nums, k));
