////////////////////////=>
/*   a function to find duplicate values in an array*/
////////////////////////=>

/* Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5] */

const array: number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5];

function duplicateValues(array: number[]) {
  const duplicateValues: number[] = [];

  array.forEach((value: number, index: number) => {
    if (array.indexOf(array[index]) !== array.lastIndexOf(array[index])) {
      duplicateValues.push(value);
    }
  });

  const filterDuplicateValues = duplicateValues.filter(
    (value: number, index: number) => {
      return duplicateValues.indexOf(value) === index;
    }
  );

  return filterDuplicateValues;
}

const resultDuplicateValues: number[] = duplicateValues(array);
console.log(resultDuplicateValues);
