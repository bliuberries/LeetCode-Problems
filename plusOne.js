/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if(digits[i] + 1 < 10) {
      digits[i] += 1;
      break;
    } else if(i > 0) {
      digits[i] = 0;
    } else if(digits[i] + 1 > 9) {
      digits[i] = 0;
      digits.unshift(1);
    }
  }
  return digits;
};

const test1 = [2, 2, 1]; // [2,2,2]
const test2 = [1, 9]; // [2, 0]
const test3 = [9,9];

console.log(plusOne(test1));
console.log(plusOne(test2));
console.log(plusOne(test3));