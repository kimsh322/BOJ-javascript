const [aa, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = aa.split(" ").map(Number);

const visited = Array(n)
  .fill(0)
  .map(() =>
    Array(m)
      .fill(0)
      .map(() => [0, 0])
  );

class Node {
  constructor(y, x, isBreak) {
    this.value = [y, x, isBreak];
    this.next = null;
  }
}
class Linked {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(y, x, isBreak) {
    const node = new Node(y, x, isBreak);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  dequeue() {
    if (this.length === 0) return;
    const extract = this.head;
    this.head = this.head.next;
    this.length--;
    return extract.value;
  }
}

const dy = [1, -1, 0, 0];
const dx = [0, 0, 1, -1];
const queue = new Linked();
queue.enqueue(0, 0, 0);
visited[0][0][0] = 1;
let end = false;

while (queue.length) {
  const [y, x, isBreak] = queue.dequeue();
  if (y === n - 1 && x === m - 1) {
    end = true;
    console.log(visited[y][x][isBreak]);
    break;
  }
  for (let i = 0; i < 4; i++) {
    let curY = y + dy[i];
    let curX = x + dx[i];
    if (curY < 0 || curY >= n || curX < 0 || curX >= m) continue;
    if (input[curY][curX] === "0" && visited[curY][curX][isBreak] === 0) {
      visited[curY][curX][isBreak] = visited[y][x][isBreak] + 1;
      queue.enqueue(curY, curX, isBreak);
    }
    if (isBreak === 0 && input[curY][curX] === "1" && visited[curY][curX][1] === 0) {
      visited[curY][curX][1] = visited[y][x][0] + 1;
      queue.enqueue(curY, curX, 1);
    }
  }
}

if (!end) console.log(-1);