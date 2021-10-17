// compiler automatic add semicolon  is call ASI

let a = 4*
5 
console.log(a)

function test(){
    return {
        a:5
    }
}
const obj = test();
console.log(obj)

// Question 1 
// Should you terminate all lines by a ";"?
// it is a good practice to have a ";" at the end
// can 'use strict' statement or the strict mode change the behavior of Asi?
// No use strict does not mean you have to end all lines with ";"

