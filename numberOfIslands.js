/*
Given a 2d Matrix
[
  [1,1,1,0,0,],
  [1,1,1,0,0,],
  [1,1,0,0,0,],
  [0,0,1,1,0,],
  [0,0,1,1,0,],
]

count the number of islands
an island is represented by 1s and it's cardinal directions are surrounded by 0s(water)

so the above example, there are two islands
*/

let numIslands = (ocean) => {
  let islands = 0;

  //looks for the first sight of land
  let findIsland = () => {
    for(let i = 0; i < ocean.length; i++) {
      for(let k = 0; k < ocean[i].length; k++) {
        if(ocean[i][k] === '1') {
          travLand(i, k);
          islands++;
        }
      }
    }
  }

  //once a '1' is found, continues to find all adjacent 1s
  let travLand = (x, y) => {
    //turns island into water (1 => 0) so that we won't count it again
    ocean[x][y] = '0';

    let dir = [
      [0, 1], // go East
      [0, -1],// go West
      [1, 0], // go South
      [-1, 0] // go North
    ];

    for(let i = 0; i < 4; i++) {
      let [a, b] = dir[i];
      a += x;
      b += y;
      if(ocean[a] === undefined || ocean[a][b] === undefined) continue;
      if(ocean[a][b] === '1') travLand(a, b);
    }
  }
  findIsland();
  return islands;
}

let test1 = [
  [0, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 0]
]

let test2 = [
  [1, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 0]
]

let test3 = [
  [1, 0, 1, 0],
  [0, 0, 1, 1],
  [1, 0, 0, 0],
  [1, 1, 0, 1]
]

let test4 = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]

// console.log(numIslands(test1));
// console.log(numIslands(test2));
// console.log(numIslands(test3));
console.log(numIslands(test4));