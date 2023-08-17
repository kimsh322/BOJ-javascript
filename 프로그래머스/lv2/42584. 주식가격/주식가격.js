function solution(prices) {
    const n = prices.length
    const answer = Array(n).fill(0);
    const stack = [];

    for(let i=0; i<n; i++) {
        if(stack.length !== 0) {
            while(stack[stack.length-1][1] > prices[i]) {
                const end = stack[stack.length-1]
                answer[end[0]] = i - end[0]
                stack.pop();
                if(!stack.length) break;
            }
        }
        stack.push([i,prices[i]]);
    }
    
    while(stack.length) {
        const cur = stack.pop();
        answer[cur[0]] = n - 1 - cur[0];
    }
    
    return answer;
}