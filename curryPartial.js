function curryPartial(fn, ...a) {
  return (a.length >= fn.length)
    ? fn(...a)
    : (...p) => curryPartial(fn, ...a, ...p)
}