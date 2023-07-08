const input = require("fs").readFileSync('/dev/stdin').toString().trim();
const [n, k] = input.split(" ").map(Number);

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(item) {
    const node = { item, next: null };
    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length += 1;
  }

  dequeue() {
    const popItem = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return popItem.item;
  }
}

const visited = Array(100001).fill(false);
const queue = new Queue();
queue.enqueue(n);
visited[n] = true;

let time = 0;
let count = 0;
let end = false;

while (true) {
  let leng = queue.length;
  for (let i = 0; i < leng; i++) {
    let cur = queue.dequeue();
    visited[cur] = true;
    if (cur === k) {
      end = true;
      count++;
      continue;
    }
    if (cur > 0 && !visited[cur - 1]) queue.enqueue(cur - 1);
    if (cur < 100000 && !visited[cur + 1]) queue.enqueue(cur + 1);
    if (cur <= 50000 && !visited[cur * 2]) queue.enqueue(cur * 2);
  }
  if (end) break;
  time++;
}
const result = time + "\n" + count;
console.log(result);