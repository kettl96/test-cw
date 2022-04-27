function getCommonCharacterCount( s1, s2 ) {
  let count = 0
  let firstArr = s1.split('').sort() 
  let secondArr =  s2.split('').sort()
  // let minArr 
  // firstArr.length < secondArr.length ? minArr = firstArr : minArr = secondArr
  // console.log(minArr);
  for (let i = 0; i < firstArr.length; i++) {
    let step = firstArr[i]
    for (let j = 0; j < secondArr.length; j++) {
      if (secondArr[j]==step) {
        delete secondArr[j]
        count++
        break
      }
    }
    // secondArr.forEach((e,i)=>{
    //   if (e==step) {
    //     delete secondArr[i]
    //     count++
    //     return
    //   }
    // })
  }
  return count
}

console.log(getCommonCharacterCount('abca', 'xyzbac'));
console.log(getCommonCharacterCount('aabcc', 'adcaa'));
console.log(getCommonCharacterCount('zzzz', 'zzzzzzz'));