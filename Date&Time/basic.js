// 4 ways to make date and time
const dt = new Date(); // utc time
console.log(dt)
console.log(new Date())

// new Date(year, month, day, hours, minutes, seconds, milliseconds);
const dt2 = new Date(2020, 8, 23, 11, 10, 10, 10); // 0 is january of the month
console.log(dt2)
// you cant avoid the month and year and avoid day is the first day

const miliSec = new Date(1);
console.log(miliSec.getTime())

const milliSec = new Date(332223)
console.log(milliSec)