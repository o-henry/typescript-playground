const message = 'Hello World!';

message.toLowerCase();

function fn(x) {
  return x.flip(); // x가 실제로 호출되기 전까지는 error가 발생하지 않는다.
}

const user = {
  name: 'Daniel',
  age: 25,
};

// user.location; // error

function _greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

_greet('Brendan', new Date());
