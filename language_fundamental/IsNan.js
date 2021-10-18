let a = 5
let b =4
console.log(4*'aa')
if( !isNaN(a*b)){
    console.log('is number ')
}else{
    console.log('is Nan')
}

console.log(isFinite(a*"jahed")) // false
console.log(isFinite(5*6)) //true
console.log(isFinite(Number.MAX_VALUE *4)) //false
console.log(isFinite(Infinity)) //false 

// Nan == Nan is false
// isNan is not a number 
// isFinite find Nan and Infinity