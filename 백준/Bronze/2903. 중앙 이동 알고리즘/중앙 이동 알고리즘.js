const n = +require("fs").readFileSync('/dev/stdin').toString().trim();
let a = 1+Math.pow(2,n);
console.log(Math.pow(a,2));