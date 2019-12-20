/*
Given two arrays of length m and n with digits 0-9 representing two numbers. Create the maximum number of length k <= m + n from digits of the two. The relative order of the digits from the same array must be preserved. Return an array of the k digits.

Note: You should try to optimize your time and space complexity.

Example 1:

Input:
nums1 = [3, 4, 6, 5]
nums2 = [9, 1, 2, 5, 8, 3]
k = 5
Output:
[9, 8, 6, 5, 3]
Example 2:

Input:
nums1 = [6, 7]
nums2 = [6, 0, 4]
k = 5
Output:
[6, 7, 6, 0, 4]
Example 3:

Input:
nums1 = [3, 9]
nums2 = [8, 9]
k = 3
Output:
[9, 8, 9]
*/

var maxNumber = function(arr1, arr2, k) {
  if(k > arr1.length + arr2.length) return null;
  let copy1 = arr1.slice();
  let copy2 = arr1.slice();
  let res = [];
  while(res.length < k) {
    res.push(0);
  }
  //determine the difference between k and shortest array
  let minorDiff = arr1.length < arr2.length ? k - arr1.length : k - arr2.length;
  //determine which array is longer
  let longerArr = arr1.length >= arr2.length ? arr1.length : arr2.length;
  //determine's first possible integer
  for(let i = 0; i <= longerArr - (minorDiff); i++) {   
    if(res[0] === 9) break;
    if(!!arr1[i]) {
      res[0] = res[0] < arr1[i] ? arr1[i] : res[0];
    }
    if(!!arr2[i]) {
      res[0] = res[0] < arr2[i] ? arr2[i] : res[0];
    }
  }
  
  const checkNextNumber = (indexOfPrev, p, arrr1, arrr2) => {
    let indexOne = arr1.indexOf(res[k - p]);
    let indexTwo = arr2.indexOf(res[k - p]);
    let pnp = 0;
    if(indexOne === -1) {

    } else if(indexTwo === -1) {

    } else if(indexOne === indexTwo) {

    } else {

    }
  }

  checkNextNumber(psp, k, copy1, copy2);
  console.log(minorDiff, longerArr);
  console.log(res);
  return res;
};

// let nums1 = [3, 8];
// let nums2 = [8, 1, 2, 5, 7 ,8 ,2 ,3, 3, 5, 6, 9, 9];
// let l = 5;
// 3, 13, 13 - 3 = 10, nums2[10] == 6 = potential starting point
// [8,8,8,9,9];

// let nums1 = [3, 4, 6, 5]
// let nums2 = [1, 9, 2, 5, 8, 3]
// let l = 8
// [9,8,6,5,3]
// 1

// let nums1 = [3, 4, 6, 5]
// let nums2 = [1, 9, 2, 5, 8, 3]
// let l = 5 > 4 > 3 > 2 > 1
//         9   8   6   5   3

// let nums1 = [3, 9]
// let nums2 = [8, 9]
// let l = 3

// let nums1 = [6,7,8,4];
// let nums2 = [6,7,9];
// let l = 7;

// let nums1 = [6, 7]
// let nums2 = [6, 0, 4]
// let l = 5


console.log(maxNumber(nums1, nums2, l));