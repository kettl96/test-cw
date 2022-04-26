let x
let count = 1

class DepthCalculator {
  calculateDepth( arr ) {
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      if ( typeof arr[i]==='object') {
        count++
        // console.log(arr[i]);
        x = arr.flat()
        // console.log(x);
        // console.log(count);
        return this.calculateDepth(x)
      }      
    } 
    if (count == 1) return count   
    return count
  }
}

// class DepthCalculator {
//   calculateDepth(arr) {
//     if (arr.length == 0) return 1
//     else {
//       if (Array.isArray(arr)) return 1 + Math.max(...arr.map((e) => this.calculateDepth(e)))
//       else return 0
//     }
//   }
// }
 const depthCalc = new DepthCalculator();
//  console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5]));
//  console.log( depthCalc.calculateDepth([1, 2, 3, [[1,[]], 5]]));
 console.log( depthCalc.calculateDepth([1, 2, 3, [1], 4, 5, [1]]));
 console.log(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]));