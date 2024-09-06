////////////////// =>
/* x function to get the lowest, highest and average value in the array (with and without sort function)*/
////////////////// =>

// Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

const nums: number[] = [12, 5, 23, 18, 4, 45, 32];

interface IObject {
  lowest: number;
  highest: number;
  average: number;
}

/////////////////////
// WITH SORT NUMBER//
////////////////////

function withSort(array: number[]) {
  const resultObject: IObject = { lowest: 0, highest: 0, average: 0 };

  nums.sort((x: number, y: number) => {
    return x - y;
  });
  resultObject.lowest = nums[0];

  nums.sort((x: number, y: number) => {
    return y - x;
  });
  resultObject.highest = nums[0];

  nums.forEach((value: number) => {
    resultObject.average += value;
  });
  resultObject.average /= nums.length;

  return resultObject;
}

const withSortResult: {} = withSort(nums);
console.log(withSortResult);

//////////////////
// WITHOUT SORT //
//////////////////

function withoutSort(array: number[]) {
  const resultObject: IObject = { lowest: 0, highest: 0, average: 0 };

  array.forEach((value: number, index: number) => {
    if (index === 0) {
      resultObject.lowest = resultObject.highest = value;
    } else if (value < resultObject.lowest) {
      resultObject.lowest = value;
    } else if (value > resultObject.highest) {
      resultObject.highest = value;
    }
    resultObject.average += value;
  });
  resultObject.average /= array.length;

  return resultObject;
}

const withoutSortResult: {} = withoutSort(nums);
console.log(withoutSortResult);
