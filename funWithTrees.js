var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

console.log(new TreeNode(4,new TreeNode(2), new TreeNode(0)));

function arrayToTree(array) {
  return new TreeNode(0); 
};

console.log(arrayToTree([17,0, -4]));


// let result = {
//   value: 17,
//   left: {
//     value: 0,
//     left: {
//       value: 3,
//       left: null,
//       right: null,
//     },
//     right: {
//       value: 15,
//       left: null,
//       right: null
//     },
//   },
//   right: {
//     value: -4,
//     left: null,
//     right: null
//   }
// }
// var expected = new TreeNode(17, new TreeNode(0, new TreeNode(3), new TreeNode(15)), new TreeNode(-4));
// console.log(expected);

// {

// function TreeNode(value, left, right) {
//   this.value = value;
//   this.left = left;
//   this.right = right;
// };

// function ListNode(data, next = null) {
//   this.data = data;
//   this.next = next;
// };

// function flatten(root) {
// 	if(!root) return null;
  
//   let arr = traverse(root);
//   let uniqueArray = [];
  
//   // eliminate the duplicate elements
//   for(let ele of arr){
  
//   	if(uniqueArray.indexOf(ele) == -1){
//     	uniqueArray.push(+ele);
//     }
//   }
  
//   // sort
//   uniqueArray.sort((a, b) => {return a-b});
  
//   // to list
//   return toList(uniqueArray);
// };

// function traverse(root){
// 	let valueArray = [], leftArray = [], rightArray = [];
  
//   // get all elements from value
//   let value = root.value;
//   while(value){
//   	valueArray.push(value.data);
//     value = value.next;
//   }
  
//   // get all elements from left
// 	if(root.left){
//   	leftArray = traverse(root.left);
//   }
  
//   // get all elements from left
//   if(root.right){
//   	rightArray = traverse(root.right);
//   }
 
//  	// get all elements
//   return valueArray.concat(leftArray).concat(rightArray);
// };

// function toList(arr){
// 	if(arr.length == 0) return null;
// 	let l = new ListNode(arr.shift());
//   l.next = toList(arr);
//   return l;
// };
// }
