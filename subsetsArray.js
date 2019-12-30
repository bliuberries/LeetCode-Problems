/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let arr = [];
  let add = (insert, index) => {
    arr.push(insert);
    for (let k = index; k < nums.length; k++) {
      add([...insert, nums[k]], k + 1);
    }
  }
  add([], 0);
  return arr;
};

const test1 = [1, 2, 3];
console.log(subsets(test1))