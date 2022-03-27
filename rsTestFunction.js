// function foo() {
//   return { bar: 1};
// }
// console.log(typeof foo().bar);


// console.log(message);
// let message = 'hello'


// let name = 'John';
// function printName() {
//   console.log(name);
// }
// setTimeout(()=>{
//   let name = 'peter';
//   printName();
// }, 1000);


// var name = 'John';
// function printName() {
//   console.log(name);
//   var name = 'peter'
//   console.log(name);
// }
// printName()


// const foo = bar()
// const number = 2
// function bar() {return number}


// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000)
// }

// let n = 1
// function foo(n) {
//   console.log(arguments);
// }
// // foo.call(null)
// foo(n)


// (
//   function(a) {
//     arguments[0] = 10;
//     return a;
//   }
// ) (5)


// let f = function g() {return 23;};
// console.log(typeof g());


// let name = 'John';
// function printName() {
//   let name = 'Peter'
//   console.log(name);
// }
// printName()

// "use strict";
// const details = {
//   message: 'Hello',
// }
// function getMessage() {
//   return this.message;
// }
// console.log(getMessage.call(details));


// for (var i = 0; i < 10; i++) {

// }
// console.log(i);


// for(var i = 0; i<3;i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 1000)
// }


// printMessage();
// function printMessage() {
//   console.log('hello');
// }


// function getThis() {
//   return this;
// }
// console.log(getThis());


// const details = {
//   name: 'john',
// }
// function getMessage(message) {
//   return `${message} ${this.name}`;
// }
// console.log(getMessage.apply(details, ['Hello']));


console.log(message);
var message = 'hello'


// function foo(a, b) {
//   return a*b
// }
// const bar = foo.bind(null, 2)
// bar(2)


// var a = 1, b = function a(x) {x && a(--x);};
// console.log(a)


// "use strict";
// function getThis() {
//   return this;
// }
// console.log(getThis());


// var name = 'john';
// var user = {
//   name: 'peter',
//   printMessage() {
//     console.log(`Hello, ${this.name}`);
//   }
// };
// var printMessage = user.printMessage;
// printMessage()

function foo() {console.log(this);}
foo.call(null);