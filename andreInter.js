//determine palindrome
//
/*
input: string can contain multiple words && spaces
output: bool
constraints: letters && spaces // no using split
edge: empty string returns true
*/
//OICE output/input/constraints/edge

let palindrome = str => {
  str = str.trim();
  str = str.split(' ');
  str = str.reduce((a, b) => a + b);
  console.log(str);
  // str = str.join();
  for (let i = 0; i < str.length / 2; i++) {
    // console.log(str[i],'space' ,str[str.length - 1 - i]);
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

console.log(palindrome('race car')); //true

/*
input: any "random" string
output: boolean
constraints: there are spaces
edge: 0/1 letter = true
*/

const possiblePalindrome = str => {
  let oddInstances = 0;
  let copy = str.slice();
  copy = copy.split(' ');//array
  copy = copy.reduce((a, b) => a + b);//copying
  copy = copy.split('');//array
  copy = copy.sort();
  let container = {};
  for (let i = 0; i < copy.length; i++) {
    if (!container[copy[i]]) {
      container[copy[i]] = 1;
    } else {
      container[copy[i]]++;
    }
  }
  for (let k in container) {
    if (container[k] % 2 === 1) oddInstances++;
  }
  return oddInstances > 1 ? false : true;
}

console.log(possiblePalindrome('cat tacov')) //true