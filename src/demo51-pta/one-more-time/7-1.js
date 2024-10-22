// 7-1 连续的子数组和
// https://pintia.cn/problem-sets/1740639867689107456/exam/problems/type/7?problemSetProblemId=1740640113869455360
// 步骤
// 初始化一个哈希表 prefixSum，用于存储前缀和的余数及其对应的索引。
// 遍历数组 nums，计算当前前缀和 currentSum。
// 计算当前前缀和对 k 的余数 mod。
// 如果 mod 在哈希表中存在且当前索引与存储的索引差大于等于2，则返回1。
// 如果 mod 不在哈希表中，则将其存入哈希表。
// 如果遍历完数组没有找到符合条件的子数组，则返回0。

function fn(arr, k) {
  const map = new Map();
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    const mod = sum % k;
    if (map[mod] !== undefined) {
      if (i - map[mod] > 1) {
        return 1;
      }
    } else {
      map[mod] = i;
    }
  }
  return 0;
}

const arr = [23, 2, 4, 6, 7],
  k = 13;
console.log(fn(arr, k));
