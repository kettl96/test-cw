class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}
const initial = convertArrayToList([3, 1, 2, 3, 4, 5]);

// console.log(convertArrayToList([3, 1, 2, 3, 4, 5]));

function removeKFromList( l, k ) { 
  let arrNum = []
  function print(list){
      arrNum.push(list.value)
      if (list.next) print(list.next)
  }
  print(l)
  console.log(arrNum);
  let res = []
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] !== k) res.push(arrNum[i])
  }
  return convertArrayToList(res)
}
console.log(removeKFromList(initial, 3));

// console.log(removeKFromList([3, 1, 2, 3, 4, 5], 3));
// console.log(removeKFromList([1, 2, 3, 3, 4, 5], 3));
// [1, 2, 4, 5]

