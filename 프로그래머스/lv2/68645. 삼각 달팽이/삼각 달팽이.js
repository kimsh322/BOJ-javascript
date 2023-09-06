function solution(n) {
    const arr = [];
    for(let i=1; i<=n; i++) arr.push(Array(i).fill(0));
    
    let cur = 1;
    let i=n;
    let a=-1;
    let b=0;
    
    while(i>0) {
        for(let j=0; j<i; j++) arr[++a][b] = cur++;
        i--
        for(let j=0; j<i; j++) arr[a][++b] = cur++;
        i--
        for(let j=0; j<i; j++) arr[--a][--b] = cur++;
        i--
    }
    return arr.flat()
}