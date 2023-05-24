function solution(fees, records) {
    const total = (time) => {
        const [initTime, initFee,unitTime,unitFee] = fees;
        if(time<=initTime) return initFee;
        let totalFee = initFee + Math.ceil((time-initTime)/unitTime) * unitFee;
        return totalFee;
    }
    
    let obj = {};
    for(let el of records){
        const [time,carNumber] = el.split(' ');
        let newTime = (time[0] * 10 + Number(time[1])) * 60 + Number(time[3]+time[4]);
        if(carNumber in obj) obj[carNumber].push(newTime);
        else obj[carNumber] = [newTime];
    }
    
    let result = [];
    for (let car in obj) {
        if(obj[car].length %2 === 1) obj[car].push(1439);
        let time = obj[car].reduce((a,el,idx) => {
            if(idx % 2 === 1) return a+el;
            return a-el;
        },0)
        result.push([car,total(time)]);
    }
    return result.sort((a,b) => a[0] - b[0]).map(el => el[1]);
}