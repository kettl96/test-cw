function once(fn) {
  let isCall = false
  return function (...a) {
    if (!isCall) {
      isCall = true
      return fn.apply(this, a)
    }
  }
} 