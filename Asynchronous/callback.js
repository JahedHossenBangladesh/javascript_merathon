
function fetchData(cb){
setTimeout(() =>{
   let data = {
        pCode:'333',
        pName:'Pizza'
    }
    cb(data);
},2000);
}

// function displayData(){
//     console.log(data);
//     console.log('end')
// }
console.log('start');
// fetchData();
// displayData();

fetchData(function(data){
    console.log(data);
    console.log('end');
})