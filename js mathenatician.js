// function curry(f) {
//   return function (a) {
//     return function (b) {
//       return f(a, b)
//     }
//   }
// }
// function calc(a, b) {
//   console.log(a);
//   console.log(b);
// return a+b
// }

// let calculate = curry(calc)
// console.log(calculate(1,3)(2,3));

// const calculate = (...x) => (...y) => {
//   return [].concat(x,y).reduce((a,b)=>a+b)
// }
// const calculate = (...args) =>  {
//   return [].concat(x,y).reduce((a,b)=>a+b)
// }
// console.log(calculate(1, 3)(2, 3));
