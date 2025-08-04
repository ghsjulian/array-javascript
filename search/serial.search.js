// Create a function which will search an element in
// each element and if found then return index elese -1

const serialSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === target) return i
    }
    return -1
};

let numbers = [10, 15, 81, 91, 20, 50];
let search = serialSearch(numbers, 91);
console.log(search);
