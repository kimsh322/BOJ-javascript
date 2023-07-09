const [aaa, bbb, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m, r] = aaa.split(" ").map(Number);
const itemNum = bbb.split(" ").map(Number);
itemNum.unshift(0);
// 인접리스트
const adjArr = Array(n + 1)
  .fill(0)
  .map(() => []);
for (let i = 0; i < r; i++) {
  const [a, b, l] = input[i].split(" ").map(Number);
  adjArr[a].push([b, l]);
  adjArr[b].push([a, l]);
}

// heap 구현
class Heap {
  constructor() {
    this.values = [];
  }
  enqueue(item, dist) {
    this.values.push([item, dist]);
    this.bubbleUp();
  }

  bubbleUp() {
    let curIdx = this.values.length - 1;
    const cur = this.values[curIdx];
    while (curIdx > 0) {
      let parentIdx = Math.floor((curIdx - 1) / 2);
      let parent = this.values[parentIdx];
      if (cur[1] >= parent[1]) break;
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
    const cur = this.values[0];
    const length = this.values.length;
    let curIdx = 0;
    while (true) {
      let leftChildIdx = 2 * curIdx + 1;
      let rightChildIdx = 2 * curIdx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (cur[1] > leftChild[1]) swap = leftChildIdx;
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (swap === null && cur[1] > rightChild[1]) swap = rightChildIdx;
        if (swap !== null && leftChild[1] > rightChild[1]) swap = rightChildIdx;
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
  .map(() => Array(n + 1).fill(Number.MAX_SAFE_INTEGER));

for (let i = 1; i <= n; i++) {
  let start = i;
  let curDijk = dijk[start];
  const visited = Array(n + 1).fill(false);
  curDijk[start] = 0;
  const minQueue = new Heap();
  minQueue.enqueue(start, 0);
  let cur;
  while (minQueue.values.length) {
    cur = minQueue.dequeue()[0];
    visited[cur] = true;
    for (let [node, dist] of adjArr[cur]) {
      curDijk[node] = Math.min(curDijk[cur] + dist, curDijk[node]);
      if (!visited[node]) minQueue.enqueue(node, curDijk[node]);
    }
  }
}

let result = 0;
// 범위 내 개수 세기
for (let i = 1; i <= n; i++) {
  const total = dijk[i].reduce((sum, dist, idx) => {
    if (dist <= m) return sum + itemNum[idx];
    else return sum;
  }, 0);
  result = Math.max(result, total);
}
console.log(result);