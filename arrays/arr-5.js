// Count how many times a number appears
// Input  ---> [7,50,7,30,7,70,23]
// Output ---> Target = 7 Is 3 Times

const countOccour = (arr, target) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count += 1;
        }
    }
    return count;
};

console.log(countOccour([7, 50, 7, 30, 7, 70, 23], 7));
