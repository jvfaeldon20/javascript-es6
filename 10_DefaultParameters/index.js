function addArray(num = []){
    let sum = 0;
    num.forEach((item) => {
        sum += item;
    });
    console.warn(sum);
}

addArray();