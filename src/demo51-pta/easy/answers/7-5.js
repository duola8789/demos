// 7-5 检测回文字符串
// 原题：https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1740638588686434304&page=0
function isIsomorphic(str1, str2) {
  const check = (s1, s2) => {
    const map = new Map();
    for (let i = 0; i < s1.length; i++) {
      const cur1 = s1[i],
        cur2 = s2[i];
      if (!map.get(cur1)) {
        map.set(cur1, cur2);
      } else if (map.get(cur1) !== cur2) {
        return false;
      }
    }
    return true;
  };

  return check(str1, str2) && check(str2, str1) ? 1 : 0;
}

var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end', function () {
  const [s1, s2] = buf.split(',');
  console.log(isIsomorphic(s1, s2));
});
