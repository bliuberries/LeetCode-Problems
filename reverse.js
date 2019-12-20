const reverse = x => {
  let c = Math.abs(x).toString().split('').reverse().join('');
  return c > 2147483648 ? 0 : c * Math.sign(x);
}

console.log(reverse(-510));