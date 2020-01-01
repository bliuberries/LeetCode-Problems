/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function(m, n) {
  let paths = 0;
  let downRight = (x, y) => {
    if(x === m && y === n) {
      paths ++;
      return;
    }
    if(x < m) downRight(x + 1, y);
    if(y < n) downRight(x, y + 1);
  }
  downRight(1,1);
  return paths
};

// console.log(uniquePaths(3,2)) // 3
// console.log(uniquePaths(3,3)) // 28
// console.log(uniquePaths(4,3)) // 28
// console.log(uniquePaths(5,3)) // 28
// console.log(uniquePaths(6,3)) // 28
// console.log(uniquePaths(7,3))
// console.log(uniquePaths(7,1))
// console.log(uniquePaths(7,2))
// console.log(uniquePaths(7,3))
// console.log(uniquePaths(7,4)) // 28
// console.log(uniquePaths(7,5)) // 28

console.log(uniquePaths(51, 8));