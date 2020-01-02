/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var uniquePaths = function (m, n) {
  let paths = 0;
  let downRight = (x, y) => {
    if (x === m && y === n) {
      paths++;
      return;
    }
    if (x < m) downRight(x + 1, y);
    if (y < n) downRight(x, y + 1);
  }
  downRight(1, 1);
  return paths
};

var uniquePathsDP = (m, n) => {
  if (m === 1 || n === 1) return 1;
  var arr = [];
  var i, j;
  for (i = 1; i < m; i++) {
    for (j = 1; j < n; j++) {
      arr[j] = (arr[j] || 1) + (arr[j - 1] || 1);
    }
  }
  console.log(arr);
  return arr[n - 1];
}

var uniquePaths = function (m, n) {
  let dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = [];
  }
  dp[0][0] = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1) dp[i][j] = 1;
      if (j === 1) dp[i][j] = 1;
      if (i !== 1 && j !== 1) dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }
  return dp[m][n];
};

console.log(uniquePathsDP(4, 3))