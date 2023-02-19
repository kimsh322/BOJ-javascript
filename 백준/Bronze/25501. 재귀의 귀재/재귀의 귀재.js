const [a, ...input] = require('fs').readFileSync('/dev/stdin').toString().split("\n");
let num = 0;
const recursion = (s, l, r) => {
  num++;
  if (l >= r) return 1;
  else if (s[l] !== s[r]) return 0;
  else return recursion(s, l + 1, r - 1);
};
const isPalindrome = (s) => {
  return recursion(s, 0, s.length - 1);
};
for (let i = 0; i < +a; i++) {
  console.log(`${isPalindrome(input[i])} ${num}`);
  num = 0;
}