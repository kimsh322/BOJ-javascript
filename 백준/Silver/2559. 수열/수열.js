const [a,input] = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
const [n,k] = a.split(' ').map(Number);
let arr = input.split(' ').map(Number);
let init = 0;
for(let i=0; i<k; i++){
   init += arr[i];
}
if(n===k) console.log(init);
else {
   let max = init;
   for(let i=k; i<n; i++){
      init+=arr[i]-arr[i-k];
      max = Math.max(init,max);
   }
   console.log(max);
}