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

var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end', function () {
  const [param1, ...param2] = buf.split('\n');
  const arr = param2.reduce((total, current) => {
    total.push(current.split(' ').map(v => +v));
    return total;
  }, []);
  console.log(fn(arr));
});
