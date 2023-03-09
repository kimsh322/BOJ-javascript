function solution(numbers) {
    let set = new Set();
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            set.add(numbers[i]+numbers[j]);
        }
    }
    let result = [];
    for(let el of set){
        result.push(el);
    }
    result.sort((a,b) =>a-b);
    return result;
}