let arr = [88, 99, 77, 66, 55, 44, 33, 22, 11];
let [a, b, c, d, e, f, g, h, i] = arr;

console.log(a)

function test (){
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
let [x, y, z, ...rest] = test();

console.log(x, y, z, rest);
// 1 2 3 [4, 5, 6, 7, 8, 9, 10]

let [x1, , x3, ...other] = test();
console.log(x1, x3, other); // 1, 3, [4, 5, 6, 7, 8, 9, 10]

let a1= 4;
let b1 = 5;
[a1, b1] = [b1, a1];
console.log(a1, b1); // 5 4

let arr1 = [4,5,6]

let [a2,...b2] = arr1;
console.log(a2, b2); // 4, [5, 6]

let arr3 = [4]
let [a3,b3=0] = arr3;
console.log(a3,b3) //4,0;
