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
let list = []

class Queue {

  getUnderlyingList() {
    return convertArrayToList(list)
  }

  enqueue( value ) {
     list.push(value)
    }
    
  dequeue() {
    let x = list[0]
    list.splice(0,1)
    return x
  }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
console.log(queue.getUnderlyingList());
console.log(list);