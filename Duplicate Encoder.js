function duplicateEncode(word) {
  const res = []
  let wordArr = word.split('')
  for (let i = 0; i < wordArr.length; i++) {
    const element = wordArr[i]
    const arr = wordArr.slice().map(e=>e.toLowerCase())
    // console.log(arr);
    delete arr[i]
    // console.log(arr.includes(element.toLowerCase()));
    // console.log(arr);
    arr.includes(element.toLowerCase()) ? res.push(')') : res.push('(')
  }
  return res.join('')
}

console.log(duplicateEncode('Supralapsarian'))

// 0)1(2)3)4)5(6)7)8)9)10)11(12)13(