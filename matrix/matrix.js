const matrix = n => {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = new Array(i);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            arr[i][j] = -1;
        }
    }
    console.log(parseInt(n / 2));
    return arr;
};

console.log(matrix(5));
