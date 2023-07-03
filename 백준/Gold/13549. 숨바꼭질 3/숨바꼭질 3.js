const [n, k] = require("fs").readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
const dequeue = [[n, 0]];
const visited = Array(100001).fill(false);
visited[n] = true;
while (dequeue.length) {
  const [cur, curTime] = dequeue.shift();
  visited[cur] = true;
  if (cur === k) {
    console.log(curTime);
    break;
  }
  if (cur * 2 <= 100000 && !visited[cur * 2]) dequeue.unshift([cur * 2, curTime]);
  if (cur - 1 >= 0 && !visited[cur - 1]) dequeue.push([cur - 1, curTime + 1]);
  if (cur + 1 <= 100000 && !visited[cur + 1]) dequeue.push([cur + 1, curTime + 1]);
}
