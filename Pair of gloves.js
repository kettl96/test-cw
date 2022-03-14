function numberOfPairs(gloves) {
  let glo = gloves.slice().sort()
  let count = 0
  for (let i = 0; i < glo.length; i++) {
    if (glo[i] == glo[i + 1]) {
      count++
      i = i + 1
    }
  }
  return count
}
console.log(numberOfPairs([
  'Navy', 'Navy', 'Fuchsia',
  'Purple', 'Gray', 'Lime',
  'Maroon', 'White', 'Fuchsia',
  'Green', 'Green', 'Blue',
  'Silver', 'Aqua', 'Silver',
  'Olive', 'Green', 'Fuchsia',
  'Green', 'Black', 'White',
  'Purple', 'Black', 'Olive',
  'Maroon', 'Teal', 'Silver',
  'Green', 'Black', 'Lime',
  'Gray', 'Olive'
]));