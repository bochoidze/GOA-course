
const nestedArray = [1, [2, 3], [4, [5, 6]], 7];


const flatArray = nestedArray.flat();
console.log(flatArray); 


const fullyFlatArray = nestedArray.flat(Infinity);
console.log(fullyFlatArray); 


function checkElement(array, value) {
    return array.includes(value);
}
console.log(checkElement(fullyFlatArray, 3));
console.log(checkElement(fullyFlatArray, 10)); 


function findIndexOfElement(array, value) {
    return array.indexOf(value);
}
console.log(findIndexOfElement(fullyFlatArray, 4)); 
console.log(findIndexOfElement(fullyFlatArray, 10)); 


function findLastIndexOfElement(array, value) {
    return array.lastIndexOf(value);
}
console.log(findLastIndexOfElement(fullyFlatArray, 6));
console.log(findLastIndexOfElement(fullyFlatArray, 10)); 
