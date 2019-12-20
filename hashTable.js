const transformEndorsements = (e) => {
  let res = [];
  let temp = {};
  for(let i = 0; i < e.length; i++) {
    !temp[e[i].skill] ? temp[e[i].skill] = [e[i].user] : temp[e[i].skill].push(e[i].user);
  }
  for(let i in temp) {
    res.push(
      {
        skill: i, 
        user: temp[i],
        count: temp[i].length
      }
    )
  }
  return res.sort((a,b) => (b.count - a.count));
}

let endorsements = [
  {skill: 'css', user: 'Bill'},
  {skill: 'Javascript', user: 'Chad'},
  {skill: 'Javascript', user: 'Bill'},
  {skill: 'Javascript', user: 'Sue'},
  {skill: 'css', user: 'Sue'},
  {skill: 'html', user: 'Sue'}
]
console.log(transformEndorsements(endorsements));

/* Result //
[
  {skill: 'Javascript', user: ['Chad', 'Bill', 'Sue'], count:3},
  {skill: 'css', user: ['Bill', 'Sue'], count: 2},
  {skill: 'html', user: ['Sue'], count: 1}
]

*/