const input = require('fs').readFileSync('/dev/stdin').toString().split("\n").map((el) => +el);

let arr = [];
let num = 0;
if (input[0] <=2 && input[1]>=2) {
    arr.push(2);
    num++
}
if (input[0] % 2 === 0) input[0]++;
for (let i = input[0]; i <= input[1]; i += 2) {
  if(i===1) continue;
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    num++;
    arr.push(i);
  }
}
if (num === 0) console.log(-1);
else {
  let sum = arr.reduce((a, el) => a + el);
  console.log(sum);
  console.log(arr[0]);
}
