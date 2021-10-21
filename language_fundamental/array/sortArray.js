let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

fruits.sort(function(a,b) {
    if( a < b) {
        return 1; // if (Banana < Orange)  b will be shift before a)
    }
    if( a > b){
        return -1; // if (Banana > Orange)  a will be shift before b)
    }
    if( a == b){
        return 0; // if (Banana == Orange)  a and b will be stay in the same position)
    }
})

console.log(fruits);