const [n, k] = require("fs").readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
const queue = [n];
const time = Array(100001).fill(Number.MAX_SAFE_INTEGER);
const max = Number.MAX_SAFE_INTEGER;
time[n] = 0;
while (queue.length) {
  const cur = queue.shift();
  if (cur === k) {
    console.log(time[cur]);
    break;
  }
  if (cur * 2 <= 100000 && time[cur * 2] === max) {
    time[cur * 2] = time[cur];
    queue.unshift(cur * 2);
  }
  if (cur - 1 >= 0 && time[cur - 1] === max) {
    time[cur - 1] = time[cur] + 1;
    queue.push(cur - 1);
  }
  if (cur + 1 <= 100000 && time[cur + 1] === max) {
    time[cur + 1] = time[cur] + 1;
    queue.push(cur + 1);
  }
}
