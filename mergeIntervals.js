var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for(let i = 0; i < intervals.length - 1; i++) {
    if(intervals[i][1] >= intervals[i + 1][0]) {
      if(intervals[i][1] < intervals[i + 1][1]) intervals[i][1] = intervals[i + 1][1];      
      intervals.splice(i + 1, 1);
      i--;
    }
  }
  return intervals;
};

const test1 = [[1, 3], [8, 10], [2, 6], [15, 18]]; //[ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]
const test2 = [[1, 4], [4, 5]];
const test3 = [[1,4],[2,3]];
const test4 = [[1,4],[0,2],[3,5]];
console.log(merge(test1));
console.log(merge(test2));
console.log(merge(test3));
console.log(merge(test4));
