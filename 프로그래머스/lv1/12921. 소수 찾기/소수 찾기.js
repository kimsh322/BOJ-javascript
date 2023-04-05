function solution(n) {
    let num=0;
    for(let j=3; j<=n; j+=2){
        let bool = true;
        for(let i=3; i<=Math.sqrt(j);i+=2){
            if(j % i ===0 ){
                bool = false;
                break;
            } 
        }
        if(bool) num++;
    }
    if(n>=2) num++
    return num;
}