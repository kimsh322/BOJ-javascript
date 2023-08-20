function solution(x, y, n) {
    const queue = [[0,x]];
    let idx=0;
    const visited = Array(1000001).fill(false);
    visited[x] = true;
    
    while(idx < queue.length) { 
        const [count,cur] = queue[idx++];
        if(cur === y) return count;
        if(cur+n <= y && !visited[cur+n]) {
            queue.push([count+1,cur + n]);
            visited[cur+n] = true;
        }
        if(cur*2 <= y && !visited[cur*2]) {
            queue.push([count+1,cur * 2]);
            visited[cur*2] = true;
        }
        if(cur*3 <= y && !visited[cur*3]) {
            queue.push([count+1,cur * 3]);
            visited[cur*3] = true;
        }
    }
    return -1;
}