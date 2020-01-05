var longestConsecutive = function (nums) {
  if (nums.length < 1) return 0;
  let sorted = nums.sort((a, b) => a - b);
  let seq = tempSeq = 1;
  for (let i = 0; i < sorted.length - 1; i++) {
    if (Math.abs(sorted[i + 1] - sorted[i]) === 1) {
      tempSeq++;
    } else if (sorted[i] === sorted[i + 1]) {
      continue;
    } else {
      seq = tempSeq > seq ? tempSeq : seq;
      tempSeq = 1;
    }
  }
  return seq > tempSeq ? seq : tempSeq;
};

var longestConsecutiveDP = function (nums) {
  //handle misinput/0 length edgecases
  if ( !Array.isArray(nums) || !nums.length) return 0;
  //define variables
  let set = new Set(nums);
  let seq = 0;
  //check to see if
  for(let num of set) {
    if(set.has(num - 1)) continue; //check lowest possible sequence starting point
    let currNum = num;
    let currMax = 1;
    while(set.has(currNum + 1)) { //constant lookup, and performs per sequence, so O(logN) time c. worst case
      currNum++;
      currMax++;
    }
    seq = Math.max(seq, currMax);
  }
  return seq;
}

const test1 = [100, 4, 200, 1, 3, 2, 2]; // 4, because [1,2,3,4];
const test2 = [-2, 0, 1, 4, 30, -1, 8, 9, 10, 11, 12, 501, 502, 503, 504, 505, 506, 507, 1000, 2000]; //7
const test3 = [0, -1, -2, 1, 2, 5, 100, 200]; //5
const test4 = [1,3,5,2,4]; // 5
const test5 = [0,3,7,2,5,8,4,6,0,1]; //9
console.log(longestConsecutiveDP(1));
// console.log(longestConsecutiveDP(test2));
// console.log(longestConsecutiveDP(test3));
// console.log(longestConsecutiveDP(test4));
// console.log(longestConsecutiveDP(test5));
// console.log(longestConsecutive(test3));
// console.log(longestConsecutive(test2));
