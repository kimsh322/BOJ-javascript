const [a, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, e] = a.split(" ").map(Number);
const [u, v] = input[e].split(" ").map(Number);
const adjArr = Array(n + 1)
  .fill(0)
  .map(() => []);
for (let i = 0; i < e; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  adjArr[a].push([b, c]);
  adjArr[b].push([a, c]);
}

const func = (start) => {
  const dijk = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  const visited = Array(n + 1).fill(false);
  dijk[start] = 0;
  let cur = start;
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
  return dijk;
};

const start = func(1);
const v1 = func(u);
const v2 = func(v);
const path1 = start[u] + v1[v] + v2[n];
const path2 = start[v] + v2[u] + v1[n];
const result = Math.min(path1, path2, Number.MAX_SAFE_INTEGER);
if (result === Number.MAX_SAFE_INTEGER) console.log(-1);
else console.log(result);