const dt = new Date();
// console.log(dt.getFullYear());
// console.log(dt.getMonth());
// console.log(dt.getDate());
// console.log(dt.getDay());
// console.log(dt.getUTCDate());

// setter of date
dt.setFullYear(2020);
console.log(dt);
dt.setMonth(0,23)
console.log(dt);
dt.setDate(23);
console.log(dt);

let newDt = Date.parse('2020-01-23');
console.log(newDt);

// find the current month
let date = new Date();
let arrayOfMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

console.log(arrayOfMonths[date.getMonth()])

// find the date before 50 days of the given date?
let date1 = new Date();
date1.setDate(date1.getDate() - 50);
console.log(date1);

// what will be the output if you add 35 as date in Date() constructor?
let date2 = new Date(2020, 0, 35);
console.log(date2)  //2020-02-03T18:00:00.000Z



