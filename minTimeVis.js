var minTimeToVisitAllPoints = function (points) {
  let dist = 0;
  for (let i = 1; i < points.length; i++) {
    let xDif = Math.abs(points[i - 1][0] - points[i][0]);
    let yDif = Math.abs(points[i - 1][1] - points[i][1]);
    dist += Math.max(xDif, yDif);
  }
  return dist;
};

const test1 = [[1, 1], [3, 4], [-1, 0]]; // 7
const test2 = [[3, 2], [-2, 2]];
console.log(minTimeToVisitAllPoints(test1))
console.log(minTimeToVisitAllPoints(test2))