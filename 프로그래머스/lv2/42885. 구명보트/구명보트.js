function solution(people, limit) {
    let num = 0;
    people.sort((a,b) => a-b);
    while(people.length>1){
        let cur =people.pop();
        if(limit-cur>=people[0]) people.shift();
        num++
    }
    if(people.length>0) num++
    return num;
    
}