var missingNumber = function(nums) {
  const mySet = new Set([...Array(nums.length).keys()]);
  for(let i = 0; i < nums.length; i++) {
    mySet.delete(nums[i])
  }
  return mySet.values();
};

const test1 = [3,0,1] // 2
const test2 = [9,6,4,2,3,5,7,0,1] // 8
console.log(missingNumber(test1))
console.log(missingNumber(test2))