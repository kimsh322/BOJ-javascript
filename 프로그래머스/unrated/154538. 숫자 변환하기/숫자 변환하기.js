function solution(x, y, n) {
    const queue = [[0,x]];
    let idx=0;
    const visited = Array(1000001).fill(false);
    visited[x] = true;
    
    while(idx < queue.length) { 
        const [count,cur] = queue[idx++];
        if(cur === y) return count;
        for(let next of [cur+n,cur*2,cur*3]) {
            if(next <= y && !visited[next]) {
            queue.push([count+1,next]);
            visited[next] = true;
            }
        }
    }
    return -1;
}