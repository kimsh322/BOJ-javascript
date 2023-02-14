const a = require('fs').readFileSync('/dev/stdin').toString().split("\n");
for (let i = 1; i <= +a[0]; i++) {
  let [h, w, n] = a[i].split(" ").map((el) => +el);
  let y = n % h;
  if (y === 0) y = h;
  let x = Math.floor((n - 1) / h) + 1;
  let result = "";
  result += y;
  if (x < 10) result += "0";
  result += x;
  console.log(result);
}