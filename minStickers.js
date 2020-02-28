/*
Given a list "stickers" of words, cut and re-arrange the letters so that they
spell out the target word.

Return how many stickers it takes to make the target word, or if impossible, return -1.

eg:
input:
["with", "example", "science"], "thehat"

output: 
3

'with' is used twice for the two 't's and 'h's and 'example' is used once for 'e' and 'a'.
*/

let minStickers = function (stickers, target) {
  let numberOfStickers = 0;
  //find how many of each letters we need
  let targetLetters = {};
  for (let i = 0; i < target.length; i++) {
    if (targetLetters[target[i]] === undefined) {
      targetLetters[target[i]] = 1;
    } else {
      targetLetters[target[i]] += 1;
    }
  }

  //find how many of each letters we have
  let availableLetters = [];
  for (let i = 0; i < stickers.length; i++) {
    availableLetters[i] = { weight: 0 };
    for (let k = 0; k < stickers[i].length; k++) {
      if (availableLetters[i][stickers[i][k]] === undefined) {
        availableLetters[i][stickers[i][k]] = 1;
        if (targetLetters[stickers[i][k]]) availableLetters[i].weight += 1;
      } else {
        availableLetters[i][stickers[i][k]] += 1;
        if (targetLetters[stickers[i][k]] >= availableLetters[i][stickers[i][k]]) {
          availableLetters[i].weight += 1;
        }
      }
    }
  }

  console.log(availableLetters)
  availableLetters.sort((a, b) => b.weight - a.weight);
  console.log(availableLetters)
  let maxNumOfStickers = {};
  let stickersNeeded;
  for (let i = 0; i < availableLetters.length; i++) {
    maxNumOfStickers[i] = 0
    for (let k in targetLetters) {
      stickersNeeded = 0;
      if(availableLetters[i][k]) {
        while (targetLetters[k] > 0) {
          targetLetters[k] -= availableLetters[i][k];
          stickersNeeded += 1;
          maxNumOfStickers[i] = Math.max(maxNumOfStickers[i], stickersNeeded)
        }
      }
    }
  }
  for(let i in maxNumOfStickers) {
    numberOfStickers += maxNumOfStickers[i];
  }
  for(let i in targetLetters) {
    if(targetLetters[i] > 0) {
      numberOfStickers = -1;
    }
  }
  return numberOfStickers;

};

let test1a = ["with", "example", "science"];
let test1b = "thehat";

let test2a = ["notice","possible"];
let test2b = "basicbasic";

let test3a = ["these","guess","about","garden","him"];
let test3b = "atomher";
// console.log(minStickers(test1a, test1b));
// console.log(minStickers(test2a, test2b));
console.log(minStickers(test3a, test3b));
/*
targetLetters = {
  t: 2,
  h: 2,
  e: 1,
  a: 1
}

availableLetters = [
  {
    w: 1,
    i: 1,
    t: 1,
    h: 1,
  },
  {
    e: 2,
    x: 1,
    a: 1,
    m: 1,
    p: 1,
    l: 1
  },
  {
    s: 1,
    c: 2,
    i: 1,
    e: 2,
    n: 1
  }
]
*/