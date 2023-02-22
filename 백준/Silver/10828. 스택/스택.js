const input = require("fs").readFileSync('/dev/stdin').toString().split("\n");
let arr = [];
let result = "";
for (let i = 1; i <= +input[0]; i++) {
  let command = input[i].split(" ");

  if (command[0] === "push") arr.push(+command[1]);
  if (command[0] === "pop") {
    if (arr.length === 0) result += -1 + "\n";
    else result += arr.pop() + "\n";
  }
  if (command[0] === "size") result += arr.length + "\n";
  if (command[0] === "empty") {
    if (arr.length === 0) result += 1 + "\n";
    else result += 0 + "\n";
  }
  if (command[0] === "top") {
    if (arr.length === 0) result += -1 + "\n";
    else result += arr[arr.length - 1] + "\n";
  }
}
console.log(result);