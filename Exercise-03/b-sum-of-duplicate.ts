////////////////////////=>
/*  function from the below array of number that will return sum of duplicate values. */
////////////////////////=>

/*  let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
=> The function will return 40*/

const numbers: number[] = [10, 20, 40, 10, 50, 30, 10, 60, 10];

function duplicateValues(array: number[]) {
  const duplicateValues: number[] = [];

  array.forEach((value: number, index: number) => {
    if (array.indexOf(array[index]) !== array.lastIndexOf(array[index])) {
      duplicateValues.push(value);
    }
  });

  let duplicateSum = 0;
  duplicateValues.forEach((value: number) => {
    duplicateSum += value;
  });

  return duplicateSum;
}

const resultDuplicateValue = duplicateValues(numbers);
console.log(resultDuplicateValue);
