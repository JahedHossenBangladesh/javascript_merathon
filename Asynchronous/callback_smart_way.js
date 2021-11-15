function smartWay(n,callback){
    setTimeout(() =>{
        callback(n *n)
    },2000)
}

smartWay(2,function(res) {
    console.log(res)
})
