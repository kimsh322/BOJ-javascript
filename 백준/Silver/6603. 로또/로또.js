const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let i = 0;
let result = "";

while (true) {
  if (input[i] === "0") break;
  const [n, ...numbers] = input[i].split(" ").map(Number);
  const dfs = (num, arr) => {
    if (arr.length === 6) {
      result += arr.join(" ") + "\n";
      return;
    }
    for (let i = num; i < n; i++) {
      dfs(i + 1, [...arr, numbers[i]]);
    }
  };
  dfs(0, []);
  i++;
  result += "\n";
}

console.log(result);