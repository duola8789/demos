// 7-9 无法吃午餐的学生数量
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1740638633187987456&page=0
function fn(students, sandwiches) {
  let count = 0;
  while (students.length > 0 && count !== sandwiches.length) {
    const curStudent = students.shift(),
      curSandwich = sandwiches.shift();
    if (curStudent === curSandwich) {
      count = 0;
    } else {
      students.push(curStudent);
      sandwiches.unshift(curSandwich);
      count += 1;
    }
  }
  return students.length;
}

const students = [1, 1, 0, 0],
  sandwiches = [0, 1, 0, 1];
console.log(fn(students, sandwiches));
