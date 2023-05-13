const [init, n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
let left = init.split('');
let right = [];
let str = '';
for(let i=0; i<n; i++){
  let cur = input[i];
  if(cur.length ===3) str = cur[2];
  if(cur[0] === 'L' && left.length) right.push(left.pop());
  if(cur[0] === 'D' && right.length) left.push(right.pop());
  if(cur[0] === 'B' && left.length) left.pop();
  if(cur[0] === 'P') left.push(str);
}
console.log(left.join('')+right.reverse().join(''));