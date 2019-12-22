var maxSubArray = function (nums) {
  let current = max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // current = current + nums[i];
    // if(nums[i] > current) current = nums[i];
    current = Math.max(current + nums[i], nums[i]);
    max = Math.max(max, current)
    // if (current > max) max = current;    
  }
  return max
};

const test1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; //6
const test2 = [1, 1, 1, 1, -3, 2, 1, 1, 1, -20, 5, 1, -3, 4] //7
const test3 = [1, 2];
const test4 = [2];
console.log(maxSubArray(test1));
console.log(maxSubArray(test2));
console.log(maxSubArray(test3));
console.log(maxSubArray(test4));