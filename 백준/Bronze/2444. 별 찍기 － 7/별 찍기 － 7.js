const input = +require('fs').readFileSync('/dev/stdin').toString();
for (let i = 1; i <= 2 * input - 1; i++) {
  let num;
  if (i <= input) {
    num = (i - 1) * 2 + 1;
  } else {
    num = (2 * input - i - 1) * 2 + 1;
  }
  let result =
    " ".repeat(Math.abs(input - i)) +
    "*".repeat(num)
  console.log(result);
}
