function solution(number, k) {
    const stack = [];
    
    for(let el of number) {
        while(stack.length > 0 && stack[stack.length-1] < el && k > 0) {
            stack.pop();
            k--;
        }
        stack.push(el);
    }
    
    while(k >0) {
        stack.pop();
        k--;
    }

    return stack.join('')
}