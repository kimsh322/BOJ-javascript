const n = +require("fs").readFileSync('/dev/stdin').toString().trim();
function star(num) {
  if (num === 1) return ["*"];
  let b = star(num / 3);
  let result = [];
  for (let el of b) result.push(el + el + el);
  for (let el of b) result.push(el + " ".repeat(el.length) + el);
  for (let el of b) result.push(el + el + el);
  return result;
}
console.log(star(n).join("\n"));