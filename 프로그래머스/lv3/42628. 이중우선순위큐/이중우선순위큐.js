function solution(operations) {
    let queue = [];
    while(operations.length){
        let cur = operations.shift().split(' ');
        if(cur[0] === 'I') queue.push(Number(cur[1]));
        else {
            if(queue.length === 0 ) continue;
            if(cur[1] === '1'){
                let max = Math.max(...queue);
                let idx = queue.indexOf(max);
                queue.splice(idx,1);
            } else {
                let min = Math.min(...queue);
                let idx = queue.indexOf(min);
                queue.splice(idx,1);
            }
        }
    }
    if(queue.length ===0) return [0,0];
    let max = Math.max(...queue);
    let min = Math.min(...queue);
    return [max,min];
}