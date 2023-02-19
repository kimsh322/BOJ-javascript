function solution(s){
    let stack = [s[0]];
    let arr = s.split('')
    let i=1;
    while(i<s.length){
        if(stack[stack.length-1] === arr[i]){
            stack.pop()
        } else{
            stack.push(arr[i]);
        }
        i++
    }
    return stack.length === 0 ? 1 : 0;
}