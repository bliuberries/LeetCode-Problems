var productExceptSelf = function (nums) {
  let arr = [], start = last = 1;
  for(let i = nums.length - 1; i >= 0; i--) {
    arr[i] = last;
    last *= nums[i];
  }
  for(let i = 0; i < nums.length; i++) {
    arr[i] *= start;
    start *= nums[i];
  }
  return arr;
};

const test1 = [1,2,3,4];
const test2 = [1,0];

console.log(productExceptSelf(test1))
console.log(productExceptSelf(test2))
