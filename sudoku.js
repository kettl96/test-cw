function validSolution(board) {
  let flag = false
  for (let i = 0; i < 9; i++) {
    let part = board[i].slice(i, i + 3)
      .concat(board[i + 1].slice(i, i + 3))
      .concat(board[i + 2].slice(i, i + 3))
      .sort()

    let count = 1
    for (let j = 0; j < 9; j++) {
      if (part[j] == count) flag = true
      if (part[j] != count) {
        return false
      }
      count++
    }
    i += 2
  }
  return flag
}

console.log(validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]));