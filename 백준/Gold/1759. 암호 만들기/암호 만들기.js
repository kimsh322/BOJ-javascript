const [a,input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
const [l,c] = a.split(' ').map(Number);
const arr = input.split(' ');
arr.sort();
const vowel = ['a','e','i','o','u'];
let result = '';
let visited = Array(c).fill(false);
let newArr = [];
const func = (num,x,y) => {
  if(num===l && x>=1 && y>=2) {
    result += newArr.join('')+'\n';
    return;
  }
  if(num>=l) return;
  for(let i=num; i<c; i++){
    if(visited[i]) continue;
    for(let j=0; j<=i ;j++) visited[j] = true;
    vowel.includes(arr[i]) ? x++ : y++ ;
    newArr.push(arr[i]);
    func(num+1,x,y);
    newArr.pop();
    vowel.includes(arr[i]) ? x-- : y-- ;
    for(let j=0; j<=i ;j++) visited[j] = false;
  }
}

func(0,0,0)

console.log(result);