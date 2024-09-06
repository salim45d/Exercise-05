/*////////////////////=>
/* a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length. */
//////////////////////=>

// Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

const array_1: number[] = [1, 2, 3];
const array_2: number[] = [3, 2, 1];

function arrCalculate(array: number[], operand: number[]) {
  const arrResult: number[] = [];

  for (let i: number = 0; i < array.length; i++) {
    arrResult.push(array[i] + operand[i]);
  }
  return arrResult;
}

const arrCalculateResult: number[] = arrCalculate(array_1, array_2);
console.log(arrCalculateResult);
