const [n, input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const arr = input.split(" ").map(Number).sort((a, b) => a - b);
let cur;
let left = 0;
let right = arr.length - 1;
let result = [];
let near = 2000000001;
while (left < right) {
  cur = arr[left] + arr[right];
  if (near > Math.abs(cur)) {
    near = Math.abs(cur);
    result = [arr[left], arr[right]];
  }
  if (cur === 0) break;
  if (cur < 0) left++;
  else if (cur > 0) right--;
}
if (!cur) console.log(`${arr[left]} ${arr[right]}`);
else console.log(result.join(" "));