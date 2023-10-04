function solution(book_time) {
    const timeToNum = (arr) => {
        const startArr = arr[0].split(':');
        const endArr = arr[1].split(':');
        const start = startArr[0] * 60 + +startArr[1];
        const end = endArr[0] * 60 + +endArr[1];
        return [start,end];
    }
    const bookTime = book_time.map(timeToNum).sort((a,b) => a[0] - b[0]);

    const newArr = [[bookTime[0]]];
    for(let i=1; i<bookTime.length; i++) {
        let bool = false;
        for(let j =0; j<newArr.length; j++) {
            const endTime = newArr[j][newArr[j].length-1][1];
            if(endTime + 10 <= bookTime[i][0]) bool = true;
            if(bool) {
                newArr[j].push(bookTime[i]);
                break;
            } 
        }
        if(!bool) newArr.push([bookTime[i]]);
    }

    return newArr.length;
}