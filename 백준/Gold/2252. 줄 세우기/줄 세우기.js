const [aa, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = aa.split(" ").map(Number);
const edges = Array(n + 1)
  .fill(0)
  .map(() => []);
const indegree = Array(n + 1).fill(0);

for (let i = 0; i < m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  edges[a].push(b);
  indegree[b]++;
}

const queue = [];
for (let i = 1; i <= n; i++) {
  if (indegree[i] === 0) queue.push(i);
}

let result = "";
let idx = 0;
while (idx < queue.length) {
  const cur = queue[idx++];
  result += cur + " ";
  for (let el of edges[cur]) {
    indegree[el]--;
    if (indegree[el] === 0) queue.push(el);
  }
}

console.log(result);