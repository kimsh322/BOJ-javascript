let [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
n = +n;
const coord = [[0, 0]];
for (let i = 0; i < n; i++) {
  coord.push(input[i].split(" ").map(Number));
}

const edges = [];
for (let i = 1; i <= n; i++) {
  for (let j = i + 1; j <= n; j++) {
    let dist = Math.sqrt((coord[i][0] - coord[j][0]) ** 2 + (coord[i][1] - coord[j][1]) ** 2);
    edges.push([i, j, dist]);
  }
}
edges.sort((a, b) => a[2] - b[2]);

const parent = [];
for (let i = 0; i <= n; i++) parent.push(i);

const findRoot = (x) => {
  if (parent[x] === x) return x;
  return (parent[x] = findRoot(parent[x]));
};

const compareRoot = (a, b) => {
  let rootA = findRoot(a);
  let rootB = findRoot(b);
  if (rootA === rootB) return true;
  return false;
};

const unionRoot = (a, b) => {
  let rootA = findRoot(a);
  let rootB = findRoot(b);
  parent[rootA] = rootB;
};

let i = 0;
let result = 0;
let count = 0;
while (i < edges.length) {
  const [a, b, dist] = edges[i++];
  if (compareRoot(a, b)) continue;
  result += dist;
  unionRoot(a, b);
  count++;
  if (count === n - 1) break;
}
console.log(result.toFixed(2));