// Binary Search Examples...
// Binary search works in only
// Sorted Array....
const binarySearch = (arr, target) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            start += mid;
        } else {
            end -= mid;
        }
    }
    return -1;
};
let numbers = [10, 20, 30, 40, 50, 60, 10, 80, 90];
let search = binarySearch(numbers, 30);
console.log(search);
