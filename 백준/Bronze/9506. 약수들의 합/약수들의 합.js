const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
let i = 0;
while (input[i] !== -1) {
  let a = input[i];
  let arr = [1];
  for (let j = 2; j <= Math.sqrt(a); j++) {
    if (a % j === 0) j === Math.sqrt(a) ? arr.push(j) : arr.push(j, a / j);
  }
  let sum = arr.reduce((a, el) => a + el, 0);
  if (sum !== a) console.log(`${a} is NOT perfect.`);
  else {
    arr.sort((a, b) => a - b);
    let result = `${a} = `;
    for (let j = 0; j < arr.length; j++) {
      result += j === arr.length - 1 ? arr[j] : arr[j] + " + ";
    }
    console.log(result);
  }
  i++;
}