const a = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let b = a.filter(el => el !== '' )
console.log(b.length);