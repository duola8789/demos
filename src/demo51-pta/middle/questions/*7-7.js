// 7-7 连通网络的操作次数
// https://pintia.cn/problem-sets/1740639867689107456/exam/problems/type/7?problemSetProblemId=1740640149902721025&page=0
// https://leetcode.cn/problems/number-of-operations-to-make-network-connected/description/
// https://leetcode.cn/problems/number-of-operations-to-make-network-connected/solutions/101780/lian-tong-wang-luo-de-cao-zuo-ci-shu-by-leetcode-s/
function fn(n, connections) {}

const n1 = 4,
  connections1 = [
    [0, 1],
    [0, 2],
    [1, 2],
  ];
console.log(fn(n1, connections1));

const n2 = 6,
  connections2 = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 2],
  ];
console.log(fn(n2, connections2));
