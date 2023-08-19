function solution(topping) {
    const n = topping.length;
    let count = 0;
    const obj1 = {};
    const obj2 = {};
    obj1[topping[0]] = 1;
    for(let i=1; i<n; i++){
        if(topping[i] in obj2) obj2[topping[i]]++;
        else obj2[topping[i]] = 1;
    }
    let roll1 = Object.keys(obj1).length;
    let roll2 = Object.keys(obj2).length;
    if(roll1 === roll2) count++;
    
    for(let i=1; i<n; i++) {
        const cur = topping[i];
        if(cur in obj1) obj1[cur]++;
        else {
            obj1[cur] = 1;
            roll1++;
        }
        if(obj2[cur] === 1) {
            delete obj2[cur];
            roll2--;
        }
        else obj2[cur]--;
        if(roll1 === roll2) count++;
    }
    
    return count;
}