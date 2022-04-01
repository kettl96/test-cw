function toCamelCase(str){
  let res = []
  let strArr = str.split('')
  for (let i = 0; i < strArr.length; i++) {
    strArr[i]=='_' || strArr[i]=='-' ? `${res.push(strArr[i+1].toUpperCase()), i++}` : res.push(strArr[i])    
  }
  return res.join('')
}

// console.log(toCamelCase("The-Stealth-Warrior"))
console.log(toCamelCase("the_stealth_warrior"))