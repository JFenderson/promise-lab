slowMath.add(6,2)
.then((sum) => {
    console.log(sum);
    return slowMath.multiply(sum, 2);
}).then((product) => {
    console.log(product);
    return slowMath.divide(product, 4);
}).then((dividend) => {
    console.log(dividend);
    return slowMath.subtract(dividend, 3);
}).then((difference) =>{
    console.log(difference);
    return slowMath.add(difference, 98);
}).then((sum2)=> {
    console.log(sum2);
    return slowMath.remainder(sum2, 2);
}).then((dividend2) =>{
    console.log(dividend2);
    return slowMath.multiply(dividend2, 50);
}).then((product2) =>{
    console.log(product2);
    return slowMath.remainder(product2, 40);
}).then((dividend3) =>{
    console.log(dividend3);
    return slowMath.add(dividend3, 32);
}).then((sum3) =>{
    console.log(`The final result is ${sum3}`);
}).catch((err)=>{
    console.log(err);
})
    
