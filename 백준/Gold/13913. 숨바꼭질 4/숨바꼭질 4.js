const input = require("fs").readFileSync('/dev/stdin').toString().trim();
const [n,k] = input.split(' ').map(Number);
let visited = Array(100001).fill(false);
let prev = Array(100001).fill(-2);
prev[n] = -1;
let queue = [n];
visited[n] = true;
let result = '';
let number = -1;
while(true){
  let cur = queue.shift();
  if(cur===k) {
    let resultArr = [];
    const func = (num) => {
      number++;
      resultArr.push(num);
      if(prev[num] === -1) return;
      else func(prev[num]);
    }
    func(cur);
    result = resultArr.reverse().join(' ');
    break;
  }
  if(cur<100000 && !visited[cur+1]){
    queue.push(cur+1);
    visited[cur+1] = true;
    prev[cur+1] = cur;
  }
  if( 0<cur && !visited[cur-1]){
    queue.push(cur-1);
    visited[cur-1] = true;
    prev[cur-1] = cur;
  }
  if(cur<=50000 && !visited[cur*2]){
    queue.push(cur*2);
    visited[cur*2] = true;
    prev[cur*2] = cur;
  }
}
console.log(number);
console.log(result);