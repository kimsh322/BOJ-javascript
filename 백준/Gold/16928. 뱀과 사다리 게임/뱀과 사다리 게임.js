const [a, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let [n, m] = a.split(" ").map(Number);
let ladder = {};
for (let i = 0; i < n + m; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  ladder[x] = y;
}
let visited = Array(101).fill(false);
let queue = [2, 3, 4, 5, 6, 7];
let num = 1;
let end = false;
while (true) {
  let leng = queue.length;
  let i = 0;
  while (i < leng) {
    i++;
    let cur = queue.shift();
    if (cur === 100) {
      end = true;
      break;
    }
    if (visited[cur] || cur > 100) continue;
    visited[cur] = true;
    if (String(cur) in ladder) {
      cur = ladder[cur];
    }
    for (let j = 1; j <= 6; j++) {
      if (visited[cur + j]) continue;
      queue.push(cur + j);
    }
  }
  if (end) break;
  num++;
}
console.log(num);