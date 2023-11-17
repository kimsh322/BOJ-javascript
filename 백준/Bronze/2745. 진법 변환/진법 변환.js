const [n,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const obj = {};
for(let i=0; i<10; i++) obj[i] = i;
for(let i=0; i<alpha.length; i++) obj[alpha[i]] = i + 10;

const arr = n.split('').reverse();
let result = 0;
for(let i=0; i<arr.length; i++) {
    result += obj[arr[i]] * (b ** i)
}
console.log(result);