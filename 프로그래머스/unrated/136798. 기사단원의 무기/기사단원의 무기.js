function solution(number, limit, power) {
    const func = (num) => {
        let measure=0;
        for(let i=1; i<=Math.sqrt(num); i++){
            if(num % i ===0) {
                measure+=2;
                if(i * i === num) measure--;
            }
        }
        return measure;
    }
    let arr = [];
    for(let i=1; i<=number ; i++) arr.push(i);
    let newArr = arr.map(el => func(el));
    let result = newArr.reduce((sum,el) => {
        if(el>limit) el = power;
        return sum+el;
    });
    return result;
}