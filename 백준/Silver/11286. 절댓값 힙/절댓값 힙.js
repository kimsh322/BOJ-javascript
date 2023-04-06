const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

const heap = [];

const insert = (val) => {
  heap.push(val);
  bubbleUp();
};
const bubbleUp = () => {
  let idx = heap.length - 1;
  let cur = heap[idx];
  while (idx > 0) {
    let parentIdx = Math.floor((idx - 1) / 2);
    let parent = heap[parentIdx];
    if (Math.abs(parent) > Math.abs(cur) || (Math.abs(parent) === Math.abs(cur) && parent > cur)) {
      heap[idx] = parent;
      heap[parentIdx] = cur;
      idx = parentIdx;
    } else break;
  }
};

const remove = () => {
  const cur = heap[0];
  const last = heap.pop();
  if (heap.length > 0) {
    heap[0] = last;
    sinkdown();
  }
  return cur;
};

const sinkdown = () => {
  let cur = heap[0];
  let idx = 0;
  let leng = heap.length;
  while (true) {
    let leftChildIdx = 2 * idx + 1;
    let rightChildIdx = 2 * idx + 2;
    let leftChild, rightChild;
    let swap = null;
    if (leftChildIdx < leng) {
      leftChild = heap[leftChildIdx];
      if (Math.abs(leftChild) < Math.abs(cur) || (Math.abs(leftChild) === Math.abs(cur) && leftChild < cur)) {
        swap = leftChildIdx;
      }
    }
    if (rightChildIdx < leng) {
      rightChild = heap[rightChildIdx];
      if (
        (swap === null &&
          (Math.abs(rightChild) < Math.abs(cur) || (Math.abs(rightChild) === Math.abs(cur) && rightChild < cur))) ||
        (swap !== null &&
          (Math.abs(rightChild) < Math.abs(leftChild) ||
            (Math.abs(rightChild) === Math.abs(leftChild) && rightChild < leftChild)))
      ) {
        swap = rightChildIdx;
      }
    }
    if (swap === null) break;
    heap[idx] = heap[swap];
    heap[swap] = cur;
    idx = swap;
  }
};
let result = "";
for (let i = 0; i < n; i++) {
  let cur = +input[i];
  if (cur === 0) {
    if (heap.length === 0) result += "0\n";
    else {
      result += remove() + "\n";
    }
  } else insert(cur);
}
console.log(result);