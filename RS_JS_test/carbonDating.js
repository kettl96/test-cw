const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if ((sampleActivity < 0 || sampleActivity > MODERN_ACTIVITY)
    || (typeof sampleActivity !== 'string')
    || (!Number(sampleActivity))) return false
  else {
    let result = Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD)
    return Math.ceil(result)
  }
}

// console.log(dateSample('3.142'));
// console.log(dateSample('1'));
console.log(dateSample('9000'));