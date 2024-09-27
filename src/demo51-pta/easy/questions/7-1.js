// 7-2 合作圈
// 原题：https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1740638588682240001&page=0
// 解法：https://leetcode.cn/problems/number-of-provinces/solutions/549895/sheng-fen-shu-liang-by-leetcode-solution-eyk0/

function findCircleNum(isConnected) {
  const cities = isConnected.length;
  const visitedMap = {};
  let result = 0;

  for (let i = 0; i < cities; i++) {
    if (!visitedMap[i]) {
      dfs(visitedMap, isConnected, cities, i);
      result += 1;
    }
  }

  return result;
}

function dfs(visitedMap, isConnected, cities, i) {
  for (let j = 0; j < cities; j++) {
    if (isConnected[i][j] === 1 && !visitedMap[j]) {
      visitedMap[j] = true;
      dfs(visitedMap, isConnected, cities, j);
    }
  }
}
