const [a, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let [n, m] = a.split(" ").map(Number);
let adjList = Array(n + 1).fill(0).map(() => []);
for (let i = 0; i < m; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  adjList[a].push(b);
  adjList[b].push(a);
}

const bfs = (start, end, num) => {
  let queue = [[start, num]];
  while (queue.length) {
    let [cur, curNum] = queue.shift();
    for (let el of adjList[cur]) {
      if (el === end) return curNum + 1;
      queue.push([el, curNum + 1]);
    }
  }
};

let result = [0, Number.MAX_SAFE_INTEGER];
for (let i = 1; i <= n; i++) {
  let curTotal = 0;
  for (let j = 1; j <= n; j++) {
    if (i === j) continue;
    curTotal += bfs(i, j, 0);
  }
  if (curTotal < result[1]) result = [i, curTotal];
}
console.log(result[0]);