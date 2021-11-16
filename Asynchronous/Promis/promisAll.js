let p1 = new Promise ((resolve, reject) => {
setTimeout(() =>{
    resolve('p1')
},2000)
})
let p2 = new Promise ((resolve,reject) =>{
    setTimeout(() =>{
        reject('p2')
    },4000)
})
let p3 = new Promise((resolve,reject) =>{
    setTimeout(() =>{
        resolve('p3')
    },1000)
})

Promise.all([p3,p2,p1]).then((msg) =>{
    console.log(msg)
}).catch((err) =>{
    console.log(err)
})