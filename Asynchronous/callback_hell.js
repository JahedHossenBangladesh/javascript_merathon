function smartWay(n, callback) {
  setTimeout(() => {
    callback(n * n);
  }, 2000);
}

smartWay(2, function (res) {
  console.log(res);
  smartWay(res,function(res1){
      console.log(res1);
          smartWay(res1,function(res2){
                console.log(res2);
          })
  })
});
