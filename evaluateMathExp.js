
const calc = function (exp) {
  let arrCalc = exp.match(/\d+\.\d+|\d+|[-+*/\(\)]/g).map(e => isNaN(e) || e < 0 ? e : e * 1)
  // console.log(exp.split(''));
  // let num = exp.split(' ').map(e => isNaN(e) || e < 0 ? e : e * 1);
  // console.log(num);
  // for (let i = 0; i < num.length+2; i++) {
  //   if (typeof num[i] == 'string' && num[i].length > 1) {
  //     let notNum = num[i].split('').map(e => {
  //       return isNaN(e) ? ` ${e} ` : e * 1
  //     })
  //     // console.log(notNum);
  //     let pushArr = notNum.join('').split(' ')
  //     if (pushArr.includes('.')) {
  //       // console.log(pushArr);
  //       let whole = pushArr.findIndex(e => e == '.')
  //       let change = pushArr[whole - 1] + pushArr[whole] + pushArr[whole + 1]
  //       pushArr.splice(whole - 1, 3, change)
  //       console.log(change);
  //     }
  //     num.splice(i, 1, pushArr)
  //   }
  // }
  // num.reduce((acc, val) => acc.concat(val), []).forEach(e => {
  //   if (e !== '') {
  //     isNaN(e * 1) ? arrCalc.push(e) : arrCalc.push(e * 1)
  //   }
  // })
  // console.log(arrCalc);
  const accept = (sym) => {
    return (arrCalc[0] == sym) && arrCalc.shift()
  }
  const acceptNumber = () => {
    return !isNaN(arrCalc[0]) && arrCalc.shift()
  }
  const acceptAny = (arr) => {
    return arr.some(function (a) { return a == arrCalc[0] }) && arrCalc.shift()
  }
  const doOp = (x, op, y) => {
    return [
      function (a, b) { return a + b; },
      function (a, b) { return a - b; },
      function (a, b) { return a * b; },
      function (a, b) { return a / b; }
    ][("+-*/".indexOf(op))](x, y);
  }
  const unit = () => {
    return accept('(') ? (e = expr(), accept(')'), e) : acceptNumber();
  }
  const unary = () => {
    return accept('-') ? -unit() : unit();
  }
  const factor = () => {
    for (var x = unary(); op = acceptAny(['*', '/']); x = doOp(x, op, unary())); return x;
  }
  const expr = () => {
    for (var x = factor(); op = acceptAny(['+', '-']); x = doOp(x, op, factor())); return x;
  }
  return expr();
};

// console.log(calc('1+1'));
// console.log(calc('2 /2+3 * 4.75- -6'));
console.log(calc('-123'));
console.log(calc('678.90-0.90'));
// console.log(calc('(123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) - (123.45*(678.90 / (-2.5+ 11.5)-(((80 -(19))) *33.25)) / 20) + (13 - 2)/ -(-11) '));
