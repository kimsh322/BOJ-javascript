const [a,...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [n,m] = a.split(' ').map(Number);
let arr = [];
for(let i=0; i<n; i++){
  arr.push([...input[i].split(' ').map(Number)]);
}

const getChickenDist = (chicken) => {
  let dist = 0;
  for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
      if(arr[i][j] ===1) {
        let min=100;
        for(let el of chicken){
          let[x,y] = el;
          min = Math.min(min,Math.abs(x-i)+Math.abs(y-j));
        }
        dist += min;
      }
    }
  }
  return dist;
}

let sub = 0-m;
const chickenArr = [];
for(let i=0; i<n; i++){
  for(let j=0; j<n; j++){
    if(arr[i][j] ===2) {
      chickenArr.push([i,j]);
      sub++;
    }
  }
}

if(!sub) console.log(getChickenDist(chickenArr));
else {
  const inputArr = [];
  let newArr = [];
  let visited = Array(m+1).fill(false);
  const combi = (num) => {
    if(num === m) return inputArr.push([...newArr]);
    for (let i = num; i < chickenArr.length; i++) {
      if (visited[i]) continue;
      for (let j = 0; j <= i; j++) visited[j] = true;
      newArr.push(chickenArr[i]);
      combi(num + 1);
      newArr.pop();
      for (let j = 0; j <= i; j++) visited[j] = false;
    }
  }
  combi(0);
  let min = 999999;
  for(let el of inputArr){
    min = Math.min(min, getChickenDist(el));
  }
  console.log(min);
}