// generators can help you to pause and resume the code execution

const genFunction = function* (){
console.log("hello");
yield "YieldValue";
console.log("world");
yield "YieldValue";
console.log("and me")
}
const gobj = genFunction();
// gobj.next()
// const o = gobj.next();
// console.log(o)
// console.log(gobj.next())
// console.log(gobj.next())

// for of in generators
// for(let o of gobj){
//     console.log(o)
// }

// In the array
const gobj2 = [...genFunction()];
console.log(gobj2)


function* gen(){
    console.log('hi')
}
function* gen1(){
    // const g = gen();
    // g.next()
    yield* gen();
}
const gl = gen1();
gl.next();

// recursive 
function fact(){
    yield* fact()
}
