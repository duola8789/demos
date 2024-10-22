// 7-13 删除有序链表中重复2次以上元素
// https://pintia.cn/problem-sets/1740639867689107456/exam/problems/type/7?problemSetProblemId=1787356096975228933&page=0
function fn(buf) {
  const lines = buf.split('\n');
  const [start, N] = lines[0].split(' ');
  const n = +N;
  const nodes = {};

  for (let i = 1; i <= n; i++) {
    const line = lines[i];
    const [address, value, next] = line.split(' ');

    nodes[address] = { address, value, next };
  }

  const result = [];

  let cur = nodes[start],
    queue = [];

  while (cur) {
    if (queue[0] && queue[0].value !== cur.value) {
      if (queue.length <= 2) {
        result.push(...queue);
      }
      queue = [];
    }
    queue.push(cur);
    cur = nodes[cur.next];
  }

  if (queue.length <= 2) {
    result.push(...queue);
  }

  const output = [];
  for (let i = 0; i < result.length; i++) {
    const { address, value } = result[i];
    const next = result[i + 1] ? result[i + 1].address : '-1';
    output.push({ address, value, next });
  }

  return output.reduce((total, current, index) => {
    const { address, value, next } = current;
    return `${total}${address} ${value} ${next}${index === result.length - 1 ? '' : '\n'}`;
  }, '');
}

const buf = `00100 10
99999 3 87654
87654 4 11111
55555 8 -1
44444 4 55555
23854 2 00000
11111 4 22222
00100 1 23854
22222 4 33333
00000 3 99999
33333 4 44444`;

console.log(fn(buf));
