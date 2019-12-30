/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let arr = [[]];
  let add = (insert, index) => {
    
    arr.push(insert);
    for (let k = index + 1; k < nums.length; k++) {
      // insert.push(nums[k]);
      add([...insert, nums[k]], k);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    add([nums[i]], i)
  }
  return arr;
};

const test1 = [1, 2, 3];
console.log(subsets(test1))