const num = +require("fs").readFileSync('/dev/stdin').toString().trim();
let result = "long ".repeat(Math.floor(num / 4)) + "int";
console.log(result);