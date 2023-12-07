const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);

class Heap {
  constructor(isMax = true) {
    this.values = [];
    this.isMax = isMax;
  }

  findTop() {
    return this.values[0];
  }

  enqueue(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let curIdx = this.values.length - 1;
    const cur = this.values[curIdx];
    while (curIdx > 0) {
      let parentIdx = Math.floor((curIdx - 1) / 2);
      const parent = this.values[parentIdx];
      if (this.isMax && parent >= cur) break;
      if (!this.isMax && parent <= cur) break;
      this.values[curIdx] = parent;
      this.values[parentIdx] = cur;
      curIdx = parentIdx;
    }
  }

  dequeue() {
    const extract = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return extract;
  }

  sinkDown() {
    const cur = this.values[0];
    const leng = this.values.length;
    let curIdx = 0;
    let leftChildIdx, rightChildIdx;
    while (true) {
      leftChildIdx = curIdx * 2 + 1;
      rightChildIdx = curIdx * 2 + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < leng) {
        leftChild = this.values[leftChildIdx];
        if (this.isMax && leftChild > cur) swap = leftChildIdx;
        if (!this.isMax && leftChild < cur) swap = leftChildIdx;
      }
      if (rightChildIdx < leng) {
        rightChild = this.values[rightChildIdx];
        if (this.isMax) {
          if (swap === null && rightChild > cur) swap = rightChildIdx;
          if (swap !== null && rightChild > leftChild) swap = rightChildIdx;
        } else {
          if (swap === null && rightChild < cur) swap = rightChildIdx;
          if (swap !== null && rightChild < leftChild) swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[curIdx] = this.values[swap];
      this.values[swap] = cur;
      curIdx = swap;
    }
  }
}
const maxHeap = new Heap(true);
const minHeap = new Heap(false);
let maxHeapLength = 0;
let minHeapLength = 0;
const n = +input[0];
let result = "";
for (let i = 1; i <= n; i++) {
  if (maxHeapLength === minHeapLength) {
    maxHeap.enqueue(input[i]);
    maxHeapLength++;
  } else {
    minHeap.enqueue(input[i]);
    minHeapLength++;
  }
  let curMaxTop = maxHeap.findTop();
  let curMinTop = minHeap.findTop() === undefined ? 999999 : minHeap.findTop();
  if (curMaxTop > curMinTop) {
    maxHeap.enqueue(minHeap.dequeue());
    minHeap.enqueue(maxHeap.dequeue());
  }
  result += maxHeap.findTop() + "\n";
}
console.log(result);