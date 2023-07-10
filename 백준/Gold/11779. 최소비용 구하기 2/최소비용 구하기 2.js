const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const n = +input[0];
const m = +input[1];
const [start, end] = input[m + 2].split(" ").map(Number);
const adjArr = Array(n + 1)
  .fill(0)
  .map(() => []);
for (let i = 2; i <= m + 1; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  adjArr[a].push([b, c]);
}

// heap 구현
class Heap {
  constructor() {
    this.values = [];
  }

  enqueue(node, dist) {
    this.values.push([node, dist]);
    this.bubbleup();
  }

  bubbleup() {
    let curIdx = this.values.length - 1;
    const cur = this.values[curIdx];
    while (curIdx > 0) {
      let parentIdx = Math.floor((curIdx - 1) / 2);
      let parent = this.values[parentIdx];
      if (parent[1] <= cur[1]) break;
      this.values[parentIdx] = cur;
      this.values[curIdx] = parent;
      curIdx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    let curIdx = 0;
    const cur = this.values[0];
    const length = this.values.length;
    while (true) {
      let leftChildIdx = 2 * curIdx + 1;
      let rightChildIdx = 2 * curIdx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild[1] < cur[1]) swap = leftChildIdx;
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (swap === null && rightChild[1] < cur[1]) swap = rightChildIdx;
        if (swap !== null && rightChild[1] < leftChild[1]) swap = rightChildIdx;
      }
      if (swap === null) break;
      this.values[curIdx] = this.values[swap];
      this.values[swap] = cur;
      curIdx = swap;
    }
  }
}

// 다익스트라
const dijk = Array(n + 1)
  .fill(0)
  .map(() => [`${start}`, Number.MAX_SAFE_INTEGER]);
const visited = Array(n + 1).fill(false);
dijk[start][1] = 0;
const queue = new Heap();
queue.enqueue(start, 0);

while (queue.values.length) {
  const [cur, curDist] = queue.dequeue();
  if (curDist > dijk[end][1]) continue;
  visited[cur] = true;
  for (const [node, dist] of adjArr[cur]) {
    if (dijk[node][1] > dijk[cur][1] + dist) {
      dijk[node][0] = dijk[cur][0] + " " + node;
      dijk[node][1] = dijk[cur][1] + dist;
      queue.enqueue(node, dijk[node][1]);
    }
  }
}
console.log(dijk[end][1]);
console.log(dijk[end][0].split(" ").length);
console.log(dijk[end][0]);