let arr = ["one", "two", "three", "four", "five"];
console.log(arr.push("six")); // 6
console.log(arr); // ["one", "two", "three", "four", "five", "six"]
console.log(arr.pop()); // "six"
console.log(arr); // ["one", "two", "three", "four", "five"]
console.log(arr.shift()); // "one"
console.log(arr); // ["two", "three", "four", "five"]
console.log(arr.unshift("zero")); // 5
console.log(arr); // ["zero", "two", "three", "four", "five"]

console.log(arr.splice(2,1,"new"))  // ["three"]
console.log(arr); // ["zero", "two", "new", "four", "five"]
console.log(arr.splice(2)) 
console.log(arr);// ["zero", "two"]
console.log(arr.splice(2,0,"neew","few"))  // []
console.log(arr);// ["zero", "two", "neew", "few"]
