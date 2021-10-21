let arr = [2,4,6,8,10];
let result = arr.reduce((acc,cur) =>{
    return acc + cur
})
console.log(result);

let accumulatorSum = arr.reduce((acc,cur) =>{
    return acc + cur;

},10);
console.log(accumulatorSum);


let  salary = [
    {id:1, name:'A', salary:1000},
    {id:2, name:'B', salary:2000},
    {id:3, name:'C', salary:3000},
    {id:4, name:'D', salary:4000},
]

let totalSalary = salary.reduce((acc,cur) =>{
    return acc + cur.salary;
},0);
console.log(totalSalary); // 10000;
// $ node flatten2DArray.js 
// 30
// 40
// 10000
