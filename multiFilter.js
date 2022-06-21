const multiFilter = (...fn) => a => {
  let res = true
  fn.forEach(f=>{
    if (!f(a)) res = false
  })
  if (res) return a
}



function isEven(el) {
  return el % 2 === 0;
}
function isGTten(el) {
  return el > 10;
}
console.log(
  [1, 2, 3, 4, 10, 11, 12, 20, 21, 22].filter(multiFilter(isEven, isGTten))
);