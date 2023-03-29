function solution(s) {
   const valid = (str,x) => {
       str = str.slice(x)+str.slice(0,x);
        let stack = [];
        for(let i=0; i<str.length; i++){
            if(str[i] === '(') stack.push('(')
            if(str[i] === '{') stack.push('{')
            if(str[i] === '[') stack.push('[')
            if(str[i] === ')'){
                if(stack[stack.length-1] !== '(') return false;
                stack.pop();
            } 
            if(str[i] === '}' ) {
                if(stack[stack.length-1] !== '{') return false;
                stack.pop();
            } 
            if(str[i] === ']' ) {
                if(stack[stack.length-1] !== '[') return false;
                stack.pop();
            } 
        }
       if(stack.length===0) return true;
       return false;
    }
    let result=0;
   for(let i=0; i<s.length; i++){
       if(valid(s,i)) result++
   }
    return result;
}