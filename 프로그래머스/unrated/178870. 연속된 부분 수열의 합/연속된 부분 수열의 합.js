function solution(sequence, k) {
    let start = 0;
    let end = 0;
    let sum = sequence[0];
    let results = [];
    while(end < sequence.length) {
        if(sum === k) {
            results.push([start,end])
        }
        if(sum < k) {
            end++;
            sum += sequence[end];
        } else {
            sum -= sequence[start];
            start++;
        }
    }
    
    results.sort((a,b) => a[0] - b[0]);
    results.sort((a,b) => (a[1] - a[0]) - (b[1] - b[0]));
    return results[0]
}