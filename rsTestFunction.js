// function foo() {
//   return { bar: 1};
// }
// console.log(typeof foo().bar);


// console.log(message);
// let message = 'hello'


let name = 'John';
function printName() {
  console.log(name);
}
setTimeout(()=>{
  let name = 'peter';
  printName();
}, 1000);