const [aa, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = aa.split(" ").map(Number);

class Heap {
  constructor() {
    this.values = [];
  }

  enqueue(num) {
    this.values.push(num);
    this.bubbleUp();
  }

  bubbleUp() {
    let curIdx = this.values.length - 1;
    const cur = this.values[curIdx];
    while (curIdx > 0) {
      let parentIdx = Math.floor((curIdx - 1) / 2);
      let parent = this.values[parentIdx];
      if (cur >= parent) break;
      this.values[curIdx] = parent;
      this.values[parentIdx] = cur;
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
      let rigthChildIdx = curIdx * 2 + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < leng) {
        leftChild = this.values[leftChildIdx];
        if (leftChild < cur) swap = leftChildIdx;
      }
      if (rigthChildIdx < leng) {
        rightChild = this.values[rigthChildIdx];
        if (swap === null && rightChild < cur) swap = rigthChildIdx;
        if (swap !== null && rightChild < leftChild) swap = rigthChildIdx;
      }
      if (swap === null) break;
      this.values[curIdx] = this.values[swap];
      this.values[swap] = cur;
      curIdx = swap;
    }
  }
}

const edges = Array(n + 1)
  .fill(0)
  .map(() => []);
const indegree = Array(n + 1).fill(0);
for (let i = 0; i < m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  edges[a].push(b);
  indegree[b]++;
}

const queue = new Heap();
for (let i = 1; i <= n; i++) {
  if (indegree[i] === 0) queue.enqueue(i);
}

let result = "";
while (queue.values.length) {
  const cur = queue.dequeue();
  result += cur + " ";
  for (let el of edges[cur]) {
    indegree[el]--;
    if (indegree[el] === 0) queue.enqueue(el);
  }
}

console.log(result);