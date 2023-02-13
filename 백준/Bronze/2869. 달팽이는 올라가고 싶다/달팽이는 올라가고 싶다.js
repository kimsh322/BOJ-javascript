const a = require('fs').readFileSync('/dev/stdin').toString().split(" ");
let i = Math.ceil((+a[2] - +a[0]) / (+a[0] - +a[1]));
console.log(i + 1);