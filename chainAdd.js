function add(n){
  const fn = i => add(n + i)
  fn.valueOf = () => n
  return fn;
}