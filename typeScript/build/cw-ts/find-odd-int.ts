const findOddNum = (xs: number[]): number => {
  let count = 0
  interface obj {
    [key: number]: number
  }
  let obj: obj = {}
  for (let i = 0; i < xs.length; i++) {
    let step: number = xs[i]
    for (let j = 0; j < xs.length; j++) {
      if (xs[j] == step) count++
      if (j == xs.length - 1) {
        obj[step] = count
        count = 0
      }
    }
  }
  for (let key in obj) {
    if (obj[key] % 2 !== 0) return Number(key)
  }
  return 0
};

console.log(findOddNum([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));