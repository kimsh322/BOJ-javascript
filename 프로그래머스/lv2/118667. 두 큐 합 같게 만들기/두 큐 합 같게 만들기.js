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
    let idx1 = 0;
    let idx2 = 0;
    let maxIdx = queue2.length-1;
    while(idx2 <= maxIdx) {
        if(sum1 === target) {
            end = true;
            break;
        }
        if(sum1 > target) {
            sum1 -= queue1[idx1];
            idx1++;
            count++;
        } else {
            let cur = queue2[idx2];
            queue1.push(cur);
            sum1 += cur;
            idx2++;
            count++;
        }
    }
    
    return end ? count : -1;
}