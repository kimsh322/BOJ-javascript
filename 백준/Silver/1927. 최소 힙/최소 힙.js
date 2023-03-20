const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

let heap = [];
const insert = (input) => {
  heap.push(input);
  let curIndex = heap.length - 1;
  while (true) {
    let parentIndex = Math.floor((curIndex - 1) / 2);
    if (heap[curIndex] < heap[parentIndex]) {
      [heap[curIndex], heap[parentIndex]] = [heap[parentIndex], heap[curIndex]];
      curIndex = parentIndex;
    } else break;
  }
};
const remove = () => {
  if (heap.length <= 0) {
    return 0;
  }
  let result = heap[0];
  let last = heap.pop();
  let leng = heap.length;
  if (leng > 0) heap[0] = last;
  let curIndex = 0;
  while (true) {
    let leftChildIndex = 2 * curIndex + 1;
    let rightChildIndex = 2 * curIndex + 2;
    let leftChild = heap[leftChildIndex];
    let rightChild = heap[rightChildIndex];
    let swap = null;
    if (leftChildIndex < leng && leftChild < last) {
      swap = leftChildIndex;
    }
    if (rightChildIndex < leng) {
      if (
        (swap === null && rightChild < last) ||
        (swap !== null && rightChild < leftChild)
      )
        swap = rightChildIndex;
    }
    if (swap === null) break;
    heap[curIndex] = heap[swap];
    heap[swap] = last;
    curIndex = swap;
  }
  return result;
};
let result = "";
for (let i = 0; i < n; i++) {
  if (input[i] === "0") result += remove() + "\n";
  else insert(+input[i]);
}
console.log(result);