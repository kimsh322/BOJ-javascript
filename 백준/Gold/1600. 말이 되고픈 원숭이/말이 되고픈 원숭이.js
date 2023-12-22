const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const k = +input[0];
const [w, h] = input[1].split(" ").map(Number);
const arr = [];
for (let i = 2; i < 2 + h; i++) arr.push(input[i].split(" ").map(Number));
const visited = Array(h)
  .fill(0)
  .map(() =>
    Array(w)
      .fill(0)
      .map(() => Array(k + 1).fill(false))
  );
visited[0][0][0] = true;

class Node {
  constructor(y, x, count, horseCount) {
    this.y = y;
    this.x = x;
    this.count = count;
    this.horseCount = horseCount;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(data) {
    this.size++;
    if (this.head === null) {
      this.head = data;
      this.tail = data;
    } else {
      this.tail.next = data;
      this.tail = data;
    }
  }

  dequeue() {
    if (this.size === 0) return;
    const extract = this.head;
    this.head = this.head.next;
    this.size--;
    if (this.size === 0) this.tail = null;
    return extract;
  }
}

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const horseDx = [-1, -2, 1, 2, 1, 2, -1, -2];
const horseDy = [-2, -1, 2, 1, -2, -1, 2, 1];

const check = (y, x) => {
  if (x < 0 || x >= w || y < 0 || y >= h) return false;
  return true;
};

const queue = new LinkedList();
queue.enqueue(new Node(0, 0, 0, 0));
let result = -1;
let idx = 0;
while (queue.size) {
  const { y, x, count, horseCount } = queue.dequeue();
  if (y === h - 1 && x === w - 1) {
    result = count;
    break;
  }
  for (let i = 0; i < 4; i++) {
    const curX = x + dx[i];
    const curY = y + dy[i];
    if (!check(curY, curX)) continue;
    if (visited[curY][curX][horseCount]) continue;
    if (arr[curY][curX] === 1) continue;
    visited[curY][curX][horseCount] = true;
    queue.enqueue(new Node(curY, curX, count + 1, horseCount));
  }
  if (horseCount < k) {
    for (let i = 0; i < 8; i++) {
      const curX = x + horseDx[i];
      const curY = y + horseDy[i];
      if (!check(curY, curX)) continue;
      if (visited[curY][curX][horseCount + 1]) continue;
      if (arr[curY][curX] === 1) continue;
      visited[curY][curX][horseCount + 1] = true;
      queue.enqueue(new Node(curY, curX, count + 1, horseCount + 1));
    }
  }
}
console.log(result);