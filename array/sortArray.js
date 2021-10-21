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


const employees = [
    {
        eN0:1001, sarary:4000, name:'John',
    },
    {
        eN0:1002, sarary:5000, name:'Mike',
    },
{
    eN0:1003, sarary:6000, name:'Mary',
},
{
    eN0:1004, sarary:7000, name:'Sara',
}
]

employees.sort(function(a,b) {
    if(a.salary < b.salary){
        return -1;
    }
    if(a.salary > b.salary){
        return 1;
    }
    if(a.salary == b.salary){
        return 0;
    }
})

console.log(employees);
