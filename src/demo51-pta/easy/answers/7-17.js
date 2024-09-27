// 7-17 背包能装的最大价值
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1787357153419743236&page=0
function maxValueOfBags(weights, values, size) {
  const temp = values
    .map((v, index) => ({
      weight: weights[index],
      value: v,
    }))
    .sort((a, b) => b.value / b.weight - a.value / a.weight);

  let remain = size;
  let result = 0;

  while (temp.length > 0 && remain > 0) {
    const cur = temp.shift();
    if (remain - cur.weight > 0) {
      remain -= cur.weight;
      result += cur.value;
    } else {
      const val = Math.floor(cur.value * (remain / cur.weight));
      result += val;
      break;
    }
  }

  return result;
}

var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end', function () {
  const [param1, param2, param3] = buf.split('\n');

  const [n, size] = param1.split(',').map(v => +v);
  const weights = param2.split(',').map(v => +v);
  const values = param3.split(',').map(v => +v);

  console.log(maxValueOfBags(weights, values, size));
});
