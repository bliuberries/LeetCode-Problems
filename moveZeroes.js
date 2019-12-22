var moveZeroes = function (nums) {  
  // for (let i = nums.length - 1; i >= 0; i--) {
  //   if (nums[i] === 0) {
  //     nums.splice(i, 1);
  //     nums.push(0);
  //   }
  // }
  for(let i = 1, a = 0; i < nums.length; i++) {
    if(nums[a] !== 0) {
    } else if (nums[a] ===0 && nums[i] === 0) {
      continue;
    } else {
      nums[a] = nums[i];
      nums[i] = 0;
    }
    a++;
  }
  return nums;
};

const test1 = [0, 1, 0, 3, 12];
const test2 = [0, 0, 1];
console.log(moveZeroes(test1));
console.log(moveZeroes(test2));