const [a, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let que = new Map();
let num = 1;
let cur = 1;
let result = "";
for (let i = 0; i < +a; i++) {
  let arr = input[i].split(" ");
  if (arr[0] === "push") {
    que.set(num, arr[1]);
    num++;
  }
  if (arr[0] === "pop") {
    if (que.size === 0) result += -1 + "\n";
    else {
      result += que.get(cur) + "\n";
      que.delete(cur);
      cur++;
    }
  }
  if (arr[0] === "size") result += que.size + "\n";
  if (arr[0] === "empty") {
    result += que.size === 0 ? 1 : 0;
    result += "\n";
  }
  if (arr[0] === "front") {
    if (que.size === 0) result += -1 + "\n";
    else result += que.get(cur) + "\n";
  }
  if (arr[0] === "back") {
    if (que.size === 0) result += -1 + "\n";
    else {
      let val = "";
      for (let pro of que) {
        val = pro[1];
      }
      result += val + "\n";
    }
  }
}
console.log(result);