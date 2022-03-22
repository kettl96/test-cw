const objectSegregation = (array) => {

  return array.reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1
    return acc
  }, {})

  // let obj = {}
  // for (let i = 0; i < array.length; i++) {
  //   (obj[array[i]] === undefined) ? obj[array[i]] = 1 : obj[array[i]] += 1    
  // }
  // return obj
}

console.log(objectSegregation(
  ['a', 'b', 'c', 'a', 'b', 'c', 'c', 'c']
));

