function solution(priorities, location) {
    let result = 0;
    let max = Math.max(...priorities);
    while(priorities.length){
        let cur = priorities.shift();
        if(cur === max) {
            result++;
            if(location === 0) break;
            max = Math.max(...priorities);
        }
        else {
            priorities.push(cur);
            if(location===0) location = priorities.length;
        }
        location--;
    }
    return result;
}