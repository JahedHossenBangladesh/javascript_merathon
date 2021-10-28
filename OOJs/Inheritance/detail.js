class Parent{
    constructor(){
        console.log("Parent constructor");
    }
    parentMethod(){
        console.log("Parent method");
    }
}

class Child extends Parent{}

let obj = new Child();
console.log(obj);

obj.parentMethod();