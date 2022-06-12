// let foo = (a) => (b) => a*b 
// foo(5)(5)

function solution(str) {
  let res = []
  str.split('').forEach((e, i) => { e.toUpperCase() == e ? `${res.splice(i + 2, 0, ' '), res.push(e)}` : res.push(e) })
  return res.join('')
}
console.log(solution('camelCase'));
console.log(solution('camelCasingTest'));