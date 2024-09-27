// 7-4 检测回文字符串
// 原题：https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1740638588686434304&page=0

function fn(str) {
  const strNew = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return strNew === [...strNew].reverse().join('') ? '1' : '0';
}

console.log(fn('A man, a plan, a canal: Panama'));
console.log(fn('race a car'));
