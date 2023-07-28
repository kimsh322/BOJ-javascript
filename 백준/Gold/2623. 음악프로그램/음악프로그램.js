const [aa, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = aa.split(" ").map(Number);
const edge = Array(n + 1)
  .fill(0)
  .map(() => []);
const indegree = Array(n + 1).fill(0);

for (let i = 0; i < m; i++) {
  const [num, ...singers] = input[i].split(" ").map(Number);
  for (let j = 1; j < num; j++) {
    edge[singers[j - 1]].push(singers[j]);
    indegree[singers[j]]++;
  }
}

const queue = [];
let result = "";
let count = 0;
for (let i = 1; i <= n; i++) {
  if (indegree[i] === 0) queue.push(i);
}

while (queue.length) {
  let cur = queue.shift();
  result += cur + "\n";
  count++;
  for (let el of edge[cur]) {
    indegree[el]--;
    if (indegree[el] === 0) queue.push(el);
  }
}

console.log(count === n ? result : 0);