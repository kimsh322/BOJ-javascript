function solution(ingredient) {
    const stack = [];
    let count = 0;
    for(let i=0; i<ingredient.length; i++) {
        stack.push(ingredient[i]);
        if(stack.length >=4 && ingredient[i] === 1) {
            let a = stack.length;
            if(stack[a-2] === 3 && stack[a-3] === 2 && stack[a-4] === 1) {
                for(let j=0; j<4; j++) stack.pop();
                count++;
            }
        }
    }
    return count;
}