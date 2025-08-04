// Reverse an array without reverse function 
// Input ---> [10,50,7,30,70,23]
// Output --> [23,70,30,7,50,10]

const reverseArray = (arr)=>{
    let reversed = []
    
    for (let i = arr.length-1; i >= 0 ; i--) {
        reversed.push(arr[i])
    }
    return reversed
}

console.log(reverseArray([10,50,7,30,70,23]))