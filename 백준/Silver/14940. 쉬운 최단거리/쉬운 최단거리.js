const [aa, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = aa.split(" ").map(Number);
const arr = [];
const dist = Array(n)
  .fill(0)
  .map(() => Array(m).fill(0));
let start;
for (let i = 0; i < n; i++) {
  const curArr = input[i].split(" ").map(Number);
  if (curArr.includes(2)) {
    let x = curArr.indexOf(2);
    start = [i, x];
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
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  dequeue() {
    if (!this.head) return;
    const extract = this.head;
    this.head = this.head.next;
    this.length--;
    return extract.value;
  }
}

const queue = new Queue();
queue.enqueue(...start);
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

while (queue.length) {
  let [y, x] = queue.dequeue();
  for (let i = 0; i < 4; i++) {
    let curY = y + dy[i];
    let curX = x + dx[i];
    if (curY < 0 || curY >= n || curX < 0 || curX >= m) continue;
    if (dist[curY][curX] || arr[curY][curX] !== 1) continue;
    dist[curY][curX] = dist[y][x] + 1;
    queue.enqueue(curY, curX);
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (arr[i][j] === 1 && dist[i][j] === 0) {
      dist[i][j] = -1;
    }
  }
}

let result = "";
for (let i = 0; i < n; i++) {
  result += dist[i].join(" ") + "\n";
}
console.log(result);