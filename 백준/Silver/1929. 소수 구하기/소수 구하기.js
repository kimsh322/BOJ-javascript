const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map((el) => +el);
if (input[0] <= 2 && input[1] >= 2) console.log(2);
if (input[0] % 2 === 0) input[0]++;
for (let i = input[0]; i <= input[1]; i += 2) {
  if (i < 3) continue;
  let isPrime = true;
  for (let j = 3; j <= Math.sqrt(i); j += 2) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(i);
}