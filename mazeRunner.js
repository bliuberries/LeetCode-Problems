/*input = 2d array;
given a layout, 1s being walkable paths and 0s being walls,
find that a path exist from the top left corner to the bottom right
*/

const mazeRunner = (maze, sx = 0, sy = 0, ex = maze.length - 1, ey = maze[ex].length - 1) => {
  let pathExist = false;
  let dir = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
  ];
  let traverse = (x, y) => {
    if(x === ex && y === ey) {
      pathExist = true;
      return;
    }
    maze[x][y] = 0;
    for(let i = 0; i < 4; i++) {
      let [a, b] = dir[i];
      ax = a + x;
      by = b + y;
      if(maze[ax] === undefined || maze[ax][by] !== 1) {
        continue;
      } else {
        traverse(ax, by);
      }
    }
  }
  traverse(sx, sy);
  return pathExist;
}

let test1 = [
  [1, 1, 1, 1, 1],
  [0, 1, 0, 0, 1],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1]
]

let test2 = [
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1]
]

console.log(mazeRunner(test1)) // false;
console.log(mazeRunner(test2, 2, 3, 2, 1)) // true;