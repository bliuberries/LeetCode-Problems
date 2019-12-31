var findDuplicate = function(nums) {
  for(let i = 0; i < nums.length - 1; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] === nums[j]) return nums[j];
    }
  }
};

const test1 = [1,3,4,2,2];
const test2 = [3,1,3,4,2];
console.log(findDuplicate(test1));
console.log(findDuplicate(test2));