function solution(n, stations, w) {
    let result = 0;
    const size = 2 * w + 1;
    let start = 1;
    for(let el of stations) {
        const a = (el - w - start);
        if(a > 0) result += Math.ceil(a / size);
        start = el + w + 1;
    }
    
    if(n >= start) result += Math.ceil((n - start + 1)/size);
    
    return result;
}