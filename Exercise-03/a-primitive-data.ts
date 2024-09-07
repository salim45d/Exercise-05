////////////////////////=>
/*  a function that will return primitive data types only.*/
////////////////////////=>

/*  let arr = [1, [], undefined, {}, "string", {}, []];
=> The function will return [1, undefined, “string”]*/

const mixedArray: (string | number | {} | [] | undefined | boolean | null)[] = [
  1,
  [],
  undefined,
  {},
  "string",
  {},
  [],
  false,
  null,
];

function filterMixedData(
  array: (string | number | {} | [] | undefined | boolean | null)[]
) {
  const filterDataType = array.filter(
    (value: string | number | {} | [] | undefined | boolean | null) => {
      return typeof value !== "object" || value === null;
    }
  );
  return filterDataType;
}

const resultFilterMixedData = filterMixedData(mixedArray);
console.log(resultFilterMixedData);
