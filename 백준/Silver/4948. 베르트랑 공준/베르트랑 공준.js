const input = require('fs').readFileSync('/dev/stdin').toString().split("\n").map((el) => +el);
let i = 0;
let num = 0;
while (input[i] !== 0) {
  if (input[i] === 1 || input[i] === 2) {
    console.log(1);
    i++;
    continue;
  }
  for (let j = input[i] + 1; j <= 2 * input[i]; j += 2) {
    if (j % 2 === 0) j++;
    let isPrime = true;
    for (let k = 3; k <= Math.sqrt(j); k += 2) {
      if (j % k === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) num++;
  }
  console.log(num);
  i++;
  num = 0;
}