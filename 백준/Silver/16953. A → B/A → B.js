const [a, b] = require("fs").readFileSync('/dev/stdin').toString().trim().split(" ").map(Number);
const queue = [];
queue.push(a);
let count = 0;
let num = 1;
let end = false;
while (queue.length) {
  let curCount = num;
  num = 0;
  for (let i = 0; i < curCount; i++) {
    let cur = queue.shift();
    if (cur === b) {
      console.log(count + 1);
      end = true;
      break;
    }
    if (cur * 2 <= b) {
      queue.push(cur * 2);
      num++;
    }
    if (+(cur + "1") <= b) {
      queue.push(+(cur + "1"));
      num++;
    }
  }
  if (end) break;
  count++;
}

if (!end) console.log(-1);