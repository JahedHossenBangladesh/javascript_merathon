let es = ['es6', 'es5', 'es7', 'es8'];

for (let i = 0; i < es.length; i++) {
  console.log(es[i]);
}

for (let elem in es){
    console.log(elem);

}

for (let elem of es){
    console.log(elem)
}

es.forEach((elemnt,index) =>{
    console.log(elemnt,index);

})

// forEach is not brack 

es.forEach((elemnt, index) => {
  if(index === 1){
    break //Illegal break statement
  }
});
// forEach is not brack
