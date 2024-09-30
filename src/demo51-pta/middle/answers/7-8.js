// 7-8 分段反转链表
// https://pintia.cn/problem-sets/1740639867689107456/exam/problems/type/7?problemSetProblemId=1740640149902721026&page=0
function revertList(start, nodes, n, k) {
  let cur = nodes[start],
    remain = n;
  const stack = [],
    queue = [];

  while (cur && remain >= k) {
    let i = 0;

    while (i < k) {
      stack.push(cur);
      cur = nodes[cur.next];
      i++;
    }
    while (stack.length) {
      queue.push(stack.pop());
    }

    remain -= k;
  }

  while (cur) {
    queue.push(cur);
    cur = nodes[cur.next];
  }

  return queue;
}

function fn(inputStr) {
  const lines = inputStr.split('\n').filter(Boolean);
  const [start, n, k] = lines[0].split(' ');
  const nodes = {};

  for (let i = 1; i <= n; i++) {
    const [address, value, next] = lines[i].split(' ');
    nodes[address] = { address, value, next };
  }

  const queue = revertList(start, nodes, +n, +k);

  const result = queue.reduce((prev, current, index) => {
    const { address, value } = current || {};
    return `${prev}${index !== 0 ? address + '\n' : ''}${address} ${value} `;
  }, '');

  console.log(result + '-1');
}

const str = '00100 6 4\n00000 4 99999\n00100 1 12309\n68237 6 -1\n33218 3 00000\n99999 5 68237\n12309 2 33218\n\n';

fn(str);
/*
00000 4 33218
33218 3 12309
12309 2 00100
00100 1 99999
99999 5 68237
68237 6 -1
 */
