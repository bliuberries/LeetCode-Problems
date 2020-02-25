/*
Given a 2-d matrix of 1s and 0s, 1s being zombies and 0s being humans
if zombies can move one direct per day (per movement) how many days does it take to turn every human into a zombie

let field = [
  [0, 1],
  [0, 0]
]

zombify(field) // 2 days => 

day 1 = [
  [1, 1],
  [0, 1]
]

and day2 = [
  [1, 1],
  [1, 1]
]

assuming fields will always be 1s and 0s, considering no edge cases
*/

let zombify = (field) => {
  let zombiePositions = [];
  let days = 0;
  let findZombies = () => {
    for (let i = 0; i < field.length; i++) {
      for (let k = 0; k < field[i].length; k++) {
        if (field[i][k] === 1) zombiePositions.push([i, k]);
      }
    }
  };

  let biteHumans = (coords) => {
    let n = 0;
    while (n < 4) {
      let [x, y] = n === 0 ? checkNorth(coords) :
        n === 1 ? checkSouth(coords) :
        n === 2 ? checkWest(coords) :
        n === 3 ? checkEast(coords): null;
      n++;
      if (field[x] === undefined || field[x][y] === undefined) continue;
      if (field[x][y] === 0) {
        field[x][y] = 1;
        zombiePositions.push([x, y]);
      }
    }
  };

  let checkNorth = (zCoord) => {
    let x = zCoord[0] - 1;
    let y = zCoord[1];
    return [x, y];
  };
  let checkSouth = (zCoord) => {
    let x = zCoord[0] + 1;
    let y = zCoord[1];
    return [x, y];
  };
  let checkWest = (zCoord) => {
    let x = zCoord[0];
    let y = zCoord[1] - 1;
    return [x, y];
  };
  let checkEast = (zCoord) => {
    let x = zCoord[0];
    let y = zCoord[1] + 1;
    return [x, y];
  };
  let countDays = () => {
    let totalZombies = zombiePositions.length;
    while (totalZombies > 0) {
      biteHumans(zombiePositions.shift());
      totalZombies--;
    }
  }
  findZombies();
  while (zombiePositions.length > 0) {
    days++;
    countDays();
  }
  return days - 1;
}

let test1 = [
  [0, 0, 1],
  [0, 0, 0],
  [0, 0, 0]
]
let test2 = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]
let test3 = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 0, 0]
]
let test4 = [
  [1, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
]
let test5 = [
  [0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
// console.log(zombify(test1), 4);
// console.log(zombify(test2), 2);
// console.log(zombify(test3), 3);
console.log(zombify(test5), 8);