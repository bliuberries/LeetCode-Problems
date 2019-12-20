var threeSum = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let k = i + 1; k < nums.length - 1; k++) {
      for (let j = k + 1; j < nums.length; j++) {
        if (nums[i] + nums[k] + nums[j] === 0) {
          let sum = [nums[i], nums[k], nums[j]].sort((a, b) => a - b);
          let check = function () {
            for (let l = 0; l < res.length; l++) {
              if (res[l].toString() === sum.toString()) return false;
            }
            res.push(sum)
          }();
        };
      };
    };
  };
  return res;
};

let array = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(array));