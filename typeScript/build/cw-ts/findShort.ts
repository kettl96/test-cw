function findShort(s: string): number {
  let res: number[] = []
  s.split(' ').forEach(e => res.push(e.length))
  return res.sort((a,b)=>a-b)[0];
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));