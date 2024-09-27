// 7-8 分段反转链表
// https://pintia.cn/problem-sets/1740639867689107456/exam/problems/type/7?problemSetProblemId=1740640149902721026&page=0

function revertList(nodes, start, k, n) {
  let cur = nodes.get(start),
    remain = n;
  const stack = [],
    queue = [];

  while (cur && remain >= k) {
    let i = 0;
    while (i < k) {
      stack.push(cur);
      cur = nodes.get(cur.next);
      i++;
    }
    while (stack.length) {
      const temp = stack.pop();
      queue.push(temp);
    }
    remain -= k;
  }

  while (cur) {
    queue.push(cur);
    cur = nodes.get(cur.next);
  }

  return queue;
}

function fn(inputStr) {
  const lines = inputStr.split('\n').filter(v => !!v);
  const [start, n, k] = lines[0].split(' ');
  const nodes = new Map();

  for (let i = 1; i <= +n; i++) {
    const [address, value, next] = lines[i].split(' ');
    nodes.set(address, { address, value, next });
  }

  const queue = revertList(nodes, start, +k, +n);

  const res = queue.reduce((total, cur, index) => {
    const { address, value } = cur || {};
    return `${total}${index !== 0 ? address + '\n' : ''}${address} ${value} `;
  }, '');

  console.log(res + '-1');
}

const str = '00100 6 4\n00000 4 99999\n00100 1 12309\n68237 6 -1\n33218 3 00000\n99999 5 68237\n12309 2 33218\n\n';

fn(str);
