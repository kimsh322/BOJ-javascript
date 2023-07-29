const [aa, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, k] = aa.split(" ").map(Number);

class Heap {
  constructor() {
    this.values = [];
  }

  enqueue(value, weight) {
    this.values.push([value, weight]);
    this.bubbleUp();
  }

  bubbleUp() {
    let curIdx = this.values.length - 1;
    const cur = this.values[curIdx];
    while (curIdx > 0) {
      let parentIdx = Math.floor((curIdx - 1) / 2);
      const parent = this.values[parentIdx];
      if (cur[0] <= parent[0]) break;
      this.values[parentIdx] = cur;
      this.values[curIdx] = parent;
      curIdx = parentIdx;
    }
  }

  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
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
        if (leftChild[0] > cur[0]) swap = leftChildIdx;
      }
      if (rightChildIdx < leng) {
        rightChild = this.values[rightChildIdx];
        if (swap === null && rightChild[0] > cur[0]) swap = rightChildIdx;
        if (swap !== null && rightChild[0] > leftChild[0]) swap = rightChildIdx;
      }
      if (swap === null) break;
      this.values[curIdx] = this.values[swap];
      this.values[swap] = cur;
      curIdx = swap;
    }
  }
}

const jewelry = [];
const backpack = [];
for (let i = 0; i < n; i++) jewelry.push(input[i].split(" ").map(Number));
for (let i = n; i < n + k; i++) backpack.push(+input[i]);
jewelry.sort((a, b) => a[0] - b[0]);
backpack.sort((a, b) => a - b);

let result = 0;
const heap = new Heap();
let i = 0;
for (let j = 0; j < backpack.length; j++) {
  const curWeight = backpack[j];
  while (i < jewelry.length) {
    let [weight, value] = jewelry[i];
    if (weight <= curWeight) {
      heap.enqueue(value, weight);
      i++;
    } else break;
  }
  if (heap.values.length === 0) continue;
  let curJewelry = heap.dequeue();
  result += curJewelry[0];
}
console.log(result);