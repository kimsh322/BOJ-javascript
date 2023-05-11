const input = require("fs").readFileSync('/dev/stdin').toString().trim();
const [n,k] = input.split(' ').map(Number);
let visited = Array(100001).fill(false);
let queue = [[n,''+n]];
let result = '';
while(true){
  let [cur,curStr] = queue.shift();
  if(cur===k) {
    result = curStr;
    break;
  }
  if(cur<100000 && !visited[cur+1]){
    queue.push([cur+1,curStr+` ${cur+1}`]);
    visited[cur+1] = true;
  }
  if( 0<cur && !visited[cur-1]){
    queue.push([cur-1,curStr+` ${cur-1}`]);
    visited[cur-1] = true;
  }
  if(cur<=50000 && !visited[cur*2]){
    queue.push([cur*2,curStr+` ${cur*2}`]);
    visited[cur*2] = true;
  }
}
console.log(result.split(' ').length-1);
console.log(result);