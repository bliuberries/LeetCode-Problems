// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var subsetsWithDup = function (nums) {
//   nums.sort((a, b) => a - b);
//   let hash = {};
//   let add = (insert, index) => {
//     hash[insert] === undefined ? hash[insert] = 1 : hash[insert] += 1;
//     for (let k = index; k < nums.length; k++) {
//       add(insert + nums[k], k + 1);
//     }
//   }
//   add('', 0);
//   let arr = Object.keys(hash);
//   for(let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].split('');
//     for(let k = 0; k < arr[i].length; k++) {
//       if(arr[i][k] === '-') {
//         arr[i][k] += arr[i][k + 1];
//         arr[i].splice(k + 1, 1);
//       }
//       arr[i][k] = +arr[i][k];
//     }
//   }
//   return arr;
// };

var subsetsWithDup = function(nums) {
  nums.sort((a,b) => a-b);
  let res = [];
  
  let searchDFS = (curr = [], start = 0, len = 0) => {
      if(curr.length === len) res.push(curr);
      if(curr.length > len) return;
      
      for(let i=start; i<nums.length; i++){
          if(i!== start && nums[i] === nums[i-1]) continue; // skip the duplicated numbers
          // if(nums[i] < curr[curr.length-1]) {
          //   console.log(nums[i], curr[curr.length - 1]);
          //   continue;  // skip smaller numbers
          // }
          searchDFS(curr.concat(nums[i]), i+1, len+1);
      }
  }
  searchDFS([],0,0);
  return res;
};

const test1 = [1, 2, 2];
const test2 = [-1, 1, 2];
const test3 = [4,4,4,1,4];
const test4 = [1,2,3,4,5,6,7,8,10,0];
console.log(subsetsWithDup(test4));