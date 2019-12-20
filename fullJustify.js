var fullJustify = function (words, maxWidth) {
  let res = [], newLine = '', wPL = i = 0;
  while (words[i] !== undefined && newLine.length + words[i].length <= maxWidth) { // 'what '
    newLine += words[i]; //what must be
    wPL++; //1 // 2 //3
    i++; //1 // 2 // 3
    if (words[i] !== undefined && newLine.length + words[i].length + 1 <= maxWidth) { //what must be
      newLine += ' ';
    } else {
      let line = '';
      if (wPL >= 2 && newLine.length < maxWidth) { //12
        let totalPadding = maxWidth - (newLine.length - wPL + 1); // 5
        let spaces = wPL - 1; // 2
        let extraS = totalPadding % spaces; // 1
        let space = '';
        while (space.length < Math.floor(totalPadding / spaces)) space += ' ';
        let oneMore = space + ' ';
        let padding = [];
        for (let k = 1; k <= spaces; k++) {
          extraS >= k ? padding.push(oneMore) : padding.push(space);
        }
        newLine = newLine.split(' ');
        for (let j = 0; j < newLine.length; j++) {
          line += newLine[j]
          if (padding[j] !== undefined) line += padding[j];
        }
      } else if (wPL === 1) {
        line += newLine;
        while (line.length < maxWidth) line += ' ';
      } else {
        line = newLine;
      }
      res.push(line);
      newLine = '';
      wPL = 0;
    }
  }
  if(res[res.length - 1].split(' ').length > 1) {
    let modify = res[res.length - 1].split(' ');
    let last = '';
    for(let m = 0; m < modify.length; m++) {
      if(modify[m].length > 0) {
        last += modify[m];
        if(last.length < maxWidth) last += ' ';
      }
    }
    while(last.length < maxWidth) last += ' ';
    res[res.length - 1] = last;
  }
  return res;
};

// let arrayOfWords = ['today', 'was', 'a', 'difficult', 'day', 'thanks', 'to', 'my', 'crazy', 'relatives'];
let arrayOfWords =
  // ["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain", "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"]
  ["What","must","be","acknowledgment","shall","be"];
// ["This", "is", "an", "example", "of", "text", "justification."];
let number = 16;
console.log(fullJustify(arrayOfWords, number))
/*
[
  today   was  a,
  difficult  day,
  thanks  to  my,
  crazy         ,
  relatives     ,
]
*/