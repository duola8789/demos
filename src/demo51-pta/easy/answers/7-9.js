// 7-9 无法吃午餐的学生数量
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1740638633187987456&page=0
// 关键点：要输出的是无法吃午餐的学生数量，不要用指针，用出栈入栈来实现
var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

function fn(stus, sands) {
  let visited = [];
  while (true) {
    const curStu = stus.shift();
    if (curStu === sands[0]) {
      sands.shift();
      stus.push(...visited);
      visited = [];
      if (stus.length === 0) {
        return 0;
      }
    } else {
      visited.push(curStu);
      if (stus.length === 0) {
        return visited.length;
      }
    }
  }
}

process.stdin.on('end', function () {
  const [paramA, paramB] = buf.split('\n');
  const students = paramA.split(' ').map(v => +v);
  const sandwiches = paramB.split(' ').map(v => +v);
  console.log(fn(students, sandwiches));
});
