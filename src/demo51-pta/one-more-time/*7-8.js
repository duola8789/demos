// 7-8 买票需要的时间
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1740638633183793152&page=0
// 关键：不用指针来指示遍历到哪一个，因为有可能中间的某一个会被拿走，使用一个队列，不断的入队、出队来实现
function fn(tickets, k) {}
const tickets = [2, 3, 2],
  k = 2;
console.log(fn(tickets, k));
