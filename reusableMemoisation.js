const memo = fn => {
  const a = new Map();
  return x => {
    if(!a.has(x)) a.set(x, fn(x));
    return a.get(x);
  }
} 