function solution(n, words) {
    let obj = {};
    let result = [0,0];
    let already = [words[0]];
    for(let i=1; i<=n; i++){
        obj[i] = 0;
    }
    obj[1] = 1;
    for(let i=1; i<words.length; i++){
        let cur = i % n+1 === 0 ? 3 : i%n+1
        obj[cur]++
        if(words[i-1][words[i-1].length-1] !== words[i][0] || already.indexOf(words[i]) !== -1){
            result = [cur,obj[cur]];
                      break;
        }
        already.push(words[i]);
    }
    console.log(obj);
    return result;
}