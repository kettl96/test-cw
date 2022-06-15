function getCount(str: string): number {
    const vowel: string[] = ['a', 'e', 'i', 'o', 'u']
    let arr: string[] = str.split('')
    let count: number = 0
    arr.forEach(e => {
      if (vowel.includes(e)) count++
    })
    return count
  }
  
  console.log(getCount('abracadabra'));