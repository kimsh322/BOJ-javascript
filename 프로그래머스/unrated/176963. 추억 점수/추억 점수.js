function solution(name, yearning, photo) {
    let obj = {};
    for(let i=0; i<name.length;i++){
        if(i>=yearning.length) obj[name[i]] = 0;
        obj[name[i]] = yearning[i];
    }
    let result = [];
    for(let i=0; i<photo.length;i++){
        let total = 0;
        for(let el of photo[i]){
            if(el in obj)total += obj[el];
        }
        result.push(total);
    }
    return result;
}