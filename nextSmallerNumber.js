// function nextSmaller(n) {

//   const maxNumber =(n) => {
//     const arr = String(n).split('').sort()
//     const i = arr.findIndex((e)=> Number(e)>0)
//     if (i !== 0) {
//       const del = arr.splice(i, 1)
//       // console.log([...del, ...arr].join('')); 
//       return [...del, ...arr].join('')
//     }
//     return arr.join('')
//   }

//   let max = maxNumber(n)
//   // console.log(max);
//   // console.log(max);
//   for (let i = n-1; i >= max; i--) {
//     if (maxNumber(i) === max) return i
//   }
//   return -1 




// //   let number = `${n}`.split('').sort().join('')
// //   console.log(number);
// //   // let str = `${n}`.length
// //   for (let i = n - 1; i >= number; i--) {
// //     // if (str !== `${i}`.length) return -1
// //     let nextArr = `${i}`.split('').sort().join('')
// //     if (number == nextArr) return i
// //   }
// //   return -1
// }
// console.log(nextSmaller(907));

// function nextSmaller(n) {
//   const arr = `${n}`.split('').map(Number)
//   let i, p = 9
//   for (i = arr.length; i--;) {
//     if (arr[i] > p) break
//     p = arr[i];
//   }
//   if (i < 0) return -1

//   const cur_i = i;
//   const cur = arr[cur_i]

//   for (i = arr.length; i--;) {
//     if (arr[i] < cur) break
//   }

//   arr[cur_i] = arr[i]
//   arr[i] = cur

//   if (arr[0] === 0) return -1
//   return +arr.slice(0, cur_i + 1).concat(arr.slice(cur_i + 1).reverse()).join('')
// }
// console.log(nextSmaller(531));
// console.log(nextSmaller(1234567908));



// function nextBigger(n) {
//   const maxNumber = (n) => {
//     const arr = String(n).split('').sort((a, b) => b - a).join('')
//     console.log(arr);
//     // const i = arr.findIndex((e) => Number(e) > 0)
//     // if (i !== 0) {
//     //   const del = arr.splice(i, 1)
//     //   return [...del, ...arr].join('')
//     // }
//     return arr
//   }

//   let max = maxNumber(n)
//   for (let i = n + 1; i <= max; i++) {
//     if (maxNumber(i) === max) return i
//   }
//   return -1
// }

// console.log(nextBigger(201700));
// // console.log(nextBigger(388775544321100));


function nextBigger(n) {
  let nextBigNum = -1;
  let nums = n.toString().split('');
  for (let i = nums.length - 1; i >= 0; --i) {
    if (nums[i] < nums[i + 1]) {
      let rightPartNums = nums.splice(i + 1).sort();
      for (let j = 0; j < rightPartNums.length; ++j) {
        if (rightPartNums[j] > nums[i]) {
          nums[i] = rightPartNums[j] - nums[i];
          rightPartNums[j] = rightPartNums[j] - nums[i];
          nums[i] = rightPartNums[j] + nums[i];
          nextBigNum = parseInt(nums.concat(rightPartNums).join(''), 10);
          i = 0;
          break;
        }
      }
    }
  }
  return nextBigNum;
}
console.log(nextBigger(12));
