/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coords) {
  if (coords.length < 2) return true;
  let slope = (coords[1][1] - coords[0][1]) / (coords[1][0] - coords[0][0]);
  for (let i = 2; i < coords.length; i++) {
    let s = (coords[i][1] - coords[0][1]) / (coords[i][0] - coords[0][0])
    if (s !== slope) return false;
  }
  return true;
};

let test1 = [[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]]; //true
let test2 = [[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]]; //false
let test3 = [[-3, -2], [-1, -2], [2, -2], [-2, -2], [0, -2]];
let test4 = [[0, 1], [1, 3], [-4, -7], [5, 11]];
console.log(checkStraightLine(test3));
// console.log(checkStraightLine(test2));