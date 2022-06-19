const compose = (...f) => a => f.reduceRight((res, fn) => fn(res), a)

const addOne = (a) => a + 1
const multTwo = (b) => b * 2
console.log((compose(addOne, multTwo, addOne, addOne)(2)))