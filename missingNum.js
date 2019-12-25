var missingNumber = function(nums) {
  let sum1 = 0;
  let sum2 = nums.length * (nums.length + 1) / 2;
  for(let i = 0; i < nums.length; i++) {
    sum1 += nums[i]
  }
  return sum2 - sum1;
};

const test1 = [3,2,0] // 1
const test2 = [9,6,4,2,3,5,7,0,1] // 8
const test3 = [47,37,24,48,21,28,20,5,4,38,44,13,14,46,17,16,7,33,39,43,18,35,41,12,23,19,27,42,10,1,6,8,29,40,25,3,34,15,30,49,36,2,32,45,22,11,26,9,31];
console.log(missingNumber(test1));
console.log(missingNumber(test2));
console.log(missingNumber(test3));