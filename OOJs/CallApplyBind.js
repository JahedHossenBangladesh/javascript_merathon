// call
function callTest(a,b){
    console.log(this)
}
let callObj = {
    a:5,
    b:8
}
callTest.call(callObj,1,2) // {a:5,b:8}