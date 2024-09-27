// 7-13 给定数字组成最大时间
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1744596436660166658&page=0
var fs = require('fs');
var buf = '';

function numberTime(arr) {
  let result = '',
    len = arr.length;

  const inRange = (number, min, max) => number >= min && number <= max;

  const verify = [
    number => inRange(+number, 0, 2),
    (number, firstNumber) => (+firstNumber === 2 ? inRange(+number, 0, 3) : inRange(+number, 0, 9)),
    number => inRange(+number, 0, 5),
    number => inRange(+number, 0, 9),
  ];

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (j === i) {
        continue;
      }
      for (let m = 0; m < len; m++) {
        if (m === i || m === j) {
          continue;
        }
        for (let n = 0; n < len; n++) {
          if (n === i || n === j || n === m) {
            continue;
          }
          const temp = `${arr[i]}${arr[j]}${arr[m]}${arr[n]}`;

          const valid = verify[0](arr[i]) && verify[1](arr[j], arr[i]) && verify[2](arr[m]) && verify[3](arr[n]);
          if (valid) {
            if (+temp > +result) {
              result = temp;
            }
          }
        }
      }
    }
  }

  return result ? `${result[0]}${result[1]}:${result[2]}${result[3]}` : '';
}

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end', function () {
  const arr = buf.split(',');
  console.log(numberTime(arr));
});
