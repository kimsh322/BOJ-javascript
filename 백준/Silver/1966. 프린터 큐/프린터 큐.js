const [a, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let result = "";
for (let i = 0; i < +a * 2; i += 2) {
  let [n, m] = input[i].split(" ").map(Number);
  let arr = input[i + 1].split(" ").map(Number);
  let num = 1;
  while (true) {
    let max = Math.max(...arr);
    let cur = arr.shift();
    if (max <= cur && m === 0) {
      result += num + "\n";
      break;
    }
    if (max > cur && m === 0) {
      arr.push(cur);
      m = arr.length - 1;
    } else if (max > cur) {
      arr.push(cur);
      m--;
    } else if (max <= cur) {
      num++;
      m--;
    }
  }
}
console.log(result);