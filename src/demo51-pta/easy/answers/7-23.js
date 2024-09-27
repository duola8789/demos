// 7-23 压缩字符串
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1787357153423937542&page=0
function compactStr(str) {
  return str.replace(/(.)\1+/g, '$1');
}

var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end', function () {
  console.log(compactStr(buf).replace('\n', ''));
});
