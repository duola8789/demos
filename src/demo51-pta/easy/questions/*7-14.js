// 7-14 交换和
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1744596436660166659&page=0

function fn(arr1, arr2) {
  const result = [],
    set = new Set();
  const sum1 = arr1.reduce((total, current) => (total += current), 0),
    sum2 = arr2.reduce((total, current) => (total += current), 0);

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      const changedSum1 = sum1 - arr1[i] + arr2[j],
        changedSum2 = sum2 - arr2[j] + arr1[i];
      if (changedSum2 === changedSum1) {
        const item1 = Math.min(arr1[i], arr2[j]),
          item2 = Math.max(arr1[i], arr2[j]);
        const key = `${item1}-${item2}`;
        if (!set.has(key)) {
          set.add(key);
          result.push([item1, item2]);
        }
      }
    }
  }

  result
    .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
    .forEach(v => {
      console.log(v.join(' '));
    });
}

const arr1 = [4, 1, 2, 1, 1, 2],
  arr2 = [3, 6, 3, 3];
fn(arr1, arr2);

// const arr1 = [10, 20, 30, 40, 55],
//   arr2 = [60, 70, 5, 9, 99];
// console.log(fn(arr1, arr2));
