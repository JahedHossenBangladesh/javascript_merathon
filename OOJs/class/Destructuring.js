// object destructuring

const obj = {
    pCode:1000,
    pName:'John'
  
}
const {pAge=20,pName,pCode} = obj;
console.log(pCode,pName,pAge);

function test() {
    const obj = {
        pCodes:1000,
        pNames:'John'
      
    }
    return obj;
}
const {pCodes,pNames} = test();
console.log(pCodes,pNames);