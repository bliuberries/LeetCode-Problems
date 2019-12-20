/*
output: integer
input: array with non-negative integers
constraints: none
edge: 
*/

/*
if array is empty/length is less than 3, return 0
if columns are cascading up/down, return 0  [1,2,3] => 0, [3,2,1] => 0
otherwise,  
counter to keep track of blocks of water filled
create two pointers
[1,0,0,0]
1. [1,0,5,0,2,4] => 3
left = 1, i = 0
dip = 0, possibleFilled = 1, i = 1
right = 5, blocksFilled = math.min([left, right]) = 1, i = 2, 
dip =
2. [5,0,1,0,6,7, 10, 12331231] => 14
blocksFilled = 0;
terrain = 0;
l = 0;
r = 2
5 > 0 ? 1 > 5 ? :

3. [1,5,4,5] => 1
4. [1,5,2,1] => 0
5. [2,0,0,5,1,2,3]
6. [1,0,0,5,1,2,3,4,5,0,1,2,3,4,5,2,3,1,4] => 
*/

//1. [1,0,5,0,2,4] => 7
// [1,2,1,3]
// [6,0,1,0,4] => 11 vs [1,0,6,0,1] => 2
// const countWater = arr => {
//   let blocksFilled = 0;
//   let terrain = arr[1];
//   let l = 0;
//   let r = 2;
//   for(let i = 1; i < arr.length; i++) {
//     if(arr[l] > arr[i]) { // 5 > 0 
//       if(arr[r] >= arr[l]) { // 1 > 5 ?
//         blocksFilled += (Math.min(arr[l], arr[r]) * (r - l - 1)) - terrain;
//         i = r;
//         l = r;
//         r = i + 2;
//         terrain = arr[i];
//       } else {
//         let jump = r; // jump = 2
//         let max = 0; // max = 0
//         //looping ahead to see if there is a right wall that is greater than or equal to left wall, otherwise, max height.
//         terrain += arr[r];
//         while(r < arr.length) { // 2 < 6
//           r++; //r === 3 // r = 4 arr[r] === 6
//           terrain += arr[r];
//           max = max > arr[r] ? max : arr[r]; // 0
//           if(arr[r] >= arr[l]) {
//             break;
//           } else if (arr[r] === null) {
//             r = jump;
//             terrain = 0   // needs fixing, how do you revert terrain if cannot find right wall that is greater than or equal to left wall
//             break;
//           }
//         }
//       }
//     } else {
//       l++;
//       r++;
//     }
//   }
//   return blocksFilled
// }

// const countWater = (terrain) => {
//   let lMax = terrain[0];
//   let blocks = 0;
//   for (let i = 1; i < terrain.length; i++) {
//     if (terrain[i] < lMax) {
//       let startIndex = i;
//       let tempRightMax = terrain[i];
//       while (terrain[startIndex] <= tempRightMax && tempRightMax <= lMax) {
//         startIndex++;
//         if (terrain[startIndex] > tempRightMax) {
//           tempRightMax = terrain[startIndex];
//         }
//       }
//       minMax = Math.min(lMax, tempRightMax);
//       blocks += minMax - terrain[i];
//     } else if (terrain[i] > lMax) {
//       lMax = terrain[i];
//     }
//   }
//   return blocks;
// }

const countWater = terrain => {
  let waterBlocks = 0;
  let last = terrain.length - 1;
  while(terrain[last] === 0) {//called once, trims the end for 0s
    terrain.pop();
    last--;
  }
  while(terrain[0] === 0) {//called once, trims front for 0s
    terrain.shift();
  }
  while(terrain.length > 2) {//handles length < 3 edge cases
    last = terrain.length - 1;
    for(let i = 1; i < terrain.length - 1; i++) {//looks for 0s
      if(terrain[i] === 0) waterBlocks++; //each 0 bound by a wall will increment
      if(terrain[i] !== 0)terrain[i]--;//if not a 0, decrement
    }
    while(terrain[last] === 0) {//trims the end for 0s
      terrain.pop();
      last--;
    }
    while(terrain[0] === 0) {//trims the front for 0s
      terrain.shift();
    }
  }
  return waterBlocks
}
// console.log(countWater([31,3,5]));//2
// console.log(countWater([1,2,3,4,0,4,3,2,1])); //4
// console.log(countWater([6,0,1,0,5])); //14
// console.log(countWater([5,0,1,0,0,0,0])); //1
// console.log(countWater([1,2,3,5,0,3,4])); //5
// console.log(countWater([1,0,0,5,1,2,3,4,5,0,1,2,3,4,5,2,3,1,4]));
// console.log(countWater([])); //0
// console.log(countWater([1])); //0
// console.log(countWater([22,22])); //0
console.log(countWater([5,5,5,5,4,3,7,6,6,6,2,1,3,4,4,42,6,7,8,3,2,1,3,4]));
console.log(countWater([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,,0,0,0,0,0,0,0,0,1]));
console.log(countWater([50,0,99,0,0,0,0,0,0,0,100]));
console.log(countWater([1,0,1])); 
// console.log(countWater([]));
// console.log(countWater([]));