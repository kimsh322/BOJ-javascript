const [tc, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let i = 0;
let result = "";
for (let aa = 0; aa < tc; aa++) {
  const [n, m, w] = input[i].split(" ").map(Number);
  const edge = [];
  for (let j = i + 1; j < m + i + 1; j++) {
    const [a, b, c] = input[j].split(" ").map(Number);
    edge.push([a, b, c]);
    edge.push([b, a, c]);
  }
  for (let j = m + i + 1; j < m + w + i + 1; j++) {
    const [a, b, c] = input[j].split(" ").map(Number);
    edge.push([a, b, -c]);
  }
  i += m + w + 1;

  const distance = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
  distance[1] = 0;
  let update = false;
  let cycle = false;
  for (let i = 1; i <= n; i++) {
    update = false;
    for (let [cur, next, dist] of edge) {
      if (distance[next] > distance[cur] + dist) {
        if (i === n) {
          cycle = true;
          break;
        }
        distance[next] = distance[cur] + dist;
        update = true;
      }
    }
    if (!update) break;
  }

  result += cycle ? "YES\n" : "NO\n";
}

console.log(result);