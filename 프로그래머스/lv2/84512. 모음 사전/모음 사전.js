function solution(word) {
    const arr = ['A','E','I','O','U'];
    const newArr = [];
    const total = [];
    const func = () => {
        if(newArr.length>=5) return;
        for(let i=0; i<5; i++){
            newArr.push(arr[i]);
            total.push(newArr.join(''));
            func();
            newArr.pop();
        }
    }
    func();
    return total.indexOf(word)+1;
}