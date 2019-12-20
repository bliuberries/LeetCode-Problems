isValidSudoku = function (board) {
  let checkRnCnQ = (rcq) => {
    let check = rcq.filter((a) => a !== '.').sort((a, b) => a - b);
    for (let i = 0; i < check.length - 1; i++) {
      if (check[i] === check[i + 1]) {
        return false;
      }
    }
    return true;
  }
  for (let i = 0; i < 9; i++) {
    let column = [
      board[0][i],
      board[1][i],
      board[2][i],
      board[3][i],
      board[4][i],
      board[5][i],
      board[6][i],
      board[7][i],
      board[8][i]
    ]
    if(!checkRnCnQ(column) || !checkRnCnQ(board[i])) return false;
  }
  for(let k = 0; k < 9; k += 3) {
    for(let j = 0; j < 9; j += 3) {
      let quadrant = [
        board[k][j],
        board[k][j + 1],
        board[k][j + 2],
        board[k + 1][j],
        board[k + 1][j + 1],
        board[k + 1][j + 2],
        board[k + 2][j],
        board[k + 2][j + 1],
        board[k + 2][j + 2],
      ]
      if(!checkRnCnQ(quadrant)) return false;
    }
  }
  return true;
};

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

console.log(isValidSudoku(board)) // true