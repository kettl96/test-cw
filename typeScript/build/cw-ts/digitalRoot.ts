export const digitalRoot = (n:number):number => {
  let arr: number[] = n.toString().split('').map(e => Number(e))
  let res: number = arr.reduce((acc: number, cur: number) => acc + cur, 0)
  return res.toString().length > 1 ? digitalRoot(res) : res
};