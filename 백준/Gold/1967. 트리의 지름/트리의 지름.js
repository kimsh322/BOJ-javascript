let [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
n = +n;
const adjArr = Array(n + 1)
  .fill(0)
  .map(() => []);
const isLeaf = Array(n + 1).fill(true);
for (let i = 0; i < n - 1; i++) {
  const [parent, child, weight] = input[i].split(" ").map(Number);
  isLeaf[parent] = false;
  adjArr[parent].push([child, weight]);
  adjArr[child].push([parent, weight]);
}

let max = 0;
const visited = Array(n + 1).fill(false);
const dfs = (node, dist) => {
  for (let el of adjArr[node]) {
    if (!visited[el[0]]) {
      visited[el[0]] = true;
      dfs(el[0], dist + el[1]);
      visited[el[0]] = false;
    }
  }
  max = Math.max(max, dist);
};

for (let i = 1; i <= n; i++) {
  if (isLeaf[i]) {
    visited[i] = true;
    dfs(i, 0);
    visited[i] = false;
  }
}
console.log(max);