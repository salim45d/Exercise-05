////////////////////////=>
/* a function to find the difference in 2 given array*/
////////////////////////=>

/* Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]*/

const array_1: number[] = [1, 2, 3, 4, 5];
const array_2: number[] = [3, 4, 5, 6, 7];

function differenceArray(ar: number[], arr: number[]) {
  const combineArray: number[] = ar.concat(arr);

  const differenceValues: number[] = [];
  combineArray.forEach((value: number, index: number) => {
    if (
      combineArray.indexOf(combineArray[index]) ===
      combineArray.lastIndexOf(combineArray[index])
    ) {
      differenceValues.push(value);
    }
  });

  return differenceValues;
}

const resultDifferenceArray = differenceArray(array_1, array_2);
console.log(resultDifferenceArray);
