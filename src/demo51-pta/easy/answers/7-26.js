// 7-26 求两个数组的交集
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1787357153428131840&page=0
function fn(nums1, nums2) {
  const map = {};
  const set = new Set();
  for (let i = 0; i < nums1.length; i++) {
    map[nums1[i]] = true;
  }

  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]]) {
      set.add(nums2[i]);
    }
  }

  return [...set].sort((a, b) => a - b).join(',');
}

var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end', function () {
  const [param1, param2] = buf.split(';');
  const nums1 = param1.split(',').map(v => +v);
  const nums2 = param2.split(',').map(v => +v);
  console.log(fn(nums1, nums2));
});
