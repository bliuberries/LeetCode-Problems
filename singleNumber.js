//given a non-empty array of integers, every element appears twice but one. Find that single one.

var singleNumber = function (nums) {
  // let obj = {};
  // for(let i = 0; i < nums.length; i++) {
  //   if(obj[nums[i]] === undefined) {
  //     obj[nums[i]] = 1;
  //   } else {
  //     obj[nums[i]] += 1;
  //   }
  // }
  // for(let i in obj) {
  //   if(obj[i] === 1) return i
  // }
  var res = nums[0];
  for (var i = 1; i < nums.length; i++) {
    res = res ^ nums[i];
  }
  return res;
};

let test1 = [2, 2, 1];
let test2 = [4, 1, 2, 1, 2];

console.log(singleNumber(test1));
console.log(singleNumber(test2));