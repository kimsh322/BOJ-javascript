const input = require('fs').readFileSync('/dev/stdin').toString().split(' ')
let sum = input.reduce((sum,el) => sum + (+el),0)
console.log(sum);