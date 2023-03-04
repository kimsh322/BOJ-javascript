const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

let stack = [];
let cur = 1;
let result = "";

for (let i = 0; i <= +n; i++) {
  for (let j = cur; j <= +input[i]; j++) {
    stack.push(j);
    result += "+" + "\n";
    cur++;
  }
  if (+input[i] < stack[stack.length - 1]) {
    result = "NO";
    break;
  }
  if (+input[i] === stack[stack.length - 1]) {
    stack.pop();
    result += "-" + "\n";
  }
}
console.log(result);