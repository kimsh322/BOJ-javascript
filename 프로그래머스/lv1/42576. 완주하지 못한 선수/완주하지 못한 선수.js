function solution(participant, completion) {
    let obj = {};
    for(let el of participant){
        if(obj[el]) obj[el]++;
        else obj[el] = 1;
    }
    for(let el of completion){
        if(obj[el] === 1) delete obj[el];
        else obj[el]--;
    }
    for(let key in obj) return key
}