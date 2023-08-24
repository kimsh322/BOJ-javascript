function solution(bridge_length, weight, truck_weights) {
    const queue = Array(bridge_length).fill(0);
    let time = 0;
    let idx=0;
    let curWeight = 0;
    while(idx < truck_weights.length) {
        const cur = truck_weights[idx];
        const first = queue.shift();
        queue.push(0);
        curWeight -= first;
        if(curWeight + cur <= weight) {
            queue[queue.length-1] = cur;
            curWeight += cur;
            idx++
        }
        time++;
    }
    let left = 0;
    for(let i=0; i<queue.length; i++) {
        if(queue[i] !==0) left = i+1;
    }
    return time + left;
}