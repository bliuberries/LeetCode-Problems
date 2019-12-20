const removeDupes = str => {
  str = str.split(' ');
  for(let i = 0; i < str.length; i++) {
    for(let j = i + 1; j < str.length; j++) {
      if(str[i] === '' || str[j] === '') continue;
      if(str[i] === str[j]) str.splice(j, 1);
    }
  }
  return str.join(' ');
}

console.log(removeDupes('This is is a test test string')) // This is a test string