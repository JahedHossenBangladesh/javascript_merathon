let pr = new Promise((resolve,reject) =>{
setTimeout(() =>{
    resolve('done')
},4000)

})

pr.then((msg) =>{
    console.log(msg)
}).catch((err) =>{
    console.log(err)
}).finally(() =>{
    console.log('end')
})
console.log('start')