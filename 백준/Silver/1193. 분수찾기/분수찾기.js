const a = +require('fs').readFileSync('/dev/stdin').toString();
let sum = 0;
let i = 1;
while (true) {
  sum += i;
  if (a <= sum) break;
  i++;
}
if (i % 2 === 0) {
  console.log(`${i - sum + a}/${sum + 1 - a}`);
} else {
  console.log(`${1 + sum - a}/${i - sum + a}`);
}