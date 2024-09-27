// 7-8 买票需要的时间
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1740638633183793152&page=0
var fs = require('fs');
var buf = '';

function buyTicket(tickets, k) {
  if (tickets.length === 0) {
    return 0;
  }
  let total = tickets[k];
  if (total <= 0) {
    return 0;
  }
  let i = 0;
  let result = 0;
  while (i < tickets.length) {
    if (tickets[i] > 0) {
      tickets[i] -= 1;
      result += 1;
    }
    if (tickets[i] === 0) {
      if (i === k) {
        return result;
      }
    }
    i += 1;
    if (i === tickets.length) {
      i = 0;
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
  console.log(buyTicket(tickets, k));
});
