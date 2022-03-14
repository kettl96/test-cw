function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays === null) return 0
  console.log(arrayOfArrays);
  if (arrayOfArrays.length == 0) return 0
  let sort = arrayOfArrays.map(e => {
    if(e===null) return 0
    if (arrayOfArrays.length == 1) {
      if (e.includes(null)) return 0
    }
    if (e.length == 0) return 0
    return e.length
  }).sort((a, b) => a - b)
  for (let i = 0; i < sort.length; i++) {
    if (sort[i] == 0) return 0
    if (i + sort[0] !== sort[i]) return i + sort[0]
  }
}

// console.log(getLengthOfMissingArray(
//   null
// ));

// console.log(getLengthOfMissingArray(
//   [[null], [null, null, null]]
// ));

// console.log(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ));
// console.log(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ));
// console.log(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ));
// console.log(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] ));
  
// console.log(getLengthOfMissingArray([ ]));
// console.log(getLengthOfMissingArray(null));
console.log(getLengthOfMissingArray([ [ 1, 2, 2 ], null ]));