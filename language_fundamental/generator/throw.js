function* gen2() {
  try {
    yield "one";
    yield "two";
  } catch (err){
    console.log("error: " + err)
  }
}
const g2obj = gen2();

console.log(g2obj.next());

console.log(g2obj.throw());

