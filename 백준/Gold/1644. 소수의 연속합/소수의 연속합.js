const n = +require("fs").readFileSync('/dev/stdin').toString().trim();
const prime = [];
const check = Array(n + 1).fill(true);
for (let i = 2; i <= Math.sqrt(n); i++) {
  if (!check[i]) continue;
  for (let j = i * i; j <= n; j += i) {
    check[j] = false;
  }
}
for (let i = 2; i <= n; i++) {
  if (check[i]) prime.push(i);
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
