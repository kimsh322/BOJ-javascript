const [aa, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m, x] = aa.split(" ").map(Number);
// 일반 인접리스트
const adjArr = Array(n + 1)
  .fill(0)
  .map(() => []);
// 거꾸로 인접리스트
const backAdjArr = Array(n + 1)
  .fill(0)
  .map(() => []);

for (let i = 0; i < m; i++) {
  let [a, b, c] = input[i].split(" ").map(Number);
  adjArr[a].push([b, c]);
  backAdjArr[b].push([a, c]);
}

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
    let curIdx = 0;
    const leng = this.values.length;
    const cur = this.values[curIdx];
    while (true) {
      let leftChildIdx = curIdx * 2 + 1;
      let rightChildIdx = curIdx * 2 + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < leng) {
        leftChild = this.values[leftChildIdx];
        if (cur[1] > leftChild[1]) swap = leftChildIdx;
      }
      if (rightChildIdx < leng) {
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

const dijk = (arr, adjArr) => {
  const visited = Array(n + 1).fill(false);
  arr[x] = 0;
  const queue = new Heap();
  queue.enqueue(x, 0);
  while (queue.values.length > 0) {
    let [cur, curDist] = queue.dequeue();
    if (!visited[cur]) {
      visited[cur] = true;
      for (let [node, dist] of adjArr[cur]) {
        if (!visited[node] && arr[node] > curDist + dist) {
          arr[node] = curDist + dist;
          queue.enqueue(node, arr[node]);
        }
      }
    }
  }
};

const backDijk = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
dijk(backDijk, adjArr);

const forwardDijk = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
dijk(forwardDijk, backAdjArr);

let result = 0;
for (let i = 1; i <= n; i++) {
  result = Math.max(result, backDijk[i] + forwardDijk[i]);
}
console.log(result);