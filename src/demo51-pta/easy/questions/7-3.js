// 7-3 跳跃
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1740638588682240003&page=0

function fn(m, start) {
  const int = [];

  function _fn(m, start) {
    if (int[start]) {
      return false;
    }
    if (m[start] === 0) {
      return true;
    }
    int[start] = true;
    return _fn(m, start + m[start]) || _fn(m, start - m[start]);
  }

  return _fn(m, start) ? 'True' : 'False';
}

const m = [4, 2, 3, 0, 3, 1, 2],
  start = 5;
console.log(fn(m, start));
