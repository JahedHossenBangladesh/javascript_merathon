let arr = [1, 2, 3, 4, 5];

for (let i of arr){
    console.log(i)
}
// string maps sets etc are 

let obj = {
    start:10,
    end:15,
}
// for of loop use for iterables

let itr = arr[Symbol.iterator]();
console.log(itr)
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

let obj2 ={
    start:30,
    end:40,
}

obj2[Symbol.iterator] = function(){
    let itr ={
        next(){
            if(obj2.start <= obj2.end){
                return{
                    value:obj2.start++,
                    done:false,
                }
            }else{
                return{done:true}
            }
        }
    }
    return itr;
}

for (let i of obj2){
    console.log(i)
}
// The shortcut
let obj3 = {
    start:10,
    end:20,
    [Symbol.iterator](){
        return{
            next(){
                if(obj.start <= obj.end){
                    return{
                        value:obj.start++,
                        done:false,
                    }
                }else{
                    return{done:true}
                }
            }
        }
    }
}

for(let i of obj3){
    console.log(i)
}