function solution(food) {
   let str = '';
    for(let i=1; i<food.length; i++){
        let num = Math.floor(food[i]/2);
        str += `${i}`.repeat(num);
    }
    let result = str + '0' + str.split('').reverse().join('');
    return result;
}