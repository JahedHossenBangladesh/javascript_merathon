let str = 'Test23';
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.toLowerCase() === 'test')
console.log(str.replace(23,"!"));

// let chr;
let chr = 'a';
function checkVowel(){
    // ch= prompt('Enter a character');
if(chr === 'a' || chr === 'e' || chr === 'i' || chr === 'o' || chr === 'u'){
    return true;
} else{
    return false;
}
}
console.log(checkVowel());