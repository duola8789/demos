// 7-22 根据字符出现频率排序
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1787357153423937540&page=0
function fn(str) {
  const countMap = [...str].reduce((total, current) => {
    if (!total[current]) {
      total[current] = 0;
    }
    total[current] += 1;
    return total;
  }, {});

  return [...str]
    .sort((a, b) => {
      if (countMap[a] !== countMap[b]) {
        return countMap[b] - countMap[a];
      }
      return a.charCodeAt(0) - b.charCodeAt(0);
    })
    .join('');
}

const str = 'tree';

console.log(fn(str));
