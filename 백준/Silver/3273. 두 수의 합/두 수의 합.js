let [n,input,x] = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input.split(' ').map(Number).sort((a,b) => a-b);
x = +x;
let left = 0;
let right = n-1;
let result = 0;
while(left<right){
   let sum = arr[left] + arr[right];
   if(sum === x) {
    result ++;
    left++;
    continue;
   }
   if(sum >x) right--;
   else left++
}
console.log(result);