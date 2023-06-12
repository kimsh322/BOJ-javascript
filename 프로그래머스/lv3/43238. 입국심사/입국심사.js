function solution(n, times) {
    let left=0;
    let right = 1000000000 * n;
    let result = 0;
    while(left<=right){
        let middle = Math.floor((left+right)/2);
        let aa = times.reduce((a,el) => a+Math.floor(middle/el),0);
        if (aa<n) left = middle+1;
        else if(aa>n) right = middle-1;
        else {
            result = middle;
            right = middle-1;
        }
    }
    if(!result) result = left;
    return result;
}