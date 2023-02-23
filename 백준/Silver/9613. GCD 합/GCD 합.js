const [num, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const gcd = (a, b) => {
  if (a % b === 0) return b;
  return gcd(b, a % b);
};
let result =''
for (let i = 0; i < num; i++) {
  let sum = 0;
  let [a, ...arr] = input[i].split(" ").map(Number);
  for (let j = 0; j < a - 1; j++) {
    for (let k = j + 1; k < a; k++) {
      sum += gcd(arr[j], arr[k]);
    }
  }
   result += sum + '\n'
}
console.log(result);