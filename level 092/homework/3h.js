let mixedArray = [1, 'two', 3, 'four', 5];

let extendedArray = mixedArray.concat([true, false]);
console.log("After concatenation:", extendedArray);

extendedArray.copyWithin(0, 2, 4);
console.log("After copyWithin:", extendedArray);


extendedArray.fill(0, 4, 7);
console.log("After fill:", extendedArray);

extendedArray.pop();
console.log("After pop:", extendedArray);

extendedArray.shift();
console.log("After shift:", extendedArray);


extendedArray.unshift(null, undefined);
console.log("After unshift:", extendedArray);