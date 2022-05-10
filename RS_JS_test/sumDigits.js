function getSumOfDigits(n) {
  let arr = n.toString().split('').map(e => e * 1)
  let sum = arr.reduce((acc, cur) => acc + cur)
  if (sum > 9) return getSumOfDigits(sum)
  return sum
}

console.log(getSumOfDigits(91));