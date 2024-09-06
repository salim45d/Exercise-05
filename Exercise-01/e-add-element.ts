////////////////////////=>
/* a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array*/
////////////////////////=>

/*  Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4] 
    Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7] */

const elements: number[] = [1, 2, 3, 4];
const newElement: number = 7;

function addNewElement(elements: number[], newElement: number) {
  for (let i: number = 0; i < elements.length; i++) {
    if (elements[i] === newElement) {
      return elements;
    } else if (i === elements.length - 1) {
      elements.push(newElement);
      return elements;
    }
  }
}

const resultAddNewElement = addNewElement(elements, newElement);
console.log(resultAddNewElement);
