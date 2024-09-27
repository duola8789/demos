// 7-5 检测回文字符串
// 原题：https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1740638588686434304&page=0

function fn(str1, str2) {
  const map = new Map();
  for (let i = 0; i < str1.length; i++) {
    const cur1 = str1[i],
      cur2 = str2[i];
    if (map.get(cur1)) {
      if (map.get(cur1) !== cur2) {
        return '0';
      }
    } else {
      map.set(cur1, cur2);
    }
  }
  return '1';
}

console.log(fn('foo', 'bar'));
