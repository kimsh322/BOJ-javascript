function solution(numbers, hand) {
    let result = '';
    const leftNums = [1,4,7];
    const rightNums = [3,6,9];
    const centerNums = [2,5,8,0,11];
    let leftHand = 10;
    let rightHand = 12;
    
    const dist = (a,b) => {
        if(a === 0) a = 11;
        if(b === 0) b = 11;
        const sub = Math.abs(a-b);
        let distance = 0;
        if(sub <= 1) distance = 1;
        else if(sub <= 4) distance = 2;
        else if(sub <= 7) distance = 3;
        else distance = 4;
        if(centerNums.includes(a)) distance -= 1;
        return distance;
    }
    
    for(let number of numbers) {
        if(leftNums.includes(number)) {
            result += 'L';
            leftHand = number;
            continue;
        }
        if(rightNums.includes(number)) {
            result += 'R';
            rightHand = number;
            continue;
        }
        const leftDist = dist(leftHand,number);
        const rightDist = dist(rightHand,number);
        if(leftDist === rightDist) {
            const isLeft = hand === 'left';
            result += isLeft ? 'L' : 'R';
            if(isLeft) leftHand = number;
            else rightHand = number;
        } 
        else if(leftDist < rightDist) {
            result += 'L';
            leftHand = number;
        } else {
            result += 'R';
            rightHand = number;
        }
    }
    return result;
}