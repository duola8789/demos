// 7-11 最小栈
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1744596436655972353&page=0

class MiniStack {
  constructor() {
    this.stack = [];
  }

  getMin() {
    return [...this.stack].sort((a, b) => a - b)[0];
  }

  push(val) {
    this.stack.push(val);
    return 'null';
  }

  pop() {
    this.stack.pop();
    return 'null';
  }

  top() {
    return this.stack[this.stack.length - 1];
  }
}

function fn(commands, params) {
  const miniStack = new MiniStack();
  const result = [];

  commands.forEach((command, index) => {
    result.push(miniStack[command](params[index]));
  });
  console.log(result.join(','));
}
