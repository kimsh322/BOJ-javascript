function solution(n, k) {
    const facto = (a) => {
        if(a <= 1) return 1;
        return a * facto(a-1);
    }
    let arr = Array.from({length : n}, (_,idx) => idx+1);
    const result = [];
    const func = (rest,cur) => {
        if(cur < 1) return;
        const a = Math.floor((rest-1) / facto(cur-1));
        rest = rest - a * facto(cur-1);
        result.push(arr[a]);
        arr = arr.filter(el => el !== arr[a]);
        func(rest,cur-1);
    }
    
    func(k,n);
    return result;
}