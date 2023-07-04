let [n, m, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
n = +n;
m = +m;
const [start, end] = input[m].split(" ").map(Number);
const adjArr = Array(n + 1)
  .fill(0)
  .map(() => []);
for (let i = 0; i < m; i++) {
  let [start, end, weight] = input[i].split(" ").map(Number);
  adjArr[start].push([end, weight]);
}
const dijk = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
const visited = Array(n + 1).fill(false);
let cur = start;
dijk[start] = 0;
while (true) {
  visited[cur] = true;
  for (let el of adjArr[cur]) {
    dijk[el[0]] = Math.min(dijk[el[0]], dijk[cur] + el[1]);
  }
  let min = Number.MAX_SAFE_INTEGER + 1;
  let minIndex = -1;
  for (let i = 1; i <= n; i++) {
    if (!visited[i] && dijk[i] < min) {
      min = dijk[i];
      minIndex = i;
    }
  }
  if (minIndex === -1) break;
  cur = minIndex;
}
console.log(dijk[end]);