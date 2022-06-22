function makeLooper(str) {
  let i = 0
  return () => str[i++%str.length]
}
let abc = makeLooper('abc')
console.log(abc());
console.log(abc());