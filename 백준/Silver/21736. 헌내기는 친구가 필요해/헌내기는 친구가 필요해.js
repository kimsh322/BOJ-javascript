const [aa, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = aa.split(" ").map(Number);
const arr = [];
let start;
const visited = Array(n)
  .fill(0)
  .map(() => Array(m).fill(false));

for (let i = 0; i < n; i++) {
  let curArr = input[i].split("");
  if (curArr.includes("I")) {
    let x = curArr.indexOf("I");
    start = [i, x];
    visited[i][x] = true;
  }
  arr.push(curArr);
}

class Node {
  constructor(y, x) {
    this.value = [y, x];
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(y, x) {
    const node = new Node(y, x);
    if (!this.head) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  dequeue() {
    const extract = this.head;
    this.head = this.head.next;
    this.length--;
    return extract.value;
  }
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let count = 0;
const queue = new Queue();
queue.enqueue(...start);
while (queue.length) {
  const [y, x] = queue.dequeue();
  for (let i = 0; i < 4; i++) {
    let curY = y + dy[i];
    let curX = x + dx[i];
    if (curX >= 0 && curX < m && curY >= 0 && curY < n) {
      if (visited[curY][curX]) continue;
      visited[curY][curX] = true;
      if (arr[curY][curX] === "X") continue;
      if (arr[curY][curX] === "P") count++;
      queue.enqueue(curY, curX);
    }
  }
}
console.log(count ? count : "TT");