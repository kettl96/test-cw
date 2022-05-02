function isMAC48Address(n) {
  const tryValues = ['A', 'B', 'C', 'D', 'E', 'F']
  let arr = n.split('')
  for (let i = 0; i < arr.length; i++) {
    // console.log(!tryValues.includes(arr[i]));
    // console.log(isNaN(Number(arr[i])));
    // console.log(arr[i])
    if ((isNaN(Number(arr[i])))) {
      if (arr[i]=='-') continue
      console.log(arr[i]);
      if (!tryValues.includes(arr[i])) return false
      // else{

        // return false
      // } 
    }
  }
  return true
  console.log(arr);
}

console.log(isMAC48Address('Z1-1B-63-84-45-E6'));
console.log(isMAC48Address('00-1B-63-84-45-E6'));