// 7-14 交换和
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1744596436660166659&page=0
var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

function switchSum(arr1, arr2) {
  const sum1 = arr1.reduce((t, c) => (t += c), 0),
    sum2 = arr2.reduce((t, c) => (t += c), 0),
    result = new Set();

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      let tempSum1 = sum1 - arr1[i] + arr2[j];
      let tempSum2 = sum2 + arr1[i] - arr2[j];
      if (tempSum1 === tempSum2) {
        const res = `${arr1[i]} ${arr2[j]}`;
        result.add(res);
      }
    }
  }

  return [...result].sort().toString().replace(',', '\n');
}

process.stdin.on('end', function () {
  const [param1, param2] = buf.split('\n');
  const arr1 = param1.split(' ').map(v => +v);
  const arr2 = param2.split(' ').map(v => +v);
  console.log(switchSum(arr1, arr2));
});
