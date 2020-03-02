/**
 * given two calendars, merge them and find an empty slot where they can both have a meeting
 * 
 * calendar1 = [[0900, 1030], [1200, 1300], [1600, 1800]]
 * dailybound1 = [0900, 2000]
 * calendar2 = [[1000, 1310], [1230, 1430], [1430, 1500], [1600, 1700]]
 * dailybound2 = [1000, 1830]
 * 
 * create a variable that dictates the bounds
 * eg compare the latest time for left bound and earliest time for right bound
 * [1000, 1830]
 * 
 * go through person A's calendar
 * 
 */

let findTime = (c1, b1, c2, b2, meetingLength) => {
  b1 = [Math.max(b1[0], b2[0]), Math.min(b1[1], b2[1])];
  let aSlot = [];
  let bSlot = [];
  let initWindow = b1[0];
  if (c1.length === 0) {
    aSlot.push(b1);
  } else {
    for (let i = 0; i < c1.length; i++) {
      if (c1[i][0] >= initWindow + meetingLength) {
        let slot = [initWindow, c1[i][0]];
        aSlot.push(slot);
        initWindow = c1[i][1];
      } else {
        initWindow = c1[i][1];
      }
      if (i === c1.length - 1 &&
        b1[1] >= initWindow + meetingLength) {
        let slot = [initWindow, b1[1]];
        aSlot.push(slot);
        initWindow = b1[0];
      }
    }
  }

  if (c2.length === 0) {
    bSlot.push(b1);
  } else {
    for (let i = 0; i < c2.length; i++) {
      if (c2[i][0] >= initWindow + meetingLength) {
        let slot = [initWindow, c2[i][0]];
        bSlot.push(slot);
        initWindow = c2[i][1];
      } else {
        initWindow = c2[i][1];
      }
      if (i === c2.length - 1 &&
        b1[1] >= initWindow + meetingLength) {
        let slot = [initWindow, b1[1]];
        bSlot.push(slot);
        initWindow = b1[0];
      }
    }
  }

  let window = [];
  let a = b = 0;
  let earliestTime = 0;
  let latestTime = 0;
  while (a < aSlot.length - 1 || b < bSlot.length - 1) {
    earliestTime = Math.max(aSlot[a][0], bSlot[b][0]);
    latestTime = Math.min(aSlot[a][1], bSlot[b][1]);
    let slot = [earliestTime, latestTime];
    window.push(slot);
    if (bSlot[b + 1] !== undefined && (aSlot[a][1] <= bSlot[b + 1][0]) || b === bSlot.length - 1) {
      if (aSlot[a + 1] !== undefined && bSlot[b][1] <= aSlot[a + 1][0]) b++;
      a++;
    } else if (aSlot[a + 1] !== undefined && (bSlot[b][1] <= aSlot[a + 1][0]) || a === aSlot.length - 1) {
      if (bSlot[b + 1] !== undefined && aSlot[a][1] <= bSlot[b + 1][0]) a++;
      b++;
    }
  }
  if (a === aSlot.length - 1 && b === bSlot.length - 1) {
    earliestTime = Math.max(aSlot[a][0], bSlot[b][0]);
    latestTime = Math.min(aSlot[a][1], bSlot[b][1]);
    let slot = [earliestTime, latestTime];
    window.push(slot);
  }
  return window;
}

let testC1a = [[0900, 1030], [1200, 1300], [1600, 1800]];
let testDB1a = [0900, 2000];
let testC1b = [[1000, 1130], [1230, 1430], [1430, 1500], [1600, 1700]];
let testDB2b = [1000, 1830];
let tSlot1 = 30;
console.log(findTime(testC1a, testDB1a, testC1b, testDB2b, tSlot1));
// output = [ [ 1130, 1200 ], [ 1500, 1600 ], [ 1800, 1830 ] ]

let testC2a = [];
let testDB2a = [0900, 2000];
let testC3b = [[1000, 1130], [1230, 1430], [1430, 1500], [1600, 1700]];
let testDB3b = [0800, 1830];
let tSlot2 = 30;

console.log(findTime(testC2a, testDB2a, testC3b, testDB3b, tSlot2));
//output = [[0900, 1000], [1130, 1230], [1500, 1600], [1700, 1830]]

let testC3a = [];
let testDB3a = [0900, 2000];
let testC4b = [];
let testDB4b = [0800, 1830];
let tSlot3 = 30;

// console.log(findTime(testC3a, testDB3a, testC4b, testDB4b, tSlot3));
//output = [[0900, 1830]]