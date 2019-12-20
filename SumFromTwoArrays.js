/*
- What are we given:
two arrays and an integer

- What is expected:
Find a pair(or the closest pair) that adds up to the given integer
For example: [4, -2, 3, 9]   N = 7
             [2, 10, 1, -4]
             ==> (4,2), (-2, 10)
             since there is no 7 that is possible

*/

let getPair = (arr1, arr2, n) => {

  arr1 = arr1.sort((a, b) => {return a - b});
  arr2 = arr2.sort((a, b) => {return a - b});
  let pairs = [];
  let traverseMatrix = (x = arr1.length - 1, y = 0) => {
    if(arr1[x] + arr2[y] === n) {
      pairs.push[[arr1[x], arr2[y]]];
      if(x > 0) {
        traverseMatrix(x-1, y);
      }
      if(y < arr1.length - 1) {
        traverseMatrix(x, y+1);
      }
    } else if (arr1[x] + arr2[y] > n ) {
      pairs.push[[arr1[x], arr2[y]]]
      if(x > 0) {
        traverseMatrix(x-1, y);
      }
    } else if (arr1[x] + arr2[y] < n) {
      pairs.push[[arr1[x], arr2[y]]];
      if(y < arr1.length -1) {
        traverseMatrix(x, y+1);
      }
    }
    return pairs;
    // let closest = Math.abs(n - pairs[0][0] - pairs[0][1]);
    // for(let i = 1; i < pairs.length; i++) {
    //   if(closest > Math.abs(n - (pairs[i][0] + pairs[i][1]))) {
    //     pairs
    //   }
    // }
  }
  return traverseMatrix();

  //lets start with MVP
  //simpliest approach is to use a nested for loop
  // let pairs = [[arr1[0], arr2[0]]];
  // let closest = Math.abs(n - (arr1[0] + arr2[0]));
  // for (let i = 0; i < arr1.length; i++) {
  //   for (let k = 0; k < arr2.length; k++) {
  //     if(i === 0 && i === k) continue;
  //     if (closest > Math.abs(n - (arr1[i] + arr2[k]))) {
  //       pairs = [arr1[i], arr2[k]];
  //     } else if (closest === Math.abs(n - (arr1[i] + arr2[k]))) {
  //       pairs.push([arr1[i], arr2[k]]);
  //     }
  //   }
  // }
  // return pairs;
  /*
  no idea how to find a pair that's sum is "CLOSE" to integer, so the first thing that comes
  to mind is...
  */
  // pairs.push({
  //   numberOne: arr1[i],
  //   numberTwo: arr2[k],
  //   distanceFromN: Math.abs(n - (arr1[i] + arr2[k])),
  // })
  // pairs.sort((a,b) => {return a.distanceFromN - b.distanceFromN});
  // let j = 1;
  // let theChosenPairs = [
  //   [pairs[0].numberOne, pairs[0].numberTwo]
  // ];
  // while(pairs[j].distanceFromN === pairs[0].distanceFromN) {
  //   theChosenPairs.push([pairs[j].numberOne, pairs[j].numberTwo]);
  //   j++;
  // }
  // return theChosenPairs;
}

console.log(getPair([4, -2, 3, 9], [2, 10, 1, -4], 7));