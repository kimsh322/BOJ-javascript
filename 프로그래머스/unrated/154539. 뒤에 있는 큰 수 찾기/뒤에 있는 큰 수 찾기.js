function solution(numbers) {
    let stack = [0];
    for(let i=1; i<numbers.length; i++){
        while(stack.length && numbers[stack[stack.length-1]] < numbers[i]){
            let idx = stack.pop();
            numbers[idx] = numbers[i];
        }
        stack.push(i);
    }
    while(stack.length){
        let idx = stack.pop();
        numbers[idx] = -1;
    }
    return numbers;
}