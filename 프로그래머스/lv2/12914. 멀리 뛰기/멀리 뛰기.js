function solution(n) {
    if(n===1) return 1;
    const tail = (a,pre,cur) =>{
      let sum = pre+cur
      pre = cur % 1234567
      cur = sum % 1234567
      if(a===n) return cur;
      return tail(++a,pre,cur);
    }
    return tail(2,1,1)
}