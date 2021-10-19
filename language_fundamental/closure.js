// How does a closure work in javascript?
// A closure is a function that has access to the parent scope, even after the parent function has closed.
// When a function comes under another function a "Closure " is created

function outer(){
    function inner (){
        console.log("Inner called")
    }
    return inner;
}

const cl = outer();
cl()

// es6 
const outer1 = () =>{
    return () =>{
        console.log("Inner called")
    }
}

const cl1 = outer1();
cl1()

// practice
const addCounter = () =>{
    let count = 0;
    count++;
    return count;
}
console.log(addCounter())
console.log(addCounter())
console.log(addCounter())

// IN clouser
const addCounter1 = () =>{
    let count = 0;
    return () =>{
        count++;
        return `closure count is ${count}` ;

    }
}
const cl3 = addCounter1();
console.log(cl3())
console.log(cl3())
console.log(cl3())
