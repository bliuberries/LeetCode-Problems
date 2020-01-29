/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if(matrix.length === 0 || matrix[0].length === 0) return [];
  let res = [];

  res = res.concat(matrix.shift());

  for(let i = 0; i < matrix.length - 1; i++) {
    res.push(matrix[i].pop());
  }

  const lastRow = matrix.pop();
  if(lastRow) res = res.concat(lastRow.reverse());

  for(let i = matrix.length - 1; i >= 0; i--) {
    if(matrix[i].length) res.push(matrix[i].shift());
  }

  return res.concat(spiralOrder(matrix));
};

let test1 = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
 ];

 console.log(spiralOrder(test1));