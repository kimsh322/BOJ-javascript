const a = require('fs').readFileSync('/dev/stdin').toString().trim();
const alp = 'abcdefghijklmnopqrstuvwxyz';
for(let el of alp){
    process.stdout.write(a.indexOf(el) + " ");
};