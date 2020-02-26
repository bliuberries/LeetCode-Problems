/*
Given a 2d matrix of non duplicate integers, find the center.
If the center is quadrant of any sort, it is the largest number within that quadrant

The rabbit is 'center' and moves in the direction of the largest number to eat as many carrots as possible.
Following that path, how many carrots will the carrot eat?

eg. [
  [1, 5, 7, 22],
  [3, 8, 10, 2],
  [5, 14, 9, 4],
  [13, 23, 11, 6]
]

starting at 14 > 23 > 13 > 5 > 3 > 8 > 10 > 7 > 22 > 2 > 4 > 9 > 11 > 6
The rabbit eats every carrot except for 1 (the 0,0 position)
*/

let rabbitPath = field => {
  let findRabbitQuad = () => {
    let x = field.length % 2 === 1 ? [Math.floor(field.length / 2), Math.floor(field.length / 2)] :
      [Math.floor(field.length / 2) - 1, Math.floor(field.length / 2)];
    let n = field[0].length;
    let y = n % 2 === 1 ? [Math.floor(n / 2), Math.floor(n / 2)] : [Math.floor(n / 2) - 1, Math.floor(n / 2)]
    return [x, y];
  }
  let rabbitQuad = findRabbitQuad();
  let findRabbit = (quad) => {
    let x, y;
    let z = 0;
    for (let i = quad[0][0]; i <= quad[0][1]; i++) {
      for (let k = quad[1][0]; k <= quad[1][1]; k++) {
        if (field[i][k] > z) {
          z = field[i][k];
          x = i;
          y = k;
        }
      }
    }
    return [x, y]
  }
  let rabbit = findRabbit(rabbitQuad);
  let dir = [
    [0, 1],  //go East
    [0, -1], //go West
    [1, 0],  //go South
    [-1, 0]  //go North
  ]
  let eatCarrots = () => {
    let mostCarrots = 0;
    let nextPos;
    for (let i = 0; i < dir.length; i++) {
      let [x, y] = rabbit;
      let [a, b] = dir[i];
      if (field[x + a] === undefined || field[x + a][y + b] === undefined) continue;
      if (mostCarrots < field[x + a][y + b]) {
        mostCarrots = field[x + a][y + b];
        nextPos = [x + a, y + b];
      }
    }
    if (mostCarrots === 0) {
      return;
    } else {
      field[nextPos[0]][nextPos[1]] += field[rabbit[0]][rabbit[1]]
      field[rabbit[0]][rabbit[1]] = 0;
      rabbit = nextPos;
      eatCarrots();
    }
  }
  eatCarrots();
  return field[rabbit[0]][rabbit[1]];
}

let test1 = [
  [1, 5, 7, 22],
  [3, 8, 10, 2],
  [5, 14, 9, 4],
  [13, 23, 11, 6]
]

let test2 = [
  [1, 5, 7, 22],
  [13, 8, 10, 2],
  [23, 14, 9, 4],
  [3, 15, 11, 6]
]

let test3 = [
  [5, 7, 8, 6, 3],
  [0, 0, 7, 0, 4],
  [4, 6, 3, 4, 9],
  [3, 1, 0, 5, 8]
]
// console.log(rabbitPath(test1));
// console.log(rabbitPath(test2));
console.log(rabbitPath(test3));