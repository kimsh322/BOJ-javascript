function solution(queue1, queue2) {
    let sum1 = 0;
    let sum2 = 0;
    for(let i=0; i<queue1.length; i++) {
        sum1 += queue1[i];
        sum2 += queue2[i];
    }
    let target = (sum1 + sum2) / 2 ;
    
    let count = 0;
    let end = false;
    let idx = 0;
    while(queue2.length) {
        if(sum1 === target) {
            end = true;
            break;
        }
        if(sum1 > target) {
            sum1 -= queue1[idx];
            idx++;
            count++;
        } else {
            let cur = queue2.shift();
            queue1.push(cur);
            sum1 += cur;
            count++;
        }
    }
    
    return end ? count : -1;
}