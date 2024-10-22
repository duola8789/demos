// 7-14 按格式重排链表
// https://pintia.cn/problem-sets/1740639867689107456/exam/problems/type/7?problemSetProblemId=1787356096975228934&page=0

function fn(buf) {
  const lines = buf.split('\n');
  const [start, N] = lines[0].split(' ');
  const nodes = {},
    n = +N,
    queue = [];

  for (let i = 1; i <= n; i++) {
    const [address, value, next] = lines[i].split(' ');
    nodes[address] = { address, value, next };
  }

  let cur = nodes[start];
  while (cur) {
    queue.push(cur);
    cur = nodes[cur.next];
  }

  const result = [];
  let left = 0,
    right = queue.length - 1;

  while (left <= right) {
    result.push(queue[right]);
    if (left !== right) {
      result.push(queue[left]);
    }
    left += 1;
    right -= 1;
  }

  for (let i = 0; i < result.length; i++) {
    result[i].next = result[i + 1] ? result[i + 1].address : '-1';
  }

  result.forEach(({ address, value, next }) => {
    console.log(`${address} ${value} ${next}`);
  });
}

const buf = `00100 6
00000 4 99999
00100 1 12309
68237 6 -1
33218 3 00000
99999 5 68237
12309 2 33218`;

fn(buf);
