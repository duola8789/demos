// 7-8 买票需要的时间
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1740638633183793152&page=0
function fn(tickets, k) {
  let i = 0,
    result = 0;
  while (i < tickets.length) {
    if (tickets[i] > 0) {
      tickets[i] -= 1;
      result += 1;
    }
    if (tickets[i] === 0 && i === k) {
      return result;
    }
    i += 1;
    if (i === tickets.length) {
      i = 0;
    }
  }
  return result;
}
const tickets = [2, 3, 2],
  k = 2;
console.log(fn(tickets, k));
