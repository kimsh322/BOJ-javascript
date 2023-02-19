const input = +require('fs').readFileSync('/dev/stdin').toString();
if (input === 0 || input === 1) console.log(1);
else {
  let result = 1;
  for (let i = 2; i <= input; i++) {
    result *= i;
  }
  console.log(result);
}