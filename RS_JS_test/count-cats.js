function countCats(Array) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
 let count = 0
 Array.forEach(e=>{
   e.forEach(e=> {
     if (e=='^^') count++
   })
 })
 return count 
}

console.log(countCats([
  ["^^", ".", null, 0, false, "", NaN, "^^", 2, true, "dasdas", 1],
  [2, null, 0, 1, ".", "dasdas", true, NaN, "", false, "^^", "^^"],
  [false, ".", 1, 0, "^^", null, "", 2, "dasdas", "^^", NaN, true],
  [".", false, 1, null, NaN, 2, 0, "dasdas", true, "^^", "", "^^"],
  [false, ".", 1, 0, "^^", true, null, "^^", "", NaN, 2, "dasdas"],
  [false, NaN, 1, 0, ".", "^^", null, true, "dasdas", "^^", 2, ""],
  [null, 1, NaN, true, ".", "^^", "^^", 2, "", false, "dasdas", 0],
  [null, NaN, "", false, ".", 1, 0, "^^", "dasdas", true, 2, "^^"],
]));