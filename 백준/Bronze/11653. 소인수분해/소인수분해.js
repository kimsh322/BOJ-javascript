let a = +require('fs').readFileSync('/dev/stdin').toString();
while (a > 1) {
  let b = a;
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) {
      a = a / i;
      console.log(i);
      break;
    }
  }
  if (a === b) {
    console.log(b);
    break;
  }
}