function solution(arr) {
    const gcd = (a,b) =>{
        if(a % b===0) return b;
        return gcd(b, a%b);
    }
    const lcm = (a,b) =>{
        return a*b/gcd(a,b);
    }
    while(arr.length>1){
        arr.push(lcm(arr[0],arr[1]));
        arr.shift();
        arr.shift();
    }
    return arr[0];
}