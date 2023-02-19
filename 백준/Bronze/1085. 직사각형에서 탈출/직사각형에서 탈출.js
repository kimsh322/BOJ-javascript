const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(el => +el);

const arr = [input[0], input[2] - input[0], input[1], input[3] - input[1]];
console.log(Math.min(...arr));