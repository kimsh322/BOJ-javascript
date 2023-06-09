const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let i = 0;
let result = "";
let order = 1;
while (true) {
  let [n, m] = input[i].split(" ").map(Number);
  if (n === 0 && m === 0) break;

  let adjArr = Array(n + 1).fill(0).map(() => []);
  for (let j = i + 1; j <= i + m; j++) {
    let [a, b] = input[j].split(" ").map(Number);
    adjArr[a].push(b);
    adjArr[b].push(a);
  }
    
  let visited = Array(n + 1).fill(false);
  visited[0] = true;
  let edgeNum = 0;
  const dfs = (node) => {
    let sum = 1;
    if (visited[node]) return 0;
    visited[node] = true;
    for (let el of adjArr[node]) {
      edgeNum++;
      sum += dfs(el);
    }
    return sum;
  };
  let num = 0;
  for (let j = 1; j < n + 1; j++) {
    if (visited[j]) continue;
    edgeNum = 0;
    let nodeNum = dfs(j);
    if (nodeNum === edgeNum / 2 + 1) num++;
  }

  if (num === 0) result += `Case ${order}: No trees.\n`;
  else if (num === 1) result += `Case ${order}: There is one tree.\n`;
  else result += `Case ${order}: A forest of ${num} trees.\n`;
    
  i += m + 1;
  order++;
}
console.log(result);