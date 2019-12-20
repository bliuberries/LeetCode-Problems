var sortColors = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.unshift(0);
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 2) {
      nums.splice(i, 1);
      nums.push(2);
    }
  }
  return nums;
};

const test1 = [2, 0, 2, 1, 1, 0];
console.log(sortColors(test1)) //[0,0,1,1,2,2]