const input = require('fs').readFileSync('/dev/stdin').toString().split(" ");
let sum = input.reduce((a, el) => a + el * el, 0);
console.log(sum % 10);