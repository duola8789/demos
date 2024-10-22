// 7-2 大山的数目
// 原题：https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1740638588682240002&page=1
// 解法：https://leetcode.cn/problems/number-of-islands/solutions/13103/dao-yu-shu-liang-by-leetcode/

function fn(arr) {
  let count = 0;
  function dfs(i, j) {
    arr[i][j] = 0;
    if (arr[i + 1] && +arr[i + 1][j] === 1) {
      dfs(i + 1, j);
    }
    if (arr[i - 1] && +arr[i - 1][j] === 1) {
      dfs(i - 1, j);
    }
    if (+arr[i][j + 1] === 1) {
      dfs(i, j + 1);
    }
    if (+arr[i][j - 1] === 1) {
      dfs(i, j - 1);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (+arr[i][j] === 1) {
        count += 1;
        dfs(i, j);
      }
    }
  }

  return count;
}

const matrix = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1],
];
console.log(fn(matrix));
