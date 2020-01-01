// var findDuplicate = function(nums) {
//   for(let i = 0; i < nums.length - 1; i++) {
//     for(let j = i + 1; j < nums.length; j++) {
//       if(nums[i] === nums[j]) return nums[j];
//     }
//   }
// };

var findDuplicate = function (nums) {
  let slow = nums[nums[0]];
  let fast = nums[nums[nums[0]]];
  while (slow !== fast){
    slow = nums[slow];
    fast = nums[nums[fast]];
  } 
  let ptr1 = nums[0];
  let ptr2 = slow;
  while (ptr1 !== ptr2) {
    ptr1 = nums[ptr1];
    ptr2 = nums[ptr2];
  }
  return ptr1;
};

const test1 = [1, 3, 4, 2, 2];
const test2 = [3, 1, 3, 4, 2];
console.log(findDuplicate(test1));
// console.log(findDuplicate(test2));