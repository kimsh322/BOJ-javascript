function solution(n) {
    let result = 1;
    let temp =0;
    let temp2 = 1;
    for(let i=1; i<n; i++){
        result = (temp + temp2) % 1234567;
        temp = temp2;
        temp2 = result;
    }
    return result;
}