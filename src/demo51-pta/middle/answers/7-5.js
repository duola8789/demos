// 7-5 三数之和
// https://pintia.cn/problem-sets/1740639867689107456/exam/problems/type/7?problemSetProblemId=1740640149898526721&page=0
function fn(arr) {
  const sorted = arr.sort((a, b) => a - b);
  const map = new Map();

  let count = 0;

  for (let i = 0; i < sorted.length; i++) {
    const curVal = sorted[i];
    let left = i + 1,
      right = sorted.length - 1;

    while (left < right) {
      const leftVal = sorted[left],
        rightVal = sorted[right];
      const sum = curVal + leftVal + rightVal;

      if (sum === 0) {
        const key = `${leftVal}-${curVal}-${rightVal}`;
        if (!map.has(key)) {
          map.set(key, true);
          count += 1;
        }
        left += 1;
        right -= 1;
      } else if (sum > 0) {
        right -= 1;
      } else {
        left += 1;
      }
    }
  }

  return count;
}

const arr1 = [-1, 0, 1, 2, -1, -4];
console.log(fn(arr1));

const arr2 = [0, 1, 1];
console.log(fn(arr2));
