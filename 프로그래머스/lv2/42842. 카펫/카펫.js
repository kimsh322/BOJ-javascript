function solution(brown, yellow) {
    let arr = [];
    // brown === (width + height) *2 -4
    for(let i=3; i<=2500; i++){
        let brownSide1 =i;
        let brownSide2 = (brown+4)/2 - brownSide1;
        let yellowSide1 = brownSide1 -2;
        let yellowSide2 = brownSide2 -2;
        if(yellowSide1 * yellowSide2 === yellow) {
            arr.push(brownSide1,brownSide2);
            break;
        }
    }
    arr.sort((a,b) => b-a);
    return arr;
}