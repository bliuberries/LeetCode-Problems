const pascalTriangle = (n) => {
  let nPlus = n + 1;
  let matrix = nPlus >= 1 ? [[1]] : [];
  const moreRows = (triangle) => {
    let currentN = triangle.length;
    if(currentN === nPlus) return triangle;
    let row = []
    for(let i = 1; i < currentN; i++) {
      row.push(0)
    }
    row.push(1);
    row.unshift(1);
    if(currentN >= 2) {
      for(let i = 1; i < row.length - 1; i++) {
        row[i] = triangle[currentN - 1][i-1] + triangle[currentN - 1][i]
      }
    }
    triangle.push(row)
    moreRows(triangle);
  }
  moreRows(matrix);
  return matrix[n];
}

console.log(pascalTriangle(3));