function fn(x, a, b) {
  const max = Math.floor(x / a);
  let result = 0;

  for (let i = 0; i <= max; i++) {
    const remain = x - i * a;
    result += Math.floor(remain / b) + 1;
  }

  return result;
}

// var fs = require('fs');
// var buf = '';
//
// process.stdin.on('readable', function() {
//   var chunk = process.stdin.read();
//   if (chunk) buf += chunk.toString();
// });
//
//
// process.stdin.on('end', function () {
//   const [param1, param2, param3] = buf.split(',');
//   const x = +param1;
//   const a = +param2;
//   const b = +param3;
//   console.log(fn(x, a, b));
// });
