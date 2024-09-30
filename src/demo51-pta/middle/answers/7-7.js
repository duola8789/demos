// 7-7 连通网络的操作次数
// https://pintia.cn/problem-sets/1740639867689107456/exam/problems/type/7?problemSetProblemId=1740640149902721025&page=0

function fn(n, connections) {
  if (connections.length < n - 1) {
    return -1;
  }
  const edges = new Map(),
    visited = [];

  for (const [x, y] of connections) {
    edges.get(x) ? edges.get(x).push(y) : edges.set(x, [y]);
    edges.get(y) ? edges.get(y).push(x) : edges.set(y, [x]);
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      count += 1;
      dfs(i);
    }
  }

  function dfs(u) {
    visited[u] = true;
    if (edges.get(u)) {
      for (const v of edges.get(u)) {
        if (!visited[v]) {
          dfs(v);
        }
      }
    }
  }

  return count - 1;
}

var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end', function () {
  const params = buf.split('\n');
  const param1 = params[0],
    param2 = params.slice(1);
  const n = +param1.split(' ')[0];
  const connections = param2.filter(v => !!v).map(v => v.split(' ').map(i => +i));
  console.log(fn(n, connections));
});
