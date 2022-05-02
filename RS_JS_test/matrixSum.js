function getMatrixElementsSum(matrix) {
  let res= []
  output = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex])); 
  for (let i = 0; i < output.length; i++) {
    let step = output[i]
      for (let j = 0; j < step.length; j++) {
        if (step[j] == 0) break
        else res.push(step[j])        
      }
  }
  return  res.reduce((prev, cur)=> prev+cur)
}

console.log(getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
]));

console.log(getMatrixElementsSum([
  [1, 2, 3, 4],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
]));