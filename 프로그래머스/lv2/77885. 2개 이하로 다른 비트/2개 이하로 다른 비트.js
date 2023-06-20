function solution(numbers) {
    const result = numbers.map(el => {
        let elArr = ('' + el.toString(2)).split('').reverse();
        let firstZero = elArr.length;
        for(let i=0; i<elArr.length; i++){
            if(elArr[i] === '0') {
                firstZero = i ;
                break;
            }
        }
        if(firstZero === 0) return el+1 ;
        return el + Math.pow(2,firstZero-1) ;
    })
    return result;
}