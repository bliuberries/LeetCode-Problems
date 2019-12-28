/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coords) {
  for (let i = 1; i < coords.length; i++) {
    let difx = coords[i][0] - coords[i - 1][0];
    let dify = coords[i][1] - coords[i - 1][1];
    if (difx !== dify) return false; // diag lines
  }
  return true;
};

let test1 = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]; //true
let test2 = [[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]; //false
let test3 = [[-3, -2], [-1, -2], [2, -2], [-2, -2], [0, -2]];
let test4 = [[0,1],[1,3],[-4,-7],[5,11]];
console.log(checkStraightLine(test3));
// console.log(checkStraightLine(test2));