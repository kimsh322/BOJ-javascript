const a = require('fs').readFileSync('/dev/stdin').toString().split(" ");
let result = 0;
let sum = +a[0];
let b = +a[1] - (+a[2]);
if (b>=0) console.log(-1);
else {
  while (sum >= 0) {
    sum += b;
    result++;
  }
  console.log(result);
}