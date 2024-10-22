// 7-17 根据数字的补数排序
// https://pintia.cn/problem-sets/1740639867689107456/exam/problems/type/7?problemSetProblemId=1787356096979423234&page=0

function fn(str) {
  const arr = str.split(',').map(Number);
  const convertFn = number => {
    const binary = number
      .toString('2')
      .split('')
      .map(num => (+num === 0 ? 1 : 0))
      .join('');
    return parseInt(binary, 10);
  };
  return arr
    .sort((a, b) => {
      const valA = convertFn(+a);
      const valB = convertFn(+b);
      if (valA === valB) {
        return +a - +b;
      }
      return valA - valB;
    })
    .join(',');
}

const buf = `5,10,4,2`;
console.log(fn(buf));
