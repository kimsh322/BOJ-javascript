let [t, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
t = +t;

let idx = 0;

while (t--) {
  const [n, k] = input[idx++].split(" ").map(Number);
  const time = [0, ...input[idx++].split(" ").map(Number)];
  const order = Array(n + 1)
    .fill(0)
    .map(() => []);
  const indegree = Array(n + 1).fill(0);
  for (let i = idx; i < idx + k; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    indegree[b]++;
    order[a].push(b);
  }
  idx += k;
  const w = +input[idx++];

  const dp = Array(n + 1).fill(0);
  const queue = [];
  for (let i = 1; i <= n; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
      dp[i] = time[i];
    }
  }

  let index = 0;
  while (index < queue.length) {
    const cur = queue[index];
    for (let el of order[cur]) {
      indegree[el]--;
      if (indegree[el] === 0) queue.push(el);
      dp[el] = Math.max(dp[el], dp[cur] + time[el]);
    }
    index++;
  }
  console.log(dp[w]);
}