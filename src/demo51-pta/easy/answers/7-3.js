// 7-3 跳跃
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1740638588682240003&page=0

function jump(arr, start) {
  const visitedMap = {};

  const dfs = i => {
    if (visitedMap[i]) {
      return false;
    }
    visitedMap[i] = true;

    const cur = arr[i];
    if (cur === 0) {
      return true;
    }

    return dfs(i + cur) || dfs(i - cur);
  };

  return dfs(start) ? 'True' : 'False';
}

var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end', function () {
  const [p1, p2, p3] = buf.split('\n');
  const arr = p2.split(' ').map(v => +v);
  console.log(jump(arr, +p3));
});
