var maximumProduct = function(nums) {
  let a = b = c = -Infinity;
  let x = y = +Infinity;

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] > a) {
      c = b;
      b = a;
      a = nums[i];
    } else if (nums[i] > b) {
      c = b;
      b = nums[i];
    } else if (nums[i] > c) {
      c = nums[i]
    }
    if(nums[i] < x) {
      y = x;
      x = nums[i]
    } else if (nums[i] < y) {
      y = nums[i];
    }
  }
  return Math.max(a*b*c, a*x*y);
  // let s = nums.sort((a,b) => a - b), product;
  // if(s[0] * s[1] > s[s.length - 3] * s[s.length - 2]) {
  //   product = s[0] * s[1] * s[s.length - 1]
  // } else {
  //   product = s[s.length - 3] * s[s.length - 2] * s[s.length - 1]
  // }
  // return product;
};

const test1 = [1,2,3]; // 6
const test2 = [1,2,3,4]; // 24
const test3 = [-12, -10, 3, 5, 7] //840
console.log(maximumProduct(test1));
console.log(maximumProduct(test2));
console.log(maximumProduct(test3));