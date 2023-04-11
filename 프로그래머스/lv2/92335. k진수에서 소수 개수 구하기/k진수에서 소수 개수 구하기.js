function solution(n, k) {
    const isPrime = (num) => {
        if(num<2) return false;
        if(num===2) return true;
        if(num %2 ===0) return false;
        for(let i=3; i<=Math.sqrt(num); i+=2){
            if(num % i ===0) return false;
        }
        return true;
    }
    let str = n.toString(k).split('');
    let result = 0;
    let curNum='';
    while(str.length){
        let curStr = str.shift();
        if(curStr === '0') {
            if(isPrime(+curNum)) result++;
            curNum='';
            continue;
        }
        curNum += curStr;
    }
    if(isPrime(+curNum)) result++;
    return result;
}