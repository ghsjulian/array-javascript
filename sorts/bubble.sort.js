// Creating And Understanding Buble Sorts
const bubbleSort = arr => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};

let numbers = [7, 9, 1, 4, 8, 6, 0, 5, 0, 3, 2];
let sort = bubbleSort(numbers);
console.log(sort)
