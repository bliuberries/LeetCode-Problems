var maxProfit = function(prices) {
  let profit = 0;
  let lowest = prices[0];
  for(let tomorrow = 1; tomorrow < prices.length; tomorrow++) {
    if(prices[tomorrow] < lowest) {
      lowest = prices[tomorrow];
    } else if (prices[tomorrow] - lowest > profit) {
      profit = prices[tomorrow] - lowest
    }
  }
  // while(tomorrow < prices.length) {
  //   lowest = Math.min(lowest, prices[today]);
  //   highest = Math.max(lowest, prices[tomorrow]);
  //   profit = Math.max(profit, highest - lowest);
  //   today++;
  //   tomorrow++;
  // }
  return profit;
};

const test1 = [7,1,5,3,6,4];
const test2 = [7,6,4,3,1];
const test3 = [1,9,2,3,4,5,6];
const test4 = [2,3,4,5,6,7,1,9];
console.log(maxProfit(test1)); // 5
console.log(maxProfit(test2)); // 0
console.log(maxProfit(test3)); // 8
console.log(maxProfit(test4)); // 8