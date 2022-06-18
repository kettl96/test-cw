function factory(x){
  let mul = (arr) => {
    return arr.map(e=> e*x)
  }
  return mul
}


let fives = factory(5)
console.log(fives([1,2,3]));