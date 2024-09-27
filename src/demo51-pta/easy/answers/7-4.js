// 7-4 检测回文字符串
// 原题：https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1740638588686434304&page=0

function isPalindrome(str) {
  const newStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  if (newStr.length < 2) {
    return 1;
  }
  let left = 0,
    right = newStr.length - 1;
  while (left < right) {
    if (newStr[left] !== newStr[right]) {
      return 0;
    }
    left += 1;
    right -= 1;
  }
  return 1;
}

var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end', function () {
  console.log(isPalindrome(buf));
});
