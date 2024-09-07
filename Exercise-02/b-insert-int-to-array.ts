////////////////////////=>
/*  a function to insert multiple given integer (not an array) to an array and have a maximum size input. 
+   The array can only have a maximum size from a given input. (if the maximum size of the given 
+   input is 5 than the array can only contain 5 elements). */
////////////////////////=>

/*  Example : 
        maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8 
        The function will return [5, 10, 24, 3, 6] */

const maxInput: number = 5;

function inputIntToArray(max: number, ...integer: number[]) {
  const resultInputIntToArray: number[] = [];

  integer.forEach((value: number, index: number) => {
    if (index < max) {
      resultInputIntToArray.push(value);
    }
  });
  return resultInputIntToArray;
}

const resultInputIntToArray = inputIntToArray(maxInput, 5, 10, 24, 3, 6, 7, 8);
console.log(resultInputIntToArray);
