
var WordDictionary = function () {
  this.arr = []
};

WordDictionary.prototype.addWord = function (word) {
  this.arr.push(word)
};

WordDictionary.prototype.search = function (word) {
  // console.log(word.includes('.'));
  if (word.includes('.')) {
    this.arr.forEach(e => {
      if (e.length === word.length) {
        return true
      }
    })
  }
  if (word.length > 10) return false
  if (this.arr.includes(word)) return true

  let newArr = []
  this.arr.forEach(e => {
    if (e.length == word.length) {
      if (e[0] == word[0] || word[0] == '.') newArr.push(e)
    }
  })
  let wordArr = []
  word.split('').forEach((el, i) => {
    if (el == '.') wordArr.push(i)
  });
  let result = []
  newArr.forEach(w => {
    let splitW = w.split('')
    let maped = splitW.map((el, i) => {
      if (!wordArr.includes(i)) return el
    })
    result.push(maped.join(''))
  })
  let govno = word.split('.').join('')
  return result.includes(govno) 
};

let wd = new WordDictionary()
wd.addWord('.a');
wd.addWord('at');
wd.addWord('ate');
wd.addWord('ear');
wd.addWord('co');
wd.addWord('cod');
wd.addWord('code');
wd.addWord('codewars');
wd.addWord('essae');
wd.addWord('etlad');
// console.log(wd.search('a'));
// console.log(wd.search('a.'));
// console.log(wd.search('a.e'));
// console.log(wd.search('b'));
// console.log(wd.search('e.'));
// console.log(wd.search('ea.'));
// console.log(wd.search('ea..'));
console.log(wd.search('.s'));

// let s1 = 'ear'
// let s2 = 'ea'
// console.log(123);
// console.log(s1.includes(s2));
// console.log(wd.search('ea.d'));

 // let res = false;
  // let str = word.split('')
  // // .map(e => e !== '.' ? e : '').join('').split('')
  // for (let i = 0; i < word.length; i++) {
  //   let step = this.arr[i]
  //   // console.log(step.length);
  //   // console.log(word.length);
  //   // for (let i = 0; i < str.length; i++) {
  //     // console.log(step[i]);
  //     if (step.length !== word.length) continue
  //     else if (step[i] == str[i]) {
  //       res = true
  //     } else if (str[i] == '.') res = true
  //     else {
  //       res = false
  //     }
  //   // }
  // }


  // -------------------------
  // if (word.length > 10) return false
  // let newArr = []
  // this.arr.forEach(e => { if (e.length == word.length) newArr.push(e) })
  // // console.log(newArr);
  // let res = false;
  // let str = word.split('')
  // // let step
  // // let midArr = []
  // // for (let i = 0; i < this.arr.length; i++) {
  // //   step = this.arr[i].split('')
  // //   if (str.length == step.length) {
  // //     midArr.push(step)
  // //   }
  // // }
  // let st
  // for (let i = 0; i < newArr.length; i++) {
  //   st = newArr[i]
  //   // if (str[i] !== st[i]) return
  //   if (str[i] == st[i]) {
  //     res = true
  //   }
  //   else if (str[i] == '.') {
  //     res = true
  //   }
  //   else {
  //     res = false
  //   }
  // }
  // return res


   // console.log();
  // let result = newArr.map()
  // newArr.forEach(el => {
  //  let elem = el.split('')
  //  let re = elem.map((e,i,wordArr) => {
  //   console.log(wordArr);
  //   if (wordArr.includes(i))  return null;
  //   else return e

  // })
  //   result.push(re)
  // })
  // for (let i = 0; i < word.length; i++) {
  //   s = newArr[i].split('')
  //   // if (i == wordArr[i])
  //   console.log(s);
  // }
  // console.log(newArr);
  // console.log(wordArr);
  // let res = false;
  // let str = word.split('')
  // // let step
  // // let midArr = []
  // // for (let i = 0; i < this.arr.length; i++) {
  // //   step = this.arr[i].split('')
  // //   if (str.length == step.length) {
  // //     midArr.push(step)
  // //   }
  // // }
  // let st
  // for (let i = 0; i < newArr.length; i++) {
  //   st = newArr[i]
  //   // if (str[i] !== st[i]) return
  //   if (str[i] == st[i]) {
  //     res = true
  //   }
  //   else if (str[i] == '.') {
  //     res = true
  //   }
  //   else {
  //     res = false
  //   }
  // }
  // return res