function solution(record) {
    const idObj = {};
    const nickArr = [];
    for(let i=0; i<record.length; i++){
        let [mov, id, nick] = record[i].split(' ');
        if(nick) idObj[id] = nick ;
        if(mov !== 'Change') nickArr.push([mov,id]);
    }
    let result = [];
    for(let el of nickArr){
        let mov;
        if(el[0] === 'Enter') mov = '들어왔';
        else mov = '나갔'
        result.push(`${idObj[el[1]]}님이 ${mov}습니다.`);
    }
    return result;
}