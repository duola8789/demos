// 7-12 存在重复元素3
// https://pintia.cn/problem-sets/1740639867689107456/exam/problems/type/7?problemSetProblemId=1787356096975228932&page=0
function fn(nums, indexDiff, valueDiff) {
  let i = 0,
    j = 1;

  while (j < nums.length) {
    while (Math.abs(j - i) <= indexDiff) {
      if (Math.abs(nums[j] - nums[i]) <= valueDiff) {
        return 1;
      }
      j++;
    }
    i += 1;
    j = i + 1;
  }
  return 0;
}

const nums = [1, 2, 3, 1],
  indexDiff = 2,
  valueDiff = 1;

console.log(fn(nums, indexDiff, valueDiff));

const nums2 = [1, 5, 9, 1, 5, 9],
  indexDiff2 = 2,
  valueDiff2 = 3;

console.log(fn(nums2, indexDiff2, valueDiff2));
