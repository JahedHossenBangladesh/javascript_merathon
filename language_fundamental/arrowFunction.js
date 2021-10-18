// This object does not work in arrow function
// 'arguments" object is not work in arrow function
// "new" not use in arrow function

// Function expression
const test = function() {} 

const test1 = (a,b) =>{
    console.log(a,b)

}
sum(1,2)

const test2 = (a,b) => a+b;

console.log(test2(1,3));
// IIFE (Immediately Invoked Function Expression)
(
    function(){
        console.log('IIFE')
    }
)();
// IIAF in arrow function

(
    () =>{
        console.log('IIAF')
    }
)