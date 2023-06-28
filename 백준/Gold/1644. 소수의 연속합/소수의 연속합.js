const n = +require("fs").readFileSync('/dev/stdin').toString().trim();
const prime = [2];
for (let i = 3; i <= n; i += 2) {
  let bool = true;
  for (let j = 3; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      bool = false;
      break;
    }
  }
  if (bool) prime.push(i);
}

let left = 0,
  right = 0,
  sum = 2,
  answer = 0;

while (right < prime.length) {
  if (sum === n) {
    answer++;
    right++;
    sum += prime[right];
  } else if (sum < n) {
    right++;
    sum += prime[right];
  } else {
    sum -= prime[left];
    left++;
  }
}

console.log(answer);