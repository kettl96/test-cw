function renameFiles(names) {
  let count = 1
  for (let i = 0; i < names.length; i++) {
    let step = names[i]
    count = 1
    names.forEach((e, j) => {
      if (step === e && i !== j) {
        // console.log(e);
        names.splice(j, 1, e + '(' + count + ')')
    count++
  }
})
    // for (let j = 1; j < names.length; j++) {
    //   console.log(step);
    //   // console.log(names[j]);
    //   if (step === names[j]) {
    //     // console.log(step == names[j]);
    //     // names.splice(j,1, '1')
    //   }
    // }    
  }
  return names
console.log(names);
}

console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']));