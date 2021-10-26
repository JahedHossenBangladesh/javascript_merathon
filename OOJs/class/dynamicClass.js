let getData = 'showData'

class DynamicClass {
    constructor(nDoor,windows){
        this.nDoor = nDoor;
        this.windows = windows;
    }
    [getData](){
        console.log(this.nDoor,this.windows);
    }
}

const obj = new DynamicClass(2,3);
const obj1 = new DynamicClass(4,5);

obj.showData();
obj1.showData();