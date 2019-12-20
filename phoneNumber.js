const letterCombos = (digits) => {

  if (digits.length === 0) return [];
  let chars = ['abc', 'def', 'ghi','jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let strs = []
  digits.split('').map(e => {
    if (e < 10 || e > 1) { strs.push(chars[e-2].split('')) }
  })
  return strs.reduce((acc, val, idx) => {
    if(!idx) return val
    let arr = []
    acc.map(e => {
      val.map(v => {
        arr.push(e+v)
      })
    })
    return arr
  })



  let numberPad = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }

  let res = [];
  let addChar = (i = 0, str = '') => {
    if (str.length === digits.length) {
      res.push(str);
    } else {
      for (let k = 0; k < numberPad[digits[i]].length; k++) {
        str += numberPad[digits[i]][k];
        addChar(i + 1, str);
        str = str.slice(0, -1);
      }
    }
  } 
  addChar();
  return res;
}

let phoneNumber = '23456' // gj, gk, gl, hj, hk, hl, ij, ik, il
console.log(letterCombos(phoneNumber))

//go through digits, get numbers, get array, go through array, 