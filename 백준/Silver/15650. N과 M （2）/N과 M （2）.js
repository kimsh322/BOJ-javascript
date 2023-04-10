const input = require("fs").readFileSync('/dev/stdin').toString().trim();
const [n, m] = input.split(" ").map(Number);

let result = "";
let newArr = [];
let visited = Array(n + 1).fill(0);
const func = (num) => {
  if (num === m) {
    result += newArr.join(" ") + "\n";
    return;
  }
  for (let i = num + 1; i <= n; i++) {
    if (visited[i]) continue;
    for (let j = 1; j <= i; j++) visited[j] = 1;
    newArr.push(i);
    func(num + 1);
    newArr.pop();
    for (let j = 1; j <= i; j++) visited[j] = 0;
  }
};
func(0);
console.log(result);