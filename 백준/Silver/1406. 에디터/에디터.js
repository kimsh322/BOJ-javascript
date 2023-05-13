const [init, n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
let left = init.split('');
let right = [];
for(let i=0; i<n; i++){
  let cur = input[i].split(' ');
  if(cur[0] === 'L' && left.length) right.push(left.pop());
  if(cur[0] === 'D' && right.length) left.push(right.pop());
  if(cur[0] === 'B' && left.length) left.pop();
  if(cur[0] === 'P') left.push(cur[1]);
}
console.log(left.join('')+right.reverse().join(''));