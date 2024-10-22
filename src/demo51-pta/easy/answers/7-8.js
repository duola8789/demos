// 7-8 买票需要的时间
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1740638633183793152&page=0
// 关键：不用指针来指示遍历到哪一个，因为有可能中间的某一个会被拿走，使用一个队列，不断的入队、出队来实现
var fs = require('fs');
var buf = '';

function fn(tickets, k) {
  const targets = tickets.map((v, index) => ({
    isTarget: k === index,
    value: v,
  }));

  let result = 0;

  while (true) {
    const cur = targets.shift();
    cur.value -= 1;
    result += 1;

    if (cur.value === 0) {
      if (cur.isTarget) {
        return result;
      }
    } else {
      targets.push(cur);
    }
  }
}

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end', function () {
  const [paramA, paramB] = buf.split('\n');
  const tickets = paramA.split(' ').map(v => +v);
  const k = +paramB;
  console.log(fn(tickets, k));
});
