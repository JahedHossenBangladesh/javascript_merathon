// how the sum(5)(6) returns 11

const sum = function (a) {
    return function (b) {
        return a + b;
    }
}
const cl = sum(5)
const ans = cl(6)

console.log(ans)

// The alternative 
const ans1 = sum(5)(6);

console.log(ans1)

// arrow function

const sum1 = (a) =>{
    return (b) =>{
        return a + b;
    }
}

const ansInArrowFunction = sum1(2)(9);

console.log(ansInArrowFunction)

// more shortcut in arrow function
const sum2 = a => b => a+b;
const ans2 = sum2(5)(6);
console.log(ans2)


// The practical use of curring

// const PriceCalc = (price) =>{
//     return(dPer) =>{
//         return price * dPer;

//     }
// }

const PriceCalc = price => dPer => price*dPer;


const discountPrice = PriceCalc(100);
console.log(discountPrice(.5))
console.log(discountPrice(.2));
console.log(discountPrice(.1));

// another practice

const multiplication = a => b=> c => a*b*c;

const ansall = multiplication(2)(3);


console.log(ansall(4))
console.log(ansall(5))
console.log(ansall(6))

