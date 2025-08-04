// Check if array is palindrome

const isPalindrome = arr => {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        if (arr[start] !== arr[end]) return false;
        start++;
        end--;
    }
    return true;
};

console.log(isPalindrome([10, 50, 70, 30, 70, 23]));
