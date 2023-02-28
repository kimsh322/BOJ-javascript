const input = +require("fs").readFileSync('/dev/stdin').toString().trim();
let a =
  Math.log2(input) === Math.floor(Math.log2(input))
    ? Math.log2(input) - 1
    : Math.floor(Math.log2(input));
let result = (input - Math.pow(2, a)) * 2;
console.log(result);