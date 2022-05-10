function sortByHeight(arr) {
  let arrNum = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]>=0) {
      arrNum.push(arr[i])
      delete arr[i]
    }
  }
  arrNum.sort((a,b)=>  a-b)
  let count = 0
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == undefined) {
      arr[j]=arrNum[count]
      count++
    }    
  }
  return arr
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
console.log(sortByHeight([-1, -1, -1, -1, -1]));