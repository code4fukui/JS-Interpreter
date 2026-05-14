# JS-Interpreter

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A sandboxed JavaScript interpreter in JavaScript. Execute arbitrary JavaScript code line by line in isolation and safety.

## Demo
Live demo: https://code4fukui.github.io/JS-Interpreter/

## Features
- Execute JavaScript code in a sandboxed environment
- Step through code execution line by line
- Pause and resume code execution
- Serialize and deserialize interpreter state

## Requirements
- None, runs in any modern web browser

## Usage
1. Import the interpreter module:
   ```javascript
   import { Interpreter } from "https://code4fukui.github.io/JS-Interpreter/interpreter.js";
   ```
2. Create a new interpreter instance with your JavaScript code:
   ```javascript
   const myCode = `
   var result = [];
   function fibonacci(n, output) {
     // ...
   }
   fibonacci(16, result);
   alert(result.join(', '));
   `;
   const myInterpreter = new Interpreter(myCode);
   ```
3. Step through the code execution:
   ```javascript
   while (myInterpreter.step()) {
     // Execute one step
   }
   ```

## License
Apache License 2.0