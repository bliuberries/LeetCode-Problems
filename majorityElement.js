var majorityElement = function (nums) {
  let count = {};
  for (let i of nums) {
    count[i] = count[i] + 1 || 1;
    if (count[i] > nums.length / 2) return i;
  }
};

const test1 = [3, 2, 3]; // 3
const test2 = [2, 2, 1, 1, 1, 2, 2]; // 2
console.log(majorityElement(test1));
console.log(majorityElement(test2));
