////////////////// =>
/* a function from a given array of numbers and return the second smallest number */
////////////////// =>

//  Example : numbers = [5, 3, 1, 7, 2, 6] → 2

const numbers: number[] = [5, 3, 1, 7, 2, 6];

function secondSmallest(array: number[]) {
  array.sort((w: number, z: number) => {
    return w - z;
  });
  return array[1];
}

const resultSecondSmallest: number = secondSmallest(numbers);
console.log(resultSecondSmallest);
