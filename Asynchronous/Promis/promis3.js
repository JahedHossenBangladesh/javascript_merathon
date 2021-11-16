function smartWay(n) {
 return new Promise((resolve,reject) =>{
     setTimeout(() => {
       resolve (n * n);
     }, 2000);
 })
}
smartWay(4).then((msg) => {
  console.log(msg);
    return smartWay(msg);
}).then((msg1) =>{
    console.log(msg1);
    
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("end");
  });
console.log("start");
