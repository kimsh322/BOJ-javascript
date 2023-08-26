function solution(numbers) {
    numbers.sort((a,b) => +(String(b)+String(a)) - +(String(a)+String(b)))
    let result = numbers.join('');
    while(true) {
        if(result.length>1 && result[0] === '0') {
            const arr = result.split('');
            arr.shift();
            result = arr.join('');
        }
        else break;
    }
    return result;
}