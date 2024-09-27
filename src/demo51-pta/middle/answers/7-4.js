// 7-4 钥匙和房间
// https://pintia.cn/problem-sets/1740639867689107456/exam/problems/type/7?problemSetProblemId=1740640113877843970&page=0

function fn(rooms) {
  const map = new Map(),
    queue = [...rooms[0]];

  map.set(0, true);

  while (queue.length > 0) {
    const key = queue.pop();

    if (!map.get(key)) {
      map.set(key, true);
      queue.push(...rooms[key]);
    }

    if (map.size === rooms.length) {
      return 'true';
    }
  }

  return map.size === rooms.length ? 'true' : 'false';
}

const rooms1 = [[1], [2], [3], []];
const rooms2 = [[1, 3], [3, 0, 1], [2], [0]];
console.log(fn(rooms1));
console.log(fn(rooms2));

var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end', function () {
  const params = buf.replace(/;/g, ',');
  const rooms = JSON.parse(params);
  console.log(fn(rooms));
});
