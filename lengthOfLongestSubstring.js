var lengthOfLongestSubstring = function(s) {
  let letters = [];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if(!letters.includes(s[i])) {
      letters.push(s[i]);
      if(count < letters.length) {
        count = letters.length;
      }
    } else {
      while(letters.includes(s[i])) {
        letters.shift();
      }
      letters.push(s[i])
    }
  }
  return count;
};

console.log(lengthOfLongestSubstring('abcafbcbb')) // 3, 'abc'
console.log(lengthOfLongestSubstring('bbbbbb'))// 1, 'b'
console.log(lengthOfLongestSubstring('pwwkew'))// 3, 'wke'
// console.log(lengthOfLongestSubstring('')




// 0 === 0
// 1 === 1
// 2 === 1 0     [0, 1, 1]
// 3 === 1 1
// 4 === 1 0 0
// 5 === 1 0 1   [0, 1, 1, 2, 1, 2]
// 6 === 1 1 0   [0, 1, 1, 2, 1, 2, 2]
// 7 === 1 1 1   [0, 1, 1, 2, 1, 2, 2, 3]
// 8 === 1 0 0 0
// 9 === 1 0 0 1