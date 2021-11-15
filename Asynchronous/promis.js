let pr = new Promise((resolve,reject) =>{
    resolve("data is processess")
})

pr.then((msg) =>{
    console.log(msg)
}).catch((err) =>{
    console.log(err)
}).finally(() =>{
    console.log('finally')
})