// 7-15 字符串最长公共子序列
// https://pintia.cn/problem-sets/1740639867689107456/exam/problems/type/7?problemSetProblemId=1787356096979423232&page=0
// 【有道云笔记】算法基础09 算法图解.md https://note.youdao.com/s/OpIQUNxN
function fn(str1, str2) {
  let result = 0;

  const cell = [];

  for (let i = 0; i < str1.length; i++) {
    cell[i] = [];

    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        const lastCell = cell[i - 1] ? cell[i - 1][j - 1] || 0 : 0;
        cell[i][j] = lastCell + 1;

        result = Math.max(result, cell[i][j]);
      } else {
        const lastRowCell = cell[i - 1] ? cell[i - 1][j] || 0 : 0,
          lastColCell = cell[i] ? cell[i][j - 1] || 0 : 0;
        cell[i][j] = Math.max(lastColCell, lastRowCell);
      }
    }
  }

  return result;
}

const str11 = 'abcfbcab',
  str12 = 'bdcabdfcab';
console.log(fn(str11, str12)); // 6

const str21 = 'ABCBDAB',
  str22 = 'BDCAB';
console.log(fn(str21, str22)); // 4
