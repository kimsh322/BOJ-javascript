function solution(k, m, score) {
    score.sort((a,b) => a-b);
    let result = 0;
    while(score.length>=m){
        let cur = score[score.length-m];
        score.splice(-m);
        result += m*cur;
    }
    return result;
}