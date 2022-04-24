function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!')
  let resArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--double-next') resArr.push(arr[i + 1])
    else if (arr[i] == '--double-prev') {
      if (i !== 0 && arr[i - 2] !== '--discard-next') resArr.push(arr[i - 1])
    }
    else if (arr[i] == '--discard-next') i++
    else if (arr[i] == '--discard-prev') {
      if (resArr.length !== 0 && arr[i - 2] !== '--discard-next') resArr.pop()
    } else {
      resArr.push(arr[i])
    }
  }
  return resArr.filter(e => e !== undefined)
}
// console.log(transform([ 1, 2, '--double-next',3, 4, 5]));
console.log(transform(['--discrard-prev', 4]));

// console.log(transform(3));
// console.log(transform(3.312312))
// console.log(transform(false))
// console.log(transform(null))
// console.log(transform(undefined))
// console.log(transform({ 'foo': 'bar' }))

const cases = [
  ['--discard-prev', 1, 2, 3],
  ['--double-prev', 1, 2, 3],
  [1, 2, 3, '--double-next'],
  [1, 2, 3, '--discard-next']
];
cases.forEach(e => {
  // console.log(transform(e));
})

