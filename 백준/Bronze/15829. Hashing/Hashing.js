const [l, input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let str = "abcdefghijklmnopqrstuvwxyz";
let r = 31;
let m = 1234567891;
let result = 0;
for (let i = 0; i < +l; i++) {
  result = result + (str.indexOf(input[i]) + 1) * Math.pow(r, i);
  result %= m;
}
console.log(result);