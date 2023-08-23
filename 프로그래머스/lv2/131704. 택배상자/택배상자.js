function solution(order) {
    const stack = [];
    let idx = 0;
    let result = 0;
    
    for(let i=0; i<order.length; i++) {
        const cur = order[i];
        while(cur > idx+1) {
            stack.push(idx+1);
            idx++
        }
        if(cur === idx+1) {
            result++;
            idx++;
            continue;
        } 
        if(stack[stack.length-1] !== cur) break;
        result++;
        stack.pop();
    }
    return result;
}