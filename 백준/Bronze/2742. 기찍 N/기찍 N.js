const input = require('fs').readFileSync('/dev/stdin').toString();
let result = "";
for (let i = +input; i >= 1; i--) {
  result += i + "\n";
}
console.log(result);