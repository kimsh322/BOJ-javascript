const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = Array(n + 1)
  .fill(1)
  .map(() => []);
for (let i = 1; i <= m; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  arr[a].push(b);
  arr[b].push(a);
}

const dfs = (node) => {
  isChecked[node] = true;
  arr[node].forEach((el) => {
    if (!isChecked[el]) return dfs(el);
  });
};
let result = 0;
let isChecked = [];
for (let i = 1; i <= n; i++) {
  if (!isChecked[i]) {
    dfs(i);
    result++;
  }
}
console.log(result);