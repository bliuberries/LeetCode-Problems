var convert = function (s, numRows) {
  if(numRows === 1) return s;
  let zigzag = {}, counter = 1, zig = true, newString = '';
  for (let i = 0; i < s.length; i++) {
    if (zig === true && counter <= numRows) {
      if (zigzag[counter] === undefined) {
        zigzag[counter] = s[i];
      } else {
        zigzag[counter] += s[i];
      }
      if (counter === numRows) {
        zig = false;
        continue;
      }
      counter++;
    } else {
      if(numRows === 2) {
        counter = 1;
        zigzag[counter] += s[i];
        zig = true;
        counter = 2;
        continue;
      }
      counter--;
      zigzag[counter] += s[i];
      if (counter === 2) {
        zig = true;
        counter = 1;
      }
    }
  }
  for (let i in zigzag) {
    newString += zigzag[i];
  }
  return newString;
};

console.log(convert('abcd', 2));