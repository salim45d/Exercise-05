////////////////////////=>
/*  a function from a given array of mixed data types and return the sum of all the number*/
////////////////////////=>

/*  Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3 */

const mixedArray: (string | number | boolean | null | undefined)[] = [
  "3",
  1,
  "string",
  null,
  false,
  undefined,
  2,
];

function mixedData(array: (string | number | boolean | null | undefined)[]) {
  const filterDataType = array.filter(
    (value: string | number | boolean | null | undefined) => {
      return typeof value === "number";
    }
  );

  let resultSumData: number = 0;
  filterDataType.forEach((value: number) => {
    resultSumData += value;
  });

  return resultSumData;
}

const resultMixedData = mixedData(mixedArray);
console.log(resultMixedData);
