let dt = Date.now();
console.log(dt)

let dt1 = new Date();
console.log(dt1.getTime());
console.log(dt1.getHours());
console.log(dt1.getMinutes());
console.log(dt1.getSeconds());
console.log(dt1.getMilliseconds());


let dt2 = new Date();
dt2.setTime(0);
console.log(dt2);


let dt3 = new Date(2021,07,23);
let dt4 = new Date(2021,07,25);
let n = dt4.getTime() - dt3.getTime();
n = (n/1000)/3600/24;
console.log(n);