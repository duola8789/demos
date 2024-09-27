// 7-18 合并 K 个升序链表
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1787357153419743237&page=0
function fn(lists) {
  return lists
    .reduce((total, current) => [...total, ...current], [])
    .sort((a, b) => a - b)
    .join(', ');
}

const lists = [
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
];
console.log(fn(lists));
