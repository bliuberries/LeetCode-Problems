var maxProfit = function(prices) {
  let profit = 0;
  for(let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  // profit += currProfit;
  return profit;
};

const test1 = [7,1,5,3,6,4];
const test2 = [1,2,3,4,5];
const test3 = [7,6,4,3,1];
const test4 = [2,1,2,0,1];

console.log(maxProfit(test1))
console.log(maxProfit(test2))
console.log(maxProfit(test3))
console.log(maxProfit(test4));