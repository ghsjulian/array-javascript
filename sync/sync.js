const getName = async a => {
    return new Promise((resolve, reject) => {
        if (a) resolve(5+7);
        else reject();
    });
};

console.time();
getName("ghs")
    .then(a => {
        console.log(a);
    })
    .catch(err => {
        console.log(err);
    });
console.timeEnd();
