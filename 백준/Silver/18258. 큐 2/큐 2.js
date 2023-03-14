const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");

let queue = {};
let result = "";
let head = 0;
let rear = 0;
for (let i = 1; i <= +input[0]; i++) {
  let arr = input[i].split(" ");
  switch (arr[0]) {
    case "push":
      queue[rear] = arr[1];
      rear++;
      break;
    case "pop":
      if (rear - head === 0) result += -1 + "\n";
      else {
        result += queue[head] + "\n";
        delete queue[head];
        head++;
      }
      break;
    case "size":
      result += rear - head + "\n";
      break;
    case "empty":
      if (rear - head === 0) result += 1 + "\n";
      else result += 0 + "\n";
      break;
    case "front":
      if (rear - head === 0) result += -1 + "\n";
      else result += queue[head] + "\n";
      break;
    case "back":
      if (rear - head === 0) result += -1 + "\n";
      else result += queue[rear - 1] + "\n";
      break;
  }
}
console.log(result);