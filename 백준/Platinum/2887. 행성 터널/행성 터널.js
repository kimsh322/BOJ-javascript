let [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
n = +n;
const coord = [];
for (let i = 0; i < n; i++) coord.push([...input[i].split(" ").map(Number), i + 1]);

const sortX = [...coord].sort((a, b) => a[0] - b[0]);
const sortY = [...coord].sort((a, b) => a[1] - b[1]);
const sortZ = [...coord].sort((a, b) => a[2] - b[2]);

const edges = [];
for (let i = 0; i < n - 1; i++) {
  for (let arr of [sortX, sortY, sortZ]) {
    const dist = Math.min(
      Math.abs(arr[i][0] - arr[i + 1][0]),
      Math.abs(arr[i][1] - arr[i + 1][1]),
      Math.abs(arr[i][2] - arr[i + 1][2])
    );
    edges.push([arr[i][3], arr[i + 1][3], dist]);
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
  const rootA = findRoot(a);
  const rootB = findRoot(b);
  if (rootA === rootB) return true;
  return false;
};

const unionRoot = (a, b) => {
  const rootA = findRoot(a);
  const rootB = findRoot(b);
  parent[rootA] = rootB;
};

let result = 0;
let count = 0;
let idx = 0;
while (idx < edges.length) {
  const [a, b, dist] = edges[idx++];
  if (compareRoot(a, b)) continue;
  unionRoot(a, b);
  result += dist;
  count++;
  if (count === n - 1) break;
}

console.log(result);