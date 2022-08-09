var message = "Hello World!";
message.toLowerCase();
function fn(x) {
  return x.flip(); // x가 실제로 호출되기 전까지는 error가 발생하지 않는다.
}
var user = {
  name: "Daniel",
  age: 25,
};
// user.location; // error
function greet(person, date) {
  console.log("Hello ".concat(person, ", today is ").concat(date, "!"));
}
greet("Brendan", Date());
