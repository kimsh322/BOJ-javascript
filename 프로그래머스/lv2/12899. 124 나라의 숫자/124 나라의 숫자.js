function solution(n) {
    const arr = [1,2,4]
    let result = [];
    while(n>0) {
        let quo = Math.floor(n / 3);
        let rest = n - quo * 3;
        if(rest === 0) {
            quo--;
            rest += 3;
        }
        result.push(arr[rest-1]);
        n = quo;
    }
    return result.reverse().join('');
}