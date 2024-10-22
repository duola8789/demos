// 7-16 Call to your teacher
// https://pintia.cn/problem-sets/1740639867689107456/exam/problems/type/7?problemSetProblemId=1787356096979423233&page=0

function fn(n, list) {
  const vistited = {};
  const map = list.reduce((t, c) => {
    const [key, value] = c;
    if (!t[key]) {
      t[key] = [];
    }
    t[key].push(value);
    return t;
  }, {});

  let cur = 1;

  const queue = [1];

  while (queue.length > 0) {
    const cur = queue.shift();

    if (map[cur] && map[cur].includes(n)) {
      return 'Yes';
    }

    if (!vistited[cur]) {
      vistited[cur] = true;
      if (map[cur]) {
        queue.push(...map[cur]);
      }
    }
  }

  return 'No';
}

const str1 = `5 5
1 3
2 3
3 4
2 4
4 5`;
console.log(fn(str1) ? 'Yes' : 'No');

const str2 = `4 3
1 2
2 3
4 1`;
console.log(fn(str2) ? 'Yes' : 'No');
