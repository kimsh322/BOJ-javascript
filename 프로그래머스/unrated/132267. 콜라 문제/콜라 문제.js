function solution(a, b, n) {
    let result =0;
    while(true){
        let cur = Math.floor(n/a);
        if(cur===0) break;
        result += cur*b;
        n -= cur*(a-b);
    }
    return result;
}