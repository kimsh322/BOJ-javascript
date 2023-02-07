const fs = require('fs');
const a = fs.readFileSync('/dev/stdin').toString().trim();
console.log(a.charCodeAt(0));