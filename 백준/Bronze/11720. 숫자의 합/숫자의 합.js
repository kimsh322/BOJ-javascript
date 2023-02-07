const fs = require("fs");
const a = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(a[1].split('').reduce((a,el) => a+(+el),0));