const input = require('fs').readFileSync('/dev/stdin').toString().split("\n").map((el) => +el);
let prime = [2];
for (let i = 3; i <= Math.max(...input); i += 2) {
  let isPrime = true;
  for (let j = 3; j <= Math.sqrt(i); j += 2) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) prime.push(i);
}
let result = "";
for (let i = 1; i <= input[0]; i++) {
  for (let el of prime) {
    if (el > input[i] / 2) break;
    if (prime.includes(input[i] - el)) {
      let a = Math.min(el, input[i] - el);
      let b = Math.max(el, input[i] - el);
      result = a + " " + b;
    }
  }
  console.log(result);
  result = "";
}