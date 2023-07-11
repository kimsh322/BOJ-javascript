let [v, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
v = +v;

const adjArr = Array(v + 1)
  .fill(0)
  .map(() => []);

for (let i = 0; i < v; i++) {
  const [cur, ...arr] = input[i].split(" ").map(Number);
  let j = 0;
  while (true) {
    const node = arr[j];
    if (node === -1) break;
    const dist = arr[j + 1];
    adjArr[cur].push([node, dist]);
    j += 2;
  }
}

let visited = Array(v + 1).fill(false);
let endNode = 0;
let endDist = 0;

const dfs = (cur, dist) => {
  if (visited[cur]) return;
  visited[cur] = true;
  for (let [node, nodeDist] of adjArr[cur]) {
    if (!visited[node] && endDist < dist + nodeDist) {
      endNode = node;
      endDist = dist + nodeDist;
    }
    dfs(node, dist + nodeDist);
  }
};

dfs(1, 0);
visited = Array(v + 1).fill(false);
dfs(endNode, 0);
console.log(endDist);
