// function encodeLine(str) {
//   let res = []
//   let strArr = str.split('').sort()
//   let uniq = [...new Set(strArr)];
//   for (let i = 0; i < uniq.length; i++) {
//     let counter = 0
//     let step = uniq[i]
//     strArr.forEach((e, i) => {
//       if (step == e) counter++
//       if (i == strArr.length - 1) {
//         if (step == e) {
//           counter++
//           res.push(`${counter + step}`)
//         }
//         else { res.push(`${counter + step}`) }
//       }
//     })
//   }
//   return res.join('')
// }

// function encodeLine(str) {
//   let res = []
//   let arr = str.split('')
//   let counter = 0
//   for (let i = 0; i < arr.length; i++) {
//     // if (arr[i] == arr[i+1] && arr[i]==arr[i+2]) {
//     //   res.push(`${3}`)   
//     // }
//     if (arr[i] == arr[i+1]){
//       counter++
//       // res.push(`${2}`)

//     }
//     if (arr[i] == arr[i+1] && arr[i]!==arr[i+2]){
//       res.push(counter)
//     }
//     if (arr[i] !== arr[i+1]){

//       res.push(arr[i])

//     } 
//   }
// // arr.forEach((e,i)=>{
// //   console.log(i);
// //   if (arr[i] !== arr[i+1]) res.push(arr[i])
// //   if (arr[i] == arr[i+1] && arr[i]==arr[i+2]) {
// //     res.push(`${3+arr[i]}`)   
// //   }
// //   if (arr[i] == arr[i+1]){

// //     res.push(`${2+arr[i]}`)
// //     i +=  2
// //   }
// // })
// return res.join('')
//   console.log(res);
// }

var encodeLine = function (str) {
  const arr = [];
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      arr.push(count + str[i])
      count = 1;
    } else {
      count++;
    }
  }
  let resArr = arr.join('').split('').filter(e=> e !== '1')
  return resArr.join('');
}


// console.log(encodeLine('aabbccc'));
// console.log(encodeLine('aabbccc'));
console.log(encodeLine('aaaatttt'));
console.log(encodeLine('abbcca'));