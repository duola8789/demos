// 7-6 最小数
// https://pintia.cn/problem-sets/1740639867689107456/exam/problems/type/7?problemSetProblemId=1740640149898526722&page=0
function fn(nums) {
  const result = [];

  const negativeIndex = nums.findIndex(v => v < 0);
  if (negativeIndex > -1) {
    result.push(nums.splice(negativeIndex, 1)[0]);
    result.push(...nums.sort((a, b) => +`${b}${a}` - +`${a}${b}`));
  } else {
    result.push(...nums.sort((a, b) => +`${a}${b}` - +`${b}${a}`));
  }

  return result.join('');
}

const nums1 = [10, 2];
console.log(fn(nums1));

const nums2 = [3, 30, 34, 5, -9];
console.log(fn(nums2));
