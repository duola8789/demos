// 7-11 最小栈
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1744596436655972353&page=0
var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

class MinStack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return [...this.stack].sort((a, b) => a - b)[0];
  }
}

process.stdin.on('end', function () {
  const [param1, param2] = buf.split('\n');
  const process = param1.split(',');
  const params = param2.split(',');

  const minStack = new MinStack();
  const result = [];

  process.forEach((v, index) => {
    const param = params[index];
    const res = minStack[v](param);
    result.push(res === undefined ? 'null' : res);
  });
  console.log(result.toString());
});
