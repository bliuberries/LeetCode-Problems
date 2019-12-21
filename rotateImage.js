var rotate = function (matrix) {
  let traversed = {};
  let holder;
  const goToNext = (x, y, nextValue, cycle = 0) => {
    if(traversed[`${x} + ${y}`] !== undefined) return;
    if(cycle === 0) {
      traversed[`${matrix.length - 1 - x} + ${y}`] = 0;
      holder = matrix[y][matrix.length - 1 - x];
      matrix[y][matrix.length - 1 - x] = nextValue;
      goToNext(x, y, holder, 1);
    } else if (cycle === 1) {
      traversed[`${matrix.length - 1 - x} + ${matrix.length - 1 - y}`] = 0;
      holder = matrix[matrix.length - 1 - y][matrix.length - 1 - x];
      console.log(holder);
      matrix[matrix.length - 1 - y][matrix.length - 1 - x] = nextValue;
      goToNext(x, y, holder, 2);
    } else if (cycle === 2) {
      traversed[`${x} + ${matrix.length - 1 - y}`] = 0;
      holder = matrix[matrix.length - 1 - y][x];
      matrix[matrix.length - 1 - y][x] = nextValue;
      goToNext(x, y, holder, 3);
    } else if (cycle === 3) {
      traversed[`${x} + ${y}`] = 0;
      matrix[y][x] = nextValue;
    }
  }
  for(let i = 0; i < matrix.length; i++) {
    for(let k = 0; k < matrix.length; k++) {
      goToNext(i, k, matrix[i][k], i);
    }
  }
  for(let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
  }
  return
};

const test1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const test2 = [
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
];
console.log(rotate(test1));