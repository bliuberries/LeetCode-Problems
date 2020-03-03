/**
 * given a list of numbers and a sum, find two numbers that make that sum
 * 
 */

let findPair = (nums, target) => {
  // //assuming nums is sorted
  // let low = 0;
  // let high = nums.length - 1;
  // while(low < high) {
  //   let sum = nums[low] + nums[high];
  //   if(sum > target) {
  //     high--;
  //   } else if(sum < target) {
  //     low++;
  //   } else if (sum === target) {
  //     return true;
  //   }
  // }

  //if not sorted
  let set = new Set();
  for(let i = 0; i < nums.length; i++) {
    if(!set.has(nums[i])) set.add(nums[i]);
    if(set.has(target - nums[i])) return true;
  }
  return false;
}

let test1 = [1, 2, 3, 9];
let test2 = [1, 2, 4, 4];
console.log(findPair(test1, 8))
console.log(findPair(test2, 8))