const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const n = +input[0];
const m = +input[1];
const adj = Array(n)
  .fill(0)
  .map(() => Array(n).fill(Number.MAX_SAFE_INTEGER));

for (let i = 0; i < n; i++) adj[i][i] = 0;

for (let i = 2; i < m + 2; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  adj[a - 1][b - 1] = Math.min(adj[a - 1][b - 1], c);
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      adj[j][k] = Math.min(adj[j][k], adj[j][i] + adj[i][k]);
    }
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (adj[i][j] === Number.MAX_SAFE_INTEGER) adj[i][j] = 0;
  }
}

let result = "";
for (let i = 0; i < n; i++) {
  result += adj[i].join(" ") + "\n";
}
console.log(result);