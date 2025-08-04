// Remove duplicate items from an array
// Input ---> [5,7,5,8,3,5,10]
// Output --> [5,7,8,3,10]

const removeDuplicateUsingSet = arr => {
    let uniqueSet = new Set();
    for (let i = 0; i < arr.length; i++) {
        uniqueSet.add(arr[i]);
    }
    return [...uniqueSet];
};
const removeDuplicate = arr => {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    return unique;
};

console.log(removeDuplicate([5, 7, 5, 8, 3, 5, 10]));
console.log(removeDuplicateUsingSet([5, 5,5,5]));
