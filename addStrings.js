var addStrings = function (num1, num2) {
  let carry = 0,
    result = '',
    n1 = num1.length - 1,
    n2 = num2.length - 1;
  while (n1 >= 0 || n2 >= 0) {
    const val1 = num1[n1--] || 0;
    const val2 = num2[n2--] || 0;
    const sum = +val1 + +val2 + carry;
    result = sum % 10 + result;
    carry = Math.trunc(sum / 10)
  }
  if (carry) result = carry + result;
  return result;
};

// console.log(addStrings('1', '2'));
console.log(addStrings("99999", "2"));