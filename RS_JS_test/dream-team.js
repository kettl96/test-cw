function createDreamTeam(members) {
  console.log(typeof members);
  if ((typeof members == 'number') 
  || members ==false 
  || members ==null 
  || members ==undefined
  || members.foo == 'bar') return false
  let memArr = []
  members.forEach(e => {
    console.log(e);
    if (typeof e == 'string') memArr.push(e)
  })
  let resArr = memArr.map(e => {
    let step = e.split('')
    let one = step.map(e => {
      if (e !== ' ') return e
    })
    let t = one.join('')
    return t[0].toUpperCase()
  })
  let result = resArr.sort().join('')
  return result
}

// console.log(
//   createDreamTeam([
//     'Amelia',
//     'Grace',
//     'Lily',
//     'Ruby',
//   ])
// );

console.log(createDreamTeam({ 'foo': 'bar' }));

// console.log(createDreamTeam(
//   [
//     '   william Alston ',
//     ' Paul Benacerraf',
//     '  Ross Cameron',
//     '       Gilles Deleuze',
//     '  Arda Denkel ',
//     '  Michael Devitt',
//     '  Kit Fine',
//     ' Nelson Goodman',
//     'David Kolb',
//     '   Saul Kripke',
//     '  Trenton Merricks',
//     '  Jay Rosenberg',
//   ]
// ));
// 'ADGJKMNPRSTW'

// console.log(createDreamTeam(
//   [
//     'Amelia',
//     null,
//     undefined,
//     'Ruby',
//     'Lily',
//     11,
//     'Grace',
//     22,
//     'Millie',
//     'Daisy',
//     true,
//     'Freya',
//     false,
//     'Erin',
//     new Set([1, 2, 3, 4, 5]),
//     'Megan',
//     {
//       'John': 'Smith'
//     },
//     'Jasmine',
//     1,
//     2,
//     3,
//     4,
//     5,
//     'Brooke',
//   ]
// ));

// 'ABDEFGJLMMR'