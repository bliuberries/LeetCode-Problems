var maxProfit = function(prices) {
  let profit = currProfit = 0;
  let buy = prices[0];
  for(let tomorrow = 1; tomorrow < prices.length; tomorrow++) {
    if(prices[tomorrow] < buy) {
      buy = prices[tomorrow];
      profit += currProfit;
      currProfit = 0;
    } else if (prices[tomorrow] - buy > currProfit) {
      currProfit = prices[tomorrow] - buy;
    } else {
      profit += currProfit;
      currProfit = 0;
      buy = prices[tomorrow];
    }
  }
  profit += currProfit;
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