// Find the largest number in an array 
// Input ---> [10,50,7,30,70,23]
// Output --> 70

const findMax = (arr)=>{
    let max = arr[0]
    
    for (let i = 1; i < arr.length; i++) {
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}

console.log(findMax([10,50,7,30,70,23]))