console.log(this)
function test (){
    console.log(this)
}
test()

const obj = {
    test(){
        console.log(this)
        
    }
}
obj.test();

const objWithArrow = {
    test: () => {
        console.log(this)
        // this does not work in arrow functions
        
    }       
}
objWithArrow.test();