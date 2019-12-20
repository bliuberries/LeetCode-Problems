const fibRecurse = (x) => {
  if(x === 1 || x === 2) {
    result = 1;
  } else {
    result = fibRecurse(x - 1) + fibRecurse(x - 2);
  }
  return result;
}

const fibMemo = (x,memo = []) => {
  if(memo[x] != null) return memo[x];
  if(x === 1 || x === 2) {
    result = 1;
  } else {
    result = fibMemo(x - 1) + fibMemo(x - 2);
  }
  memo[x] = result;
  return result;
}

const fibBottomUp = x => {
  if(x === 1 || x === 2) return 1;
  const bottomUp = new Array(x + 1);
  bottomUp[1] = 1;
  bottomUp[2] = 1;
  for(let i = 3; i < bottomUp.length; i++) {
    bottomUp[i] = bottomUp[i - 1] + bottomUp[i - 2];
  }
  return bottomUp[x];
}

(function() {
  var arr = [1, 1];
  window.fib = function(n) {
    var i;

    for (i = arr.length; i <= n; i++) {
      arr[i] = arr[i - 2] + arr[i - 1];
    }
    return arr[n];
  }
})();

console.log(fibBottomUp(1), '1');
console.log(fibBottomUp(2), '1');
console.log(fibBottomUp(3), '2');
console.log(fibBottomUp(4), '3');
console.log(fibBottomUp(5), '5');
console.log(fibBottomUp(6), '8');
console.log(fibBottomUp(7), '13');