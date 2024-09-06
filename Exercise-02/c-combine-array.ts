////////////////////////=>
/*  function that will combine 2 given array into one array */
////////////////////////=>

/* Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]*/

let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5, 6];

function combineArray(arr1: number[], arr2: number[]) {
  return arr1.concat(arr2);
}

const resultCombineArray: number[] = combineArray(arr1, arr2);
console.log(resultCombineArray);
