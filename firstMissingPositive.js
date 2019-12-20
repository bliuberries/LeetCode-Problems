var firstMissingPositive = function (nums) {
  nums.sort((a, b) => a - b);
  function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
  }
  const unique = nums.filter(onlyUnique);
  let k = 1, i = 0;
  for (; i < unique.length; i++) {
    if (unique[i] > 0) {
      if (unique[i] === k) {
        k++;
      } else {
        i--;
        break;
      }
    }
  }
  return i === unique.length - 1 && unique.length !== 1 ? k + 1 : k;
};

const test1 = [1, 2, 0];
const test2 = [3, 4, -1, 1];
const test3 = [7, 8, 9, 11, 12];
const test4 = [2]; //test 106
const test5 = [1, 1]; //test 111
const test6 = [0,2,2,1,1]; //test 120
console.log(firstMissingPositive(test1), 3);
console.log(firstMissingPositive(test2), 2);
console.log(firstMissingPositive(test3), 1);
console.log(firstMissingPositive(test4), 1);
console.log(firstMissingPositive(test5), 2);
console.log(firstMissingPositive(test6), 3);