const deepIterator = array => {
  return Array.isArray(array) ? [].concat.apply([],array.map(deepIterator)) : array;
}
let arr = [
  [1,2,3],
  4,
  [[5,6],7],
  [8,9]
]
console.log(deepIterator(arr)); //[1,2,3,4,5,6,7,8,9]