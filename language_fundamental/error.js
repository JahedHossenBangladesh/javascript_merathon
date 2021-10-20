// try{
//     let a = 1;
//     console.log(a);
//     letb = 2;
//     console.log(b);

// } catch(err){
//     console.log('error found')
//     console.log(err.name);
//     console.log(err.message);
//     console.log(err.stack);
// }

let a = 8;
// let ageError = new Error("invalid age");

try{
    if(a<18){
    //   throw ageError;
    throw new TypeError("invalid age");
    }else{
        console.log('valid age')
    }
}catch(err){
    console.log(err.name);
    console.log(err.message)
}