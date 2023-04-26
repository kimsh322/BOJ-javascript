const [a, input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = a.split(" ").map(Number);
const arr = input.split(" ").map(Number);
arr.sort((a, b) => a - b);
let newArr = [];
let result = [];
let visited = Array(n).fill(false);
const func = (num) => {
  if (num === m) {
    result.push([...newArr]);
    return;
  }
  let prevNum = -1;
  for (let i = 0; i < n; i++) {
    if (visited[i] || arr[i] === prevNum) continue;
    visited[i] = true;
    prevNum = arr[i];
    newArr[num] = arr[i];
    func(num + 1);
    visited[i] = false;
  }
};
func(0);
const output = result.reduce((a, el) => a + el.join(" ") + "\n", "");
console.log(output);