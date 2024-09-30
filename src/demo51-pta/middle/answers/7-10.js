// 7-10 验证栈序列
// https://pintia.cn/problem-sets/1740639867689107456/exam/problems/type/7?problemSetProblemId=1787356096975228928&page=0、
// https://leetcode.cn/problems/validate-stack-sequences/solutions/1785639/yan-zheng-zhan-xu-lie-by-leetcode-soluti-cql0/

function fn(pushed, popped) {
  const stack = [];

  for (let i = 0, j = 0; i < pushed.length; i++) {
    stack.push(pushed[i]);

    while (stack.length && stack[stack.length - 1] === popped[j]) {
      stack.pop();
      j++;
    }
  }

  return stack.length === 0;
}

const pushed1 = [1, 2, 3, 4, 5],
  popped1 = [4, 5, 3, 2, 1];
console.log(fn(pushed1, popped1)); // true

const pushed2 = [1, 2, 3, 4, 5],
  popped2 = [4, 3, 5, 1, 2];
console.log(fn(pushed2, popped2)); // true
