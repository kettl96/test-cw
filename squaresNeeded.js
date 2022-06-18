function squaresNeeded(grains){
  return Math.ceil(Math.log2(grains + 1))
}

console.log(squaresNeeded(4));