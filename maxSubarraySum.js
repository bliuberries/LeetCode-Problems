/*
  takes in an array of integers AND a number n

  the function should calculate the maximum sum of n consecutive elements in the array

*/


let maxSubArraySum = (arr, n) => {
  let max = arr[0];
  let sum = arr[0];
  if(!arr.length) return null;
  for(let i = 1; i < arr.length; i++) {
    if(i < n) {
      sum += arr[i];
      max = sum;
    } else {
      sum -= arr[i - n];
      sum += arr[i];
      if(max < sum) max = sum;
    }
  }
  return max;
}


console.log(maxSubArraySum([1,2,5,2,8,1,5], 2)) // 10
console.log(maxSubArraySum([1,2,5,2,8,1,5], 4)) // 17
console.log(maxSubArraySum([4,2,1,6], 1)) // 6
console.log(maxSubArraySum([4,2,1,6,2], 4)) // 13
console.log(maxSubArraySum([], 4))// null
console.log(maxSubArraySum([-1, 0, -5, -23, -15, -3, -5, -12, -8, -20], 3)) 