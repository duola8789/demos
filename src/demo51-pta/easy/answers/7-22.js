// 7-22 根据字符出现频率排序
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1787357153423937540&page=0
function sortByFrequency(s) {
  const map = {};

  for (let i = 0; i < s.length; i++) {
    const curStr = s[i];
    if (map[curStr] === undefined) {
      map[curStr] = 0;
    }
    map[curStr] += 1;
  }

  return [...s].sort((a, b) => (map[b] === map[a] ? a.charCodeAt(0) - b.charCodeAt(0) : map[b] - map[a])).join('');
}

var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end', function () {
  console.log(sortByFrequency(buf));
});
