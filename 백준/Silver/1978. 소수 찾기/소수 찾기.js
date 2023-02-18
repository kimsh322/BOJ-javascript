const [a, input] = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const arr = input.split(" ").map((el) => +el);
let num = 0;
let isPrime = true;
for (let i = 0; i < +a; i++) {
  if (arr[i] === 2) {
    num++;
    continue;
  }
  if (arr[i] === 1 || arr[i] % 2 === 0) continue;

  for (let j = 3; j <= Math.sqrt(arr[i]); j += 2) {
    if (arr[i] % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) num++;
  isPrime = true;
}
console.log(num);