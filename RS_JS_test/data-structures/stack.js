const arr = []
class Stack {
  push(element) {
    arr.push(element)
  }

  pop() {
    let x = arr[arr.length - 1] 
    arr.splice(arr.length -1, 1)
    return x    
  }

  peek() {
    return arr[arr.length - 1]
  }
}

const stack = new Stack();
stack.push(5);
stack.push(6);
stack.push(7);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());