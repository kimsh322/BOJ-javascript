let [a, k, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
k = +k;
const [v, e] = a.split(" ").map(Number);

class Heap {
  constructor() {
    this.values = [];
  }
  enqueue(vertex, dist) {
    this.values.push([vertex, dist]);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element[1] >= parent[1]) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
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
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild[1] < element[1]) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if ((swap === null && rightChild[1] < element[1]) || (swap !== null && rightChild[1] < leftChild[1])) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const adjArr = Array(v + 1)
  .fill(0)
  .map(() => []);

for (let i = 0; i < e; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  adjArr[a].push([b, c]);
}

const dijk = Array(v + 1).fill(Number.MAX_SAFE_INTEGER);
dijk[k] = 0;
let cur, curDist;
const heap = new Heap();
heap.enqueue(k, 0);
while (heap.values.length) {
  [cur, curDist] = heap.dequeue();
  for (let el of adjArr[cur]) {
    if (dijk[el[0]] > curDist + el[1]) {
      dijk[el[0]] = curDist + el[1];
      heap.enqueue(el[0], dijk[el[0]]);
    }
  }
}

let result = "";
for (let i = 1; i <= v; i++) {
  if (dijk[i] === Number.MAX_SAFE_INTEGER) result += "INF\n";
  else result += dijk[i] + "\n";
}
console.log(result);