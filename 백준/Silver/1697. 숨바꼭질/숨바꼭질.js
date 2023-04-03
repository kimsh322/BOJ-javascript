const [n, k] = require("fs").readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
let queue = [[n, 0]];
let result = 0;
let visited = {};
while (queue.length) {
  let [cur, num] = queue.shift();
  if (cur === k) {
    result = num;
    break;
  }
  if (!visited[cur + 1] && cur < 100000) {
    queue.push([cur + 1, num + 1]);
    visited[cur + 1] = true;
  }
  if (!visited[cur - 1] && cur > 0) {
    queue.push([cur - 1, num + 1]);
    visited[cur - 1] = true;
  }
  if (!visited[cur * 2] && cur * 2 <= 100000) {
    queue.push([cur * 2, num + 1]);
    visited[cur * 2] = true;
  }
}
console.log(result);