const [aa, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [v, e] = aa.split(" ").map(Number);

const edges = [];
for (let i = 0; i < e; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  edges.push([a, b, c]);
}
edges.sort((a, b) => a[2] - b[2]);

const parent = [];
for (let i = 0; i <= v; i++) parent.push(i);

const findRoot = (x) => {
  if (parent[x] === x) return x;
  return findRoot(parent[x]);
};

const compareRoot = (a, b) => {
  const x = findRoot(a);
  const y = findRoot(b);
  if (x === y) return true;
  return false;
};

const mergeGraph = (a, b) => {
  const x = findRoot(a);
  const y = findRoot(b);
  if (x < y) parent[y] = x;
  else parent[x] = y;
};

let answer = 0;
let count = 0;
for (let i = 0; i < e; i++) {
  const [v1, v2, w] = edges[i];
  if (compareRoot(v1, v2)) continue;
  answer += w;
  mergeGraph(v1, v2);
  count++;
  if (count === v - 1) break;
}
console.log(answer);