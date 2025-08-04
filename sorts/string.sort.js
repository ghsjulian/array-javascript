var tempArr = ["a", "b", "c", "d", "e", "f", "g", "h","k","x"];

const matchStr = str => {
    for (let i = 0; i < str.length; i++) {
        if (tempArr.includes(str[i])) {
            console.log(tempArr[i]);
        }
    }
};

let str = "ghacdfbe";
matchStr(str);
