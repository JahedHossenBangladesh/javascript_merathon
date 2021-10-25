// call
function callTest(a,b){
    console.log(this)
    // console.log(a,b)
}
let callObj = {
    a:5,
}
callTest.call(callObj,4,5) // {a:5,b:8}
// call is used to change reference or context or value of this object


// apply
function applyTest(a,b,c){
    console.log(this)
    console.log(a,b,c)
}
let applyObj = {
    a:5,
}
applyTest.apply(applyObj,[4,5,8]) // {a:5,b:8}


// bind

function bindTest(a,b){
    console.log(this)
    console.log(a,b)
}
let bindObj = {
    a:0,
}

let bind_Need_Another_Function_For_FinalCall 
= bindTest.bind(bindObj,8,9)
bind_Need_Another_Function_For_FinalCall() 