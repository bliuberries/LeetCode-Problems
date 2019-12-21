var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix[0].length - j - 1];
      matrix[i][matrix[0].length - j - 1] = temp;
    }
  }
  return matrix;
};

const test0 = [
  [0, 1],
  [2, 3]
]
const test1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const test2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
];
const test3 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15,],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
]
console.log(rotate(test3));