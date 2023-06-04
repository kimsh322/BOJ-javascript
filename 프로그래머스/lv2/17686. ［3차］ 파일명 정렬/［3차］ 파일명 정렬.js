function solution(files) {
    const callback = (el) => {
        let i=0;
        let head = '';
        while(true){
            if(!Number.isNaN(Number(el[i])) && el[i] !== ' ') break
            head += el[i];
            i++
        }
        let num = '';
        while(true){
            if(el[i] === ' ' || el[i] === '') break;
            if(Number.isNaN(Number(el[i]))) break;
            num += el[i];
            if(num.length >=5) break;
            i++
        }
        return [head,num,el];
    }
    const newArr = files.map(callback);
    
    newArr.sort((a,b) => {
        return a[1] - b[1];
    })
    newArr.sort((a,b) => {
        return a[0].toUpperCase().localeCompare(b[0].toUpperCase());
    })

    return newArr.map(el => el[2]);
}