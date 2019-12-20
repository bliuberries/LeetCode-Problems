var cutOffTree = function (forest) {
  let steps = 0;
  // let treeHeight = 2;
  //check for impenatrable walls horizontal
  for (let i = 1; i < forest.length - 1; i++) {
    let x = forest[i].reduce((a, b) => { a + b })
    if (x === 0) {
      return -1;
    }
  }
  //check for impenatrable walls vertical
  for (let i = 1; i < forest.length - 1; i++) {
    let y = 0;
    for (let k = 0; k < forest.length; k++) {
      y += forest[0][i];
    }
    if (y === 0) {
      return -1
    }
  }
  let treeMap = {};

  let lookForTrees = (x = 0, y = 0, i = 0) => {
    treeMap[i] = forest[x][y];
    // console.log(forest[x][y])
    if (x < forest.length - 1) {
      lookForTrees(x + 1, y, i++);
    } else if (x === forest.length && y < forest.length - 1) {
      lookForTrees(0, y + 1, i++);
    }
  }
  lookForTrees();
  console.log(treeMap)
  return treeMap;
};

let aForest = [
  [1, 2, 3],
  [0, 0, 4],
  [7, 6, 5]
]

cutOffTree(aForest) // 6