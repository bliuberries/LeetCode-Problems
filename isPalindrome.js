const isPalindrome = str => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true
}
const test1 = 'abcd';
const test2 = 'aca';
const test3 = 'sbbs';
console.log(isPalindrome(test1))
console.log(isPalindrome(test2))
console.log(isPalindrome(test3))
// const isPalindrome = x => {
//   let c = x.toString().split('');
//   for (let i = 0; i < c.length / 2; i++) {
//     if (c[i] != c[c.length - 1 - i]) return false;
//   }
//   return true;
// }

// console.log(isPalindrome(101));
// console.log(isPalindrome(-101));
// console.log(isPalindrome(11));
// console.log(isPalindrome(121));
// console.log(isPalindrome(10));
// console.log(isPalindrome(1));