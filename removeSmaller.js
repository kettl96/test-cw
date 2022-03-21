function removeSmallest(numbers) {
  let copy = numbers.map(e => e)
  let small = copy.map(e => e).sort((a, b) => a - b)[0]
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] == small) {
      copy.splice(i, 1)
      break
    }
  }
  return copy
}

console.log(removeSmallest([350, 43, 11, 277, 239, 224, 126, 259, 377, 281, 11, 387, 298, 160]));