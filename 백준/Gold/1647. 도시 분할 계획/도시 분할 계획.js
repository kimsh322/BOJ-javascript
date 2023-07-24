const [a, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = a.split(" ").map(Number);

class Heap {
  constructor() {
    this.values = [];
  }

  enqueue(a, b, c) {
    this.values.push([a, b, c]);
    this.bubbleUp();
  }

  bubbleUp() {
    let curIdx = this.values.length - 1;
    const cur = this.values[curIdx];
    while (curIdx > 0) {
      let parentIdx = Math.floor((curIdx - 1) / 2);
      let parent = this.values[parentIdx];
      if (cur[2] >= parent[2]) break;
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
    const leng = this.values.length;
    while (true) {
      let leftChildIdx = curIdx * 2 + 1;
      let rightChildIdx = curIdx * 2 + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < leng) {
        leftChild = this.values[leftChildIdx];
        if (cur[2] > leftChild[2]) swap = leftChildIdx;
      }
      if (rightChildIdx < leng) {
        rightChild = this.values[rightChildIdx];
        if (swap === null && cur[2] > rightChild[2]) swap = rightChildIdx;
        if (swap !== null && leftChild[2] > rightChild[2]) swap = rightChildIdx;
      }
      if (swap === null) break;
      this.values[curIdx] = this.values[swap];
      this.values[swap] = cur;
      curIdx = swap;
    }
  }
}

const edges = new Heap();
for (let i = 0; i < m; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  edges.enqueue(a, b, c);
}

const parent = [];
for (let i = 0; i <= n; i++) parent.push(i);

const findParent = (x) => {
  if (parent[x] === x) return x;
  return findParent(parent[x]);
};

const compareParent = (a, b) => {
  let x = findParent(a);
  let y = findParent(b);
  if (x === y) return true;
  return false;
};

const mergeTree = (a, b) => {
  let x = findParent(a);
  let y = findParent(b);
  if (y > x) parent[x] = y;
  else parent[y] = x;
};

let sum = 0;
let count = 0;
while (count < n - 2) {
  const [a, b, c] = edges.dequeue();
  if (compareParent(a, b)) continue;
  mergeTree(a, b);
  sum += c;
  count++;
}
console.log(sum);