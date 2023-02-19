const a = require('fs').readFileSync('/dev/stdin').toString().split(' ')
let diff = Math.abs(+a[0] - (+a[1]));
console.log(diff);