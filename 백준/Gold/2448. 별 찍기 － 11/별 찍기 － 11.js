const n = +require("fs").readFileSync('/dev/stdin').toString().trim();
const k = Math.log2(n / 3);

const func = (num) => {
  if (num === 0) {
    return ["*", "* *", "*****"];
  }
  let stars = func(num - 1);
  let result = [];
  for (let i = 0; i < stars.length; i++) {
    result.push(stars[i]);
  }
  for (let i = 0; i < stars.length; i++) {
    result.push(stars[i] + " ".repeat(2 * stars.length - 1 - i * 2) + stars[i]);
  }
  return result;
};

const answer = func(k);

for (let i = 0; i < answer.length; i++) {
  answer[i] = " ".repeat(answer.length - i - 1) + answer[i] + " ".repeat(answer.length - i - 1);
}

console.log(answer.join("\n"));