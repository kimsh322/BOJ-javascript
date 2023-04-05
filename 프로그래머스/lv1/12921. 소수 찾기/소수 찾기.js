function solution(n) {
    let num=0;
    for(let j=2; j<=n; j++){
        let bool = true;
        for(let i=2; i<=Math.sqrt(j);i++){
            if(j % i ===0 ){
                bool = false;
                break;
            } 
        }
        if(bool) num++;
    }
    return num;
}