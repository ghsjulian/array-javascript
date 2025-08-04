// All the methods and properties in arrays

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// Print The Entire Arrays
console.log("[+] Array Is --> ", numbers);

// Print The Tortal Array Size
console.log("[+] Array Length --> ", numbers.length);

// Adding New Item At Last Index
numbers.push(100);
console.log("[+] New Value Added --> ", numbers);

// Adding new item at first index
numbers.unshift(500);
console.log("[+] New Value Added At First Index --> ", numbers);

// Remove last value from array
numbers.pop();
console.log("[+] Last Value Removed From Array --> ", numbers);

// Remove First Value From Array
numbers.shift();
console.log("[+] First Value Removed From Array --> ", numbers);

// Remove A Spescific Value From Array
numbers.splice(0, 3, numbers.length);
console.log("[+] Removed Value From 3 Index --> ", numbers);

// Replace a value in array
numbers[0] = 1000;
console.log("[+] Value replaced in index 0 --> ", numbers);

// Set The Size of Array
// It Has created 100 index in memory
// but it has not any value
// All the index value is undefined
numbers.length = 100;
console.log(numbers.length);
console.log(numbers[50]);

// For more clearify lets run a loop over the array
// It will print 100 times
/*
for (let i = 0; i < numbers.length; i++) {
    console.log("[+] Index ---> " + i);
}
*/

// Add new item in 50 index
numbers[50] = 800;
console.log("[+] Index 50 Is Now --> ", numbers);
