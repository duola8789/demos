// 7-9 跳跃距离
// hhttps://pintia.cn/problem-sets/1740639867689107456/exam/problems/type/7?problemSetProblemId=1787356096971034625&page=0

function fn(nums) {
  const visited = [];
  function dfs(i) {
    if (i === nums.length - 1) {
      return true;
    }
    if (visited[i] === true) {
      return false;
    }
    visited[i] = true;
    if (i < 0 || i > nums.length - 1) {
      return false;
    }
    return dfs(i + nums[i]) || dfs(i - nums[i]);
  }
  return dfs(nums[0]);
}

const nums1 = [2, 3, 1, 1, 4];
console.log(fn(nums1)); // true

const nums2 = [3, 2, 1, 0, 4];
console.log(fn(nums2)); // false
