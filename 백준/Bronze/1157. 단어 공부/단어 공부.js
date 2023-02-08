const a = require("fs").readFileSync("/dev/stdin").toString().split("");
const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let result = Array(26).fill(0);
for (let el of a) {
  if (alpha.indexOf(el.toUpperCase()) !== -1)
    result[alpha.indexOf(el.toUpperCase())]++;
}
let origin = [...result];
result.sort((a, b) => b - a);
if (result[0] === result[1]) console.log("?");
else console.log(alpha[origin.indexOf(result[0])]);