function solution(n, s) {
    // n개 원소의 합이 s
    // n개 원소의 곱이 최대
    if(n >s) return [-1];
    let min = Math.floor(s/n);
    let rest = s - min*n;
    let arr = [];
    for(let i=0; i<n; i++) arr.push(min);
    for(let i=arr.length-1;i>arr.length-1-rest ;i--) arr[i]++;
    return arr;
}