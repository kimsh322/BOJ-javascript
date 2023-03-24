const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

let heap = [];
const insert = (value) => {
  heap.push(value);
  let idx = heap.length - 1;
  while (idx > 0) {
    let parentIdx = Math.floor((idx - 1) / 2);
    let parent = heap[parentIdx];
    if (parent > value) break;
    heap[idx] = parent;
    heap[parentIdx] = value;
    idx = parentIdx;
  }
};

const sinkdown = () => {
  let idx = 0;
  let element = heap[idx];
  let leng = heap.length;
  while (true) {
    let leftChildIndex = 2 * idx + 1;
    let rightChildIndex = 2 * idx + 2;
    let leftChild, rightChild;
    let swap = null;
    if (leftChildIndex < leng) {
      leftChild = heap[leftChildIndex];
      if (element < leftChild) swap = leftChildIndex;
    }
    if (rightChildIndex < leng) {
      rightChild = heap[rightChildIndex];
      if (
        (swap === null && element < rightChild) ||
        (swap !== null && leftChild < rightChild)
      )
        swap = rightChildIndex;
    }
    if (swap === null) break;
    heap[idx] = heap[swap];
    heap[swap] = element;
    idx = swap;
  }
};

const remove = () => {
  let big = heap[0];
  let end = heap.pop();
  if (heap.length > 0) {
    heap[0] = end;
    sinkdown();
  }
  return big;
};

let result = "";
for (let i = 0; i < n; i++) {
  if (input[i] === "0") {
    if (heap.length === 0) result += "0\n";
    else result += remove() + "\n";
  } else insert(+input[i]);
}
console.log(result);