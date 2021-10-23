let obj = {} // empty object literal
obj.name = 'John' // add a property
obj.age = 30 // add another property
obj.getData = function (){
    console.log(obj.name,obj.age)
} // add a method

console.log(obj)

// the proper way to create an object literal

let obj2 = { // object literal
    name: 'John', // property
    age: 30, // property
    getData: function (){ // method
        console.log(obj2.name,obj2.age)
    }
};

console.log(obj2)



// es6 syntax
let obj3= {
  // object literal
  name: "John", // property
  age: 30, // property
  getData() {
    // method
    console.log(obj3.name, obj3.age);
  },
};
obj3.getData();

let obj4 = {
    pCode: {id: 1, sp: 'a'},
    pName: 'apple',
    getData() {
        console.log(this.pCode.id, this.pCode.sp, this.pName);
    }
}
obj4.getData();


// dynamic key 
let tv = 'pCode';
let obj5 = {
    [tv]:1001 ,
    pName: 'apple',
    getData() {
        console.log(this.pCode, this.pName);
    }
}
obj5.getData();

// dynamic value 2 proparty short hand syntax

let tv1 = 'pCode';
let obj6 = {
    [tv1]:1001 ,
    pName: 'apple',
    ['get' + 'Data'](){
        console.log(this.pCode, this.pName);
    }
}
obj6.getData();

// property value short hand 
let price = 200;
let productName = 'Banana';

let pobj = {
    price,
    productName,
}

console.log(pobj); // { price: 200, productName: 'Banana' }

let object = {a:'first'};
let object1 = object;
object1.a = 'second';
console.log(object.a); //  'second' 