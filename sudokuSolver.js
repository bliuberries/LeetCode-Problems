// const solveSudoku = function (board) {
//   let checkCounter = 0;
//   let copy = board.slice().map(a => {
//     return a.map(b => {
//       return b === '.' ? 0 : b;
//     })
//   });
//   let checkCell = (g, x, y) => {
//     console.log('checkCounter', checkCounter++);
//     let checkRCQ = rcq => {
//       rcq = rcq.filter(x => x !== 0).sort((a,b) => a-b);
//       for (let i = 0; i < rcq.length - 1; i++) {
//         if (rcq[i] == rcq[i + 1]) return false;
//       }
//       return true;
//     }
//     if (!checkRCQ(g[x])) return false; //checks row for given (x,y)
//     if (!checkRCQ([
//       g[0][y],
//       g[1][y],
//       g[2][y],
//       g[3][y],
//       g[4][y],
//       g[5][y],
//       g[6][y],
//       g[7][y],
//       g[8][y],
//     ])) return false; //checks column for given (x,y)
//     x < 3 ? n = 0 : x < 6 ? n = 3 : n = 6;
//     y < 3 ? o = 0 : y < 6 ? o = 3 : o = 6;
//     if (!checkRCQ([
//       g[n][o], g[n][o + 1], g[n][o + 2],
//       g[n + 1][o], g[n + 1][o + 1], g[n + 1][o + 2],
//       g[n + 2][o], g[n + 2][o + 1], g[n + 2][o + 2],
//     ])) return false; //checks quadrant
//     return true;
//   }
//   let backTrack = (grid) => {
//     let trackCount = 0;
//     for (let i = 0; i < 9; i++) {
//       for (let k = 0; k < 9; k++) {
//         console.log(trackCount++);
//         if(i === 2 && k === 3) debugger;
//         if (typeof grid[i][k] === 'number') {
//           grid[i][k] = 1;
//           while (!checkCell(grid, i, k)) {
//             if (grid[i][k] == 9) {
//               grid[i][k] = 0;
//               if (k === 0 || k === 1) {
//                 if(k === 0) {
//                   if(grid[i - 1][8] == 9) {
//                     grid[i - 1][8] = 0;
//                     i --;
//                     k = 7;
//                   } else {
//                     i --;
//                     k = 8;
//                   }
//                 } else if (k === 1) {
//                   if(grid[i][0] == 9) {
//                     grid[i][0] = 0;
//                     i --;
//                     k = 8;
//                   } else {
//                     k--;
//                   }
//                 }
//               } else {
//                 if(grid[i][k - 1] == 9) {
//                   grid[i][k - 1] = 0;
//                   k -= 2;
//                 } else {
//                   k--;
//                 }
//               }
//             }
//             console.log(grid, 'line 60');
//             grid[i][k]++;
//           }
//         }
//       }
//     }
//   }
//   backTrack(copy);
//   return copy;
// };

var solveSudoku = function (board) {
  solve(board, 0, 0);
};

var solve = function (board, row, col) {
  for (let i = row; i < 9; i++ , col = 0) {
    for (let j = col; j < 9; j++) {
      if (board[i][j] !== '.') continue;
      for (let c = 1; c <= 9; c++) {
        if (isValid(board, i, j, c.toString())) {
          board[i][j] = c.toString();
          if (solve(board, i, j + 1)) {
            return true;
          }
          board[i][j] = '.';
        }
      }
      return false;
    }
  }
  console.log(board);
  return true;
}

var isValid = function (board, x, y, c) {
  let rowStart = Math.floor(x / 3) * 3;
  let colStart = Math.floor(y / 3) * 3;
  for (let i = 0; i < 9; i++) {
    if (board[i][y] === c || board[x][i] === c) return false;
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[rowStart + i][colStart + j] === c) return false;
    }
  }
  return true;
}

let board = [
  [".", ".", "4", ".", "5", ".", "6", ".", "8"],
  [".", ".", ".", "4", ".", ".", ".", ".", "."],
  [".", ".", ".", "6", ".", ".", ".", "7", "1"],
  [".", "9", ".", ".", ".", "8", ".", ".", "."],
  [".", ".", "6", ".", ".", ".", ".", ".", "5"],
  [".", "3", ".", "5", ".", ".", ".", "8", "."],
  [".", "4", "9", ".", ".", ".", "8", "1", "."],
  ["8", "6", ".", ".", "4", ".", "5", ".", "9"],
  ["5", ".", "3", ".", ".", ".", ".", "6", "."]
];

console.log(solveSudoku(board))