class StaticClass {
    static appVersio = 20.20;
    static test(){
        console.log("StaticClass.test()");
        this.test2();
    }
    static test2(){
        console.log("StaticClass.test2()");
    }
}
StaticClass.test();
console.log(StaticClass.appVersio);
