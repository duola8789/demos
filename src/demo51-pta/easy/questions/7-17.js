// 7-17 背包能装的最大价值
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1787357153419743236&page=0
function fn(weights, values, size) {
  const arr = values
    .map((v, index) => ({
      value: v,
      weight: weights[index],
      density: v / weights[index],
    }))
    .sort((a, b) => b.density - a.density);

  const result = {
    remainSize: size,
    value: 0,
  };
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (result.remainSize <= 0) {
      return result.value;
    }
    if (result.remainSize >= current.weight) {
      result.value += current.value;
      result.remainSize -= current.weight;
    } else {
      result.value += Math.floor((result.remainSize / current.weight) * current.value);
      return result.value;
    }
  }
  return result.value;
}

const weights1 = [10, 20, 30],
  values1 = [60, 100, 120],
  size1 = 50;

console.log(fn(weights1, values1, size1));

const weights2 = [2, 8, 5, 2, 1],
  values2 = [4, 6, 3, 8, 2],
  size2 = 6;

console.log(fn(weights2, values2, size2));
