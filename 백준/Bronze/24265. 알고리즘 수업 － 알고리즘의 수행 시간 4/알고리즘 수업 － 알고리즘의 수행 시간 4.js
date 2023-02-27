const a = +require('fs').readFileSync('/dev/stdin').toString().trim();

console.log(a*(a-1)/2);
console.log(2);