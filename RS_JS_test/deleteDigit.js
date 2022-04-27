function deleteDigit(n) {
  let values = []
  function cut(number, cut) {
    let numberArr = number.toString().split('')
    numberArr.splice(cut, 1)
    values.push(numberArr.join(''))
  }
  let str = n.toString()
  for (let i = 0; i < str.length; i++) {
    cut(n,i)
  }
  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
  return getMaxOfArray(values)
}

console.log(deleteDigit(1001));