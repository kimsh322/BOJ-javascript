function solution(s, n) {
    let result=[]
   for(let i=0; i<s.length;i++){
       let b=0;
       if(s[i] === ' ') {
           result.push(' ');
           continue;
       }
       if(s.charCodeAt(i)<=90){
           b = s.charCodeAt(i)+n >90 ? s.charCodeAt(i)+n-26 : s.charCodeAt(i)+n;
           result.push(String.fromCharCode(b));
       }
       else {
           b = s.charCodeAt(i)+n >122 ? s.charCodeAt(i)+n-26 : s.charCodeAt(i)+n;
           result.push(String.fromCharCode(b));
       }
   }
    return result.join('')
}