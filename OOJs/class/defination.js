// make mode of a house and make it a class
// make a blue print  and make other as like it or modifie it

// class House {
//     constructor(){
//         console.log('constructor is called')
//     }
// }
// const obj = new House()
// const obj1 = new House()


class House {
  constructor(nDoors,windows) {
this.nDoors = nDoors;
this.windows = windows;
}
showData(){
    console.log(this.nDoors,this.windows)
}
}
const obj = new House(4,5);
const obj1 = new House(2,5);
obj.showData();
obj1.showData();
