// 7-13 给定数字组成最大时间
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1744596436660166658&page=0

function fn(arr) {
  const all = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j === i) {
        continue;
      }
      for (let m = 0; m < arr.length; m++) {
        if (m === i || m === j) {
          continue;
        }
        for (let n = 0; n < arr.length; n++) {
          if (n === m || n === i || n === j) {
            continue;
          }
          all.push(`${arr[i]}${arr[j]}${arr[m]}${arr[n]}`);
        }
      }
    }
  }

  const aValid = num => num >= 0 && num <= 2;
  const bValid = [num => num >= 0 && num <= 9, num => num >= 0 && num <= 9, num => num >= 0 && num <= 3];
  const cValid = num => num >= 0 && num <= 5;
  const dValid = num => num >= 0 && num <= 9;

  const target = all
    .sort((a, b) => +b - +a)
    .find(v => {
      const [a, b, c, d] = [...v];
      if (!aValid(a)) {
        return false;
      }
      if (!bValid[a](b)) {
        return false;
      }
      if (!cValid(c)) {
        return false;
      }

      return dValid(d);
    });

  if (!target) {
    return '';
  }
  const result = [...target];
  result.splice(2, 0, ':');
  return result.join('');
}

const arr = [4, 2, 3, 1];
console.log(fn(arr));
