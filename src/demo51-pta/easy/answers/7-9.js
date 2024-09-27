// 7-9 无法吃午餐的学生数量
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1740638633187987456&page=0
var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

// function hungryStudents(students, sandwiches) {
//   let students0 = 0,
//     students1 = 0;
//   let i = 0;
//   while (i < students.length) {
//     const student = students[i];
//     if (student === 0) {
//       students0 += 1;
//     }
//     i += 1;
//   }
//   students1 = students.length - students0;
//   while (students0 > 0 || students1 > 0) {
//     const current = sandwiches[0];
//     if (current === 0 && students0 > 0) {
//       students0 -= 1;
//       sandwiches.shift();
//     } else if (current === 1 && students1 > 0) {
//       students1 -= 1;
//       sandwiches.shift();
//     } else {
//       break;
//     }
//   }
//   return students0 > 0 ? students0 : students1;
// }

function hungryStudents(students, sandwiches) {
  let newStudents = [];
  let i = 0;
  debugger;
  while (i < students.length) {
    const student = students[i],
      sandwich = sandwiches[0];
    if (student === sandwich) {
      sandwiches.shift();
    } else {
      newStudents.push(student);
    }
    i += 1;
    if (i === students.length) {
      if (students.length === newStudents.length) {
        break;
      } else {
        students = newStudents;
        newStudents = [];
        i = 0;
      }
    }
  }
  return newStudents.length;
}

process.stdin.on('end', function () {
  const [paramA, paramB] = buf.split('\n');
  const students = paramA.split(' ').map(v => +v);
  const sandwiches = paramB.split(' ').map(v => +v);
  console.log(hungryStudents(students, sandwiches));
});
