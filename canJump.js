var canJump = function (nums) {
  let jumps = 1;
  let travelOpportunities = (index, value) => {
    if (index + value >= nums.length - 1) {
      return;
    }
    let max = [index, 0];
    for (let i = index + 1; i <= index + value; i++) {
      if (nums[i] === 0) continue;
      if (nums[i] + i >= max[1] + max[0]) {
        max[1] = nums[i];
        max[0] = i;
      }
    }
    if (max[1] !== 0) {
      travelOpportunities(max[0], max[1]);
      jumps++;
    }
  }
  travelOpportunities(0, nums[0]);
  return jumps;
};

let test1 = [2, 3, 1, 1, 4];
let test2 = [3, 2, 1, 0, 4];
let test3 = [8, 2, 4, 4, 4, 9, 5, 2, 5, 8, 8, 0, 8, 6, 9, 1, 1, 6, 3, 5, 1, 2, 6, 6, 0, 4, 8, 6, 0, 3, 2, 8, 7, 6, 5, 1, 7, 0, 3, 4, 8, 3, 5, 9, 0, 4, 0, 1, 0, 5, 9, 2, 0, 7, 0, 2, 1, 0, 8, 2, 5, 1, 2, 3, 9, 7, 4, 7, 0, 0, 1, 8, 5, 6, 7, 5, 1, 9, 9, 3, 5, 0, 7, 5];
let test4 = [5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0];
let test5 = [4, 2, 0, 0, 1, 1, 4, 4, 4, 0, 4, 0];


console.log(canJump(test1));
console.log(canJump(test2));
console.log(canJump(test3));
console.log(canJump(test4));//false
console.log(canJump(test5));
// console.log(canJump(test5));
