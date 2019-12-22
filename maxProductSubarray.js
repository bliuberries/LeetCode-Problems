var maximumProduct = function(nums) {
  let s = nums.sort((a,b) => a - b), product;
  if(s[0] * s[1] > s[s.length - 3] * s[s.length - 2]) {
    product = s[0] * s[1] * s[s.length - 1]
  } else {
    product = s[s.length - 3] * s[s.length - 2] * s[s.length - 1]
  }
  return product;
};

const test1 = [1,2,3]; // 6
const test2 = [1,2,3,4]; // 24
const test3 = [-12, -10, 3, 5, 7] //840
console.log(maximumProduct(test1));
console.log(maximumProduct(test2));
console.log(maximumProduct(test3));