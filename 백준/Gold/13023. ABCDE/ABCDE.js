const [a,...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n,m] = a.split(' ').map(Number);
let arr = Array(n).fill(0).map(() => []);
for(let i=0; i<m; i++){
  let [curA,curB] = input[i].split(' ').map(Number);
  arr[curA].push(curB);
  arr[curB].push(curA);
}

const visited = Array(n).fill(false);
const dfs = (cur,num) => {
  if(num >=5) {
    result = true;
    return;
  } 

  for(let el of arr[cur]){
    if(visited[el]) continue;
    visited[el] = true;
    dfs(el,num+1);
    visited[el] = false;
    if(result) break;
  }
}
let result = false;
for(let i=0; i<n; i++){
  visited[i] = true;
  dfs(i,1);
  visited[i] = false;
  if(result) break;
}
console.log(result ? 1 : 0);