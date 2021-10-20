let obj3 = {
  start: 10,
  end: 20,
  // [Symbol.iterator]:function*() {
  //  for(let ctr = this.start; ctr <= this.end; ctr++){
  //      yield ctr;
  //  }
  // },
*[Symbol.iterator](){
  for(let ctr = this.start; ctr <= this.end;ctr++){
    yield ctr;
  }
}

};
console.log([...obj3])  
// [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]


for (let i of obj3) {
  console.log(i);
}
//  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
