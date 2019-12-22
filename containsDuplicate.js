/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let hash = {};  
  for(let i of nums) {
    hash[i] = hash[i] + 1 || 1;
    if(hash[i] > 1) return true;
  }
  return false;
};