const num = +require("fs").readFileSync('/dev/stdin').toString().trim();
let a = 'long '
let result = a.repeat(Math.floor(num / 4)) + "int";
console.log(result);