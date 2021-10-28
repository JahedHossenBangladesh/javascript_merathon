class Parent{
    constructor(a){
        this.a = a;
        console.log("Parent constructor");
    }
    parentMethod(){
        console.log("Parent method",this.a);
    }
}

class Child extends Parent{}

let obj = new Child(12);
console.log(obj);

obj.parentMethod();