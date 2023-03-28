function solution(a, b) {
    let thirty = [4,6,9,11];
    let num=0;
    for(let i=1; i<a;i++){
        if(i===2) {
            num+= 29;
            continue;
        }
        if(thirty.indexOf(i) !== -1) num += 30;
        else num += 31;
    }
    num += b-1;
    console.log(num);
    let week = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    num %= 7;
    return week[num];
}