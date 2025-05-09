let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];


let mergedArray = arr1.concat(arr2);
console.log("After concat:", mergedArray);


mergedArray.copyWithin(5, 0, 3);
console.log("After copyWithin:", mergedArray);


mergedArray.fill(0, 6);
console.log("After fill:", mergedArray);


mergedArray.pop();
console.log("After pop:", mergedArray);


mergedArray.shift();
console.log("After shift:", mergedArray);


mergedArray.unshift(100, 200);
console.log("After unshift:", mergedArray);


mergedArray.splice(2, 2, ...arr3);
console.log("After splice:", mergedArray);


let slicedArray = mergedArray.slice(-5);
console.log("After slice:", slicedArray);


let joinedString = slicedArray.join(",");
console.log("After join:", joinedString);