const input = require('fs').readFileSync('/dev/stdin').toString().split(" ");
let [a, b] = input.map((el) => +el);
let ast = (a + b) * (a - b);
console.log(ast);