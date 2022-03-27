function vowelIndices(word) {
  let resArr = []
  const vowel = ['a', 'e', 'i', 'o', 'u', 'y']
    word.toLowerCase().split('').forEach((el, i) => {
      if (vowel.includes(el)) resArr.push(i+1)
    }) 
    return resArr
}
console.log(vowelIndices('apple'));