function solution(clothes) {
    let obj = {};
    for(let el of clothes) {
        if(obj[el[1]]) obj[el[1]].push(el[0])
        else obj[el[1]] = [el[0]];
    }
    let result =1;
    for(let key in obj) {
        result *=(obj[key].length+1)
    }
    return result-1;
}