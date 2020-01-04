var longestConsecutive = function(nums) {
  if(nums.length < 1) return 0;
  let sorted = nums.sort((a,b) => a - b);
  let seq = tempSeq = 1;
  for(let i = 0; i < sorted.length - 1; i++) {
    if(Math.abs(sorted[i + 1] - sorted[i]) === 1) {
      tempSeq++;
    } else if(sorted[i] === sorted[i + 1]) {
      continue;
    } else {
      seq = tempSeq > seq ? tempSeq : seq;
      tempSeq = 1;
    }
  }
  return seq > tempSeq ? seq : tempSeq;
};


const test1 = [100, 4, 200, 1, 3, 2]; // 4, because [1,2,3,4];
const test2 = [-2, 0, 1, 4, 30, -1, 8, 9, 10, 11, 12];
const test3 = [0,-1];
console.log(longestConsecutive(test3));
// console.log(longestConsecutive(test2));