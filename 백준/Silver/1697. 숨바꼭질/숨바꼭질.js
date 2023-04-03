const [n, k] = require("fs").readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
let queue = [n];
let result = -1;
let visited = {};
let num = 0;
while (true) {
  let size = queue.length;
  for (let i = 0; i < size; i++) {
    let cur = queue.shift();
    if (cur === k) {
      result = num;
      break;
    }
    if (!visited[cur + 1] && cur < 100000) {
      queue.push(cur + 1);
      visited[cur + 1] = true;
    }
    if (!visited[cur - 1] && cur > 0) {
      queue.push(cur - 1);
      visited[cur - 1] = true;
    }
    if (!visited[cur * 2] && cur * 2 <= 100000) {
      queue.push(cur * 2);
      visited[cur * 2] = true;
    }
  }
  if (result >= 0) break;
  num++;
}
console.log(result);