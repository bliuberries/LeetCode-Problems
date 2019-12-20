/*
given two arrays:
  [1,2,3]
  check if the second array has a *semi-perfect match* in accordance to the first array
  [4,1,9]
  
DAS([1,2,3], [4,1,9]) >> true
DAS([1,2,3], [9,1,4]) >> true
DAS([1,2,3], [9,1,1,4]) >> false
DAS([1,1,2], [1,4,4]) >> false
DAS([1,4,4], [1,4,4]) >> true

Complete in O(n)
*/

doubleArraySquared = (array1, array2) => {
  /*
  ! O(n^2)
  let squaredCopy = array2.slice();
  if(array1.length === array2.length) {
    for (let i in array1) {
      let squared = array1[i] * array1[i]
      if(squaredCopy.includes(squared)) {
        squaredCopy.splice(squaredCopy.indexOf(squared), 1);
      }

    }
    return squaredCopy.length === 0 ? true : false;
  } else {
    return false;
  }
*/
  if(array1.length !== array2.length) return false;
  array1.map((x) => Math.abs(x));
  array1.sort((a, b) => a-b);
  array2.sort((a, b) => a-b);

  for(let i in array1) {
    let squared = array1[i] * array1[i];
    if(squared !== array2[i]) {
      return false;
    }
  }
  return true;
}

console.log(doubleArraySquared([1,2,3], [1,4,9])) // true
console.log(doubleArraySquared([1,2,3], [4,1,9])) //true
console.log(doubleArraySquared([1,2,3], [9,4,1])) //true
console.log(doubleArraySquared([1,2,2], [1,4,4])) //true
console.log(doubleArraySquared([1,1,2], [1,4,4]))//false
console.log(doubleArraySquared([1,2,7], [49,4,1])) //true
console.log(doubleArraySquared([-1,-4, -5], [1, 16, 36])) //false
