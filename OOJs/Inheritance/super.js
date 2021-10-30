class Parent{
    constructor(a){
        this.a = a;
        console.log("Parent constructor",this.a);
    }
    method(){
        console.log("Parent method",this.a);
    }
}
class Child extends Parent{
    constructor(a){
        super(a)
    }
childMethod(){
    super.method()
}

}
let obj = new Child(12);
console.log(obj);
obj.method();