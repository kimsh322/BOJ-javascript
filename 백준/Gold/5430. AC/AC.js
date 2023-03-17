const [a, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const func = (command, leng, arr) => {
  let stack = [];
  let left = 0;
  let right = leng;
  for (let j = 0; j < command.length; j++) {
    if (command[j] === "D" && stack.length > 0) {
      if (left < right) right--;
      else {
        return "error";
      }
    } else if (command[j] === "D") {
      if (left < right) left++;
      else {
        return "error";
      }
    }

    if (command[j] === "R") {
      if (stack.length > 0) stack.pop();
      else stack.push("R");
    }
  }
  arr = arr.slice(left, right);
  if (stack.length > 0) arr.reverse();
  return JSON.stringify(arr);
};

let result = "";
for (let i = 0; i < +a; i++) {
  let [command, leng, arr] = [
    input[i * 3],
    +input[i * 3 + 1],
    input[i * 3 + 2],
  ];
  result += func(command, leng, JSON.parse(arr)) + "\n";
}
console.log(result);