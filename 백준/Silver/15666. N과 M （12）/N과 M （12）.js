const [aa, input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, m] = aa.split(" ").map(Number);
const arr = input.split(" ").map(Number);
arr.sort((a, b) => a - b);

const set = new Set();
const newArr = [];

const func = (num) => {
  if (num === m) {
    const str = newArr.join(" ");
    if (!set.has(str)) set.add(str);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (newArr[newArr.length - 1] > arr[i]) continue;
    newArr.push(arr[i]);
    func(num + 1);
    newArr.pop();
  }
};

func(0);
let result = "";
for (const el of set) {
  result += el + "\n";
}
console.log(result);
