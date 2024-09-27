function fn(nums, lower, upper) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum <= upper && sum >= lower) {
        result.push(sum);
      }
    }
  }
  return result.length;
}

var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end', function () {
  const [param1, param2, param3] = buf.split('\n');
  const nums = param1.split(' ').map(v => +v);
  const lower = +param2;
  const upper = +param3;
  console.log(fn(nums, lower, upper));
});
