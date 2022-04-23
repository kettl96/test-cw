function calculateHanoi(disksNumber, turnsSpeed ) {
  let steps = Math.pow(2, disksNumber) - 1
  let seconds = Math.floor((3600 / turnsSpeed) * steps)
  return { turns: steps, seconds: seconds}
}

console.log(calculateHanoi(38, 4594));
// console.log(calculateHanoi(5, 4074));