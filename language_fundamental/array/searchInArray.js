// arrName.indexof(searchElement,[startIndex]);
// arrName.lastIndexOf(searchElement,[startIndex]);
// arrName.includes(searchElement,[startIndex]);

let arr = ["one", "two", "three", "four", "five"];
console.log(arr.indexOf("three"))
console.log(arr.lastIndexOf("three",1))
console.log(arr.includes("four",2))


let salary = [50000, 60000, 70000, 80000, 90000];
const rVal = salary.find((Element) =>{
    return Element > 50000;
})
console.log(rVal) // 60000

// find and findIndex method return undefine and filter method return array


let salary1 = [50000, 60000, 70000, 80000, 90000,2000];
const rVal1 = salary1.findIndex((element) => {
  return element > 50000;
});
console.log(rVal1); //1 

// filter
let salary2 = [50000, 60000, 70000, 80000, 90000];
const rVa2 = salary2.filter((element) => {
  return element > 50000;
});
console.log(rVa2); // [60000, 70000, 80000, 90000]