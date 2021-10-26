function ModernClass (windows){
    console.log("ModernClass");
    this.windows = windows;

}
let obj = new ModernClass(10);
console.log(obj.windows);
let obj1 = new ModernClass(20);
console.log(obj1.windows);