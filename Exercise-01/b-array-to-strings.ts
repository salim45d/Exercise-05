/////////////////// =>
/*  a function that takes an array of words and returns
+   a string by concatenating the words in the array, 
+   separated by commas and - the last word - by an 'and'
*/ //////////////// =>

//  Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

const arr: string[] = ["apple", "banana", "cherry", "date"];

function arrayToStrings(array: string[]) {
  return array.join(", ").replace(/, ([^,]*)$/, ` and $1`);
}

const resultArrayToStrings: string = arrayToStrings(arr);
console.log(resultArrayToStrings);
