const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let arr = [];
for (let i = 0; i < n; i++) arr.push(input[i].split(" ").map(Number));
let result = Array(+n).fill(0).map(() => Array(+n).fill(0));
const dfs = (cur, start, visited) => {
  for (let i = 0; i < n; i++) {
    if (arr[cur][i] === 1 && !visited[i]) {
      visited[i] = 1;
      result[start][i] = 1;
      dfs(i, start, visited);
    }
  }
};

for (let i = 0; i < n; i++) {
  let visited = Array(+n).fill(0);
  dfs(i, i, visited);
}
for (let i = 0; i < n; i++) console.log(result[i].join(" "));
