/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  nums.unshift(...nums.splice(-(k % nums.length)));
};

let testArr1 = [1,2,3,4,5,6,7];
let testK1 = 3;
console.log(rotate(testArr1, testK1));