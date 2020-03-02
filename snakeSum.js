/**
 * Given a 2D matrix of integers and a target sum, there exists some paths that add up to the target sum.
 * find all those paths.
 * Return the number of paths.
 * 
 * 
 *  
 */


const snakeSum = (board, target) => {
  const pathsArr = [];
  const pathsSet = new Set();
  let dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ]
  let traverse = (x, y, path, travelled = {}) => {
    let sum = path.reduce((a, b) => a + b)
    if (sum === target) {
      path = path.map(x => '' + x).reduce((a, b) => a + b);
      pathsSet.add(path);
      pathsArr.push([...path]);
      return;
    }
    travelled[`${x} + ${y}`] = 1;
    for (let i = 0; i < 4; i++) {
      let [a, b] = dir[i];
      a = a + x;
      b = b + y;
      if (board[a] == undefined || board[a][b] == undefined) continue;
      if (travelled[`${a} + ${b}`] !== 1 &&
        sum + board[a][b] <= target) {
        path.push(board[a][b]);
        traverse(a, b, path, travelled);
        path.pop();
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let k = 0; k < board[i].length; k++) {
      traverse(i, k, [board[i][k]]);
    }
  }
  return pathsSet;
}

const board = [
  [5, 2, 3, 4, 8],
  [1, 2, 7, 4, 1],
  [3, 8, 2, 9, 8],
  [7, 2, 4, 8, 1],
  [4, 6, 9, 3, 4],
];

let targetSum = 24;

console.log(snakeSum(board, targetSum));