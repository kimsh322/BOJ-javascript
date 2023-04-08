function solution(k, score) {
    let honor = [];
    let result = [];
    for(let i=0; i<Math.min(k,score.length);i++) {
        honor.push(score[i]);
        result.push(Math.min(...honor));
    }
    for(let i=k; i<score.length; i++){
        let min = Math.min(...honor);
        if(min>= score[i]){
            result.push(min);
            continue;
        } 
        let minIdx = honor.indexOf(min);
        honor.splice(minIdx,1,score[i]);
        result.push(Math.min(...honor));
    }
    return result;
}