// from es6 onwards there are (...)  used in many places 
// sometimes they are called the rest operator and sometimes the very same(...) are called spread operator

function sum(...nums){

    console.log(nums)
}

sum(4,5)
sum(4,5, 6)

function sum1(a,...b){
  // rest operator should assing in the last not in the first
  console.log(a, b); //3 [ 4, 5, 6 ]
}
sum1(3,4,5,6)

// argument object
function sum3() {
  console.log(arguments);
}

sum3(4, 5);
sum3(4, 5, 6);

const sum4 = () =>{
    console.log(arguments)
}
// arguments object do not work with arrow function cz it is es5 element
// sum4(4,5); //error
// sum4(4,5,6,7); //error