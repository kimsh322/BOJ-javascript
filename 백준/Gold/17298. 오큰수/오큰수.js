const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let n = +input[0];
let arr = input[1].split(" ").map(Number);
let stack = [0];

for (let i = 1; i < arr.length; i++) {
  while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
    let idx = stack.pop();
    arr[idx] = arr[i];
  }
  stack.push(i);
}
while (stack.length > 0) {
  let idx = stack.pop();
  arr[idx] = -1;
}
console.log(arr.join(" "));