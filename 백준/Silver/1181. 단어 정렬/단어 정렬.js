const [a, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
input.sort();
input.sort((a, b) => a.length - b.length);
let result = [...new Set(input)];
console.log(result.join("\n"));