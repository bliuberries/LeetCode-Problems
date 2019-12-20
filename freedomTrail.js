let findRotateSteps = (ring, key) => {
  let steps = key.length;
  let lastIndex = 0;
  let findLetter = (keyIndex = 0, clockwise = 0, antiClockwise = 1) => {
    let findKey = (keyIndex = 0, ringIndex = 0) => {
      if(keyIndex === key.length){
        return steps;
      } else if (ring[ringIndex] = key[keyIndex]) {
        steps += Math.abs(lastIndex - ringIndex);
        lastIndex = ringIndex;
        findKey(keyIndex + 1, ringIndex)
      }
    }
    // console.log(ring[clockwise], 'clockwise', ring[ring.length - antiClockwise], 'anticlockwise');
    if(keyIndex === key.length){
      return steps;
    } else if (ring[clockwise] === key[keyIndex]) {
      steps += Math.abs(lastIndex - clockwise);
      lastIndex = clockwise;
      findLetter(keyIndex + 1, clockwise, clockwise);
    } else if (ring[ring.length - antiClockwise] === key[keyIndex]) {
      steps += Math.abs(lastIndex - antiClockwise);
      lastIndex = antiClockwise;
      findLetter(keyIndex + 1, antiClockwise, antiClockwise);
    } else {
      if(clockwise >= ring.length) {
        clockwise = -1;
      }
      if(antiClockwise >= ring.length) {
        antiClockwise = 0;
      }
      findLetter(keyIndex, clockwise + 1, antiClockwise + 1);
    }
  }
  findLetter();
  return steps;
}
// console.log(findRotateSteps('edcba', 'abcde')) // 13
console.log(findRotateSteps('abcde', 'ade')) // 4












/*
    1     2       3     4     5     6     7       8       9       10
    X     8/      X     2 /
    20    40      60    70
*/