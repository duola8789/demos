// 7-20 买卖股票的最佳时机
// https://pintia.cn/problem-sets/1740631898909958144/exam/problems/type/7?problemSetProblemId=1787357153423937538&page=0
function maxProfit(prices) {
  let min = prices[0],
    result = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i],
      lastPrice = prices[i - 1];

    if (currentPrice > lastPrice) {
      result = Math.max(result, currentPrice - min);
    } else {
      min = Math.min(currentPrice, min);
    }
  }

  return result;
}

var fs = require('fs');
var buf = '';

process.stdin.on('readable', function () {
  var chunk = process.stdin.read();
  if (chunk) buf += chunk.toString();
});

process.stdin.on('end', function () {
  const prices = buf.split(',').map(v => +v);
  console.log(maxProfit(prices));
});
