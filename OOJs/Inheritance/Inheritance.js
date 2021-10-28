// By birth what you inheritance from your father 

class Child extends String {
  noc(str){
      console.log(str.length);
  }
}
const obj = new Child ('Test string');
console.log(obj.toLocaleLowerCase());
obj.noc('New string here');
