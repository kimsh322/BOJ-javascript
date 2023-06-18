let [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
n = +n;
const adjArr = Array(n + 1)
  .fill(0)
  .map(() => []);

for (let i = 0; i < n - 1; i++) {
  const [parent, child, weight] = input[i].split(" ").map(Number);
  adjArr[parent].push([child, weight]);
  adjArr[child].push([parent, weight]);
}

let endNode = 0;
let endDist = 0;
let visited = Array(n + 1).fill(false);
const dfs = (node, dist) => {
  if (visited[node]) return;
  visited[node] = true;
  for (let el of adjArr[node]) {
    if (!visited[el[0]]) {
      if (el[1] + dist > endDist) {
        endNode = el[0];
        endDist = el[1] + dist;
      }
      dfs(el[0], el[1] + dist);
    }
  }
};

dfs(1, 0);
visited = visited.map((el) => false);
dfs(endNode, 0);
console.log(endDist);