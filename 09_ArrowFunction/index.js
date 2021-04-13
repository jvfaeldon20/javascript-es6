function addnum(...num){
    // console.warn(num);
    let sum =  num.reduce((x,y) => x +y );
    console.warn(sum);
}

addnum(1,2,3,4,5);