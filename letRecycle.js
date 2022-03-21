function recycle(array) {
  let output = []
  let paper = []
  let glass = []
  let organic = []
  let plastic = []

  let a = array.forEach(e => {
    let i = e.material
    let j = e.secondMaterial
    if (i == 'organic' || j == 'organic') organic.push(e.type)
    if (i == 'glass' || j == 'glass') glass.push(e.type)
    if (i == 'paper' || j == 'paper') paper.push(e.type)
    if (i == 'plastic' || j == 'plastic') plastic.push(e.type)
  })
  output.push(paper, glass, organic, plastic)
  return output
}

console.log(recycle([
  { "type": "rotten apples", "material": "organic" },
  { "type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic" },
  { "type": "wine bottle", "material": "glass", "secondMaterial": "paper" },
  { "type": "amazon box", "material": "paper" },
  { "type": "beer bottle", "material": "glass", "secondMaterial": "paper" }
]));