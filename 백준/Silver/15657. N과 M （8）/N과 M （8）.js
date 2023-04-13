const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);
let newArr = [];
let visited = Array(n).fill(0);
let result = "";
const func = (num) => {
  if (num === m) {
    result += newArr.join(" ") + "\n";
    return;
  }
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    newArr[num] = arr[i];
    for (let j = 0; j < i; j++) visited[j] = 1;
    func(num + 1);
    for (let j = 0; j < i; j++) visited[j] = 0;
  }
};
func(0);
console.log(result);