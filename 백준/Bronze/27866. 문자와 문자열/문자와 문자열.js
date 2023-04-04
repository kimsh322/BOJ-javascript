const [input,i] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(input[+i-1]);