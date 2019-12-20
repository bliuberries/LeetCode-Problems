const permute = nums => {
  const results = [];
  const helper = (perm, array) => {
    if(array.length === 0) {
      if(perm.length === nums.length) {
        let permutation = []
        for(let i of perm) permutation.push(i);
        results.push(permutation);
      }
      return;
    }
    for(let k = 0; k < array.length; k++) {
      perm.push(array[k])
      let copy = array.slice();
      copy.splice(k, 1);
      helper(perm, copy);
      perm.pop();
    }
  }
  for(let i = 0; i < nums.length; i++) {
    let copy = nums.slice();
    copy.splice(i, 1);
    helper([nums[i]], copy);
  }
  return results
}

function permutate(arr, num) {
  let copy = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= arr[i].length; j++) {
      n++;
      copy.push(arr[i].slice(0, j).concat([num]).concat(arr[i].slice(j)));
    }
  }
  return copy;
}
function permute(arr) {
  if (arr.length <= 1) return arr;
  let result = [[arr[0]]];
  for (let i = 1; i < arr.length; i++) {
    n++;
    result = permutate(result.slice(), arr[i]);
  }
  console.log('n ', n);
  return result;
}
var n = 0;

console.log(permute([]));

// console.log(permute([1, 2, 3,4]));