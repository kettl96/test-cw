function moveZeros(arr) {
  let num = []
  let zero = []
  arr.forEach(e=>{
    e===0 ? zero.push(e) : num.push(e)
  })
  return num.concat(zero)
}


console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));