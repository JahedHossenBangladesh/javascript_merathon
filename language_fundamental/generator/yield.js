function* gen(){
    yield "one";
    yield "two";
}
// const gobj = gen();
// console.log(gobj.next());
// console.log(gobj.next());
// console.log(gobj.next());

// node yield.js 
// { value: 'one', done: false }
// { value: 'two', done: false }
// { value: undefined, done: true }


// const gobj = gen();
// console.log(gobj.return("condition done.."));
// console.log(gobj.next());
// console.log(gobj.next());

// node yield.js
// { value: 'condition done..', done: true }
// { value: undefined, done: true }
// { value: undefined, done: true }

// Real case 
function* gen2(){
    try{
        yield "one";
        yield "two";
    }finally{
        yield "Finally"
    }
}
const g2obj = gen2();

console.log(g2obj.next());

console.log(g2obj.return());

console.log(g2obj.next());
