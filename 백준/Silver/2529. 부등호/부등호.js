const [n, input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let arr = input.split(" ");
let visited = Array(10).fill(0);

const func = (num, str) => {
  if (str.length === +n + 1) {
    if (max < +str) {
      max = +str;
      result[0] = str;
    }
    if (min > +str) {
      min = +str;
      result[1] = str;
    }
    return;
  }

  for (let i = 0; i < 10; i++) {
    if (visited[i]) continue;
    if (arr[num - 1] === "<" && str[str.length - 1] < i) {
      let newStr = str + i;
      visited[i] = 1;
      func(num + 1, newStr);
      visited[i] = 0;
    }
    if (arr[num - 1] === ">" && str[str.length - 1] > i) {
      let newStr = str + i;
      visited[i] = 1;
      func(num + 1, newStr);
      visited[i] = 0;
    }
  }
};

let max = 0;
let min = 9999999999;
let result = [max, min];
for (let i = 0; i < 10; i++) {
  visited[i] = 1;
  func(1, String(i));
  visited[i] = 0;
}
console.log(result.join("\n"));