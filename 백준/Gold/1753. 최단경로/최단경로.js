let [a, k, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
k = +k;
const [v, e] = a.split(" ").map(Number);
const adjArr = Array(v + 1)
  .fill(0)
  .map(() => []);
for (let i = 0; i < e; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  adjArr[a].push([b, c]);
}
const dijk = Array(v + 1).fill(Number.MAX_SAFE_INTEGER);
const visited = Array(v + 1).fill(false);
dijk[k] = 0;
let cur = k;
while (true) {
  visited[cur] = true;
  for (let el of adjArr[cur]) {
    dijk[el[0]] = Math.min(dijk[el[0]], dijk[cur] + el[1]);
  }
  let min = Number.MAX_SAFE_INTEGER + 1;
  let minIndex = -1;
  for (let i = 1; i <= v; i++) {
    if (!visited[i] && min > dijk[i]) {
      min = dijk[i];
      minIndex = i;
    }
  }
  if (minIndex === -1) break;
  cur = minIndex;
}

let result = "";
for (let i = 1; i <= v; i++) {
  if (dijk[i] === Number.MAX_SAFE_INTEGER) result += "INF\n";
  else result += dijk[i] + "\n";
}
console.log(result);