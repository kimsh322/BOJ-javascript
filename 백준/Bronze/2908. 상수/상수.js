const a = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let first = +a[0].split("").reverse().join("");
let second = +a[1].split("").reverse().join("");
if (first > second) console.log(first);
else console.log(second);