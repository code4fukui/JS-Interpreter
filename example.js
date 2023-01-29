import { Interpreter } from "./interpreter.js";

// const src = "6 * 7";

// can't use let/const
const src = `
var result = [];
function fibonacci(n, output) {
  var a = 1, b = 1, sum;
  for (var i = 0; i < n; i++) {
    output.push(a);
    sum = a + b;
    a = b;
    b = sum;
  }
}
fibonacci(16, result);
//console.log(result.join(', '));
result.join(', ');
`;
const myInterpreter = new Interpreter(src);
myInterpreter.run();
console.log(myInterpreter.value);
