let x = 50
function a (){
    let x = 10  // local to function a
}

function b (){
    console.log(x) // 
}

a()
b() // error : x is not defined cz x is in the a scope

// hoisting in the function  . var key word hoisting but let is not

 let p = 33;
 {
     let p = 34;
     console.log(p)
 }
 console.log(p);

//console.log(z)  // ReferenceError: Cannot access 'z' before initialization 
let z =30;

console.log(z2)
var z2 = 33;