/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  let strK = K.toString();
  let carry = 0, 
    i = strK.length - 1, 
    j = A.length - 1;
  while(i >= 0 || j >= 0) {
    let val1 = strK[i--] || 0;
    let val2 = A[j--] || 0;
    let sum = +val1 + val2 + carry;
    j + 1 >= 0 ? A[j + 1] = sum % 10 : A.unshift(sum % 10);
    carry = Math.trunc(sum / 10);
  }
  if(carry) A.unshift(carry);
  return A;
};

const test1a = [9,9,9,9,9];
const test1b = 1;
console.log(addToArrayForm(test1a, test1b));