let arr = [1, 2, 3, 4, 5];
 arr.map(function (item,index) {
    console.log(item,index);
});

let arr2 = arr.map(elem => elem * elem);
console.log(arr2);


// Length of a array

let fruts = ['apple', 'banana', 'orange'];
let frutsLength = fruts.map(elem => elem.length);
console.log(frutsLength);

// square root of an array
let num = [25,22,20,55,60];
let sqrt = num.map(elem => Math.sqrt(elem));
console.log(sqrt);

// find the product Name;

let products = [
    {id: 1, name: 'laptop', price: 100},
    {id: 2, name: 'mobile', price: 200},
    {id: 3, name: 'tv', price: 300},
    {id: 4, name: 'shoe', price: 400},
]

let productName = products.map(elem => elem.name);
console.log(productName);