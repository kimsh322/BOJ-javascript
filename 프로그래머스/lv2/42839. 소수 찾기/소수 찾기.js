function solution(numbers) {
    const isPrime = (num) => {
        if(num<2) return false;
        if(num === 2) return true;
        if(num % 2 === 0) return false;
        for(let i=3; i<=Math.sqrt(num) ; i+=2){
            if(num % i === 0) return false;
        }
        return true;
    }
    
    let arr = numbers.split('').map(Number);
    const visited = Array(arr.length).fill(false);
    let newArr = [];
    let set = new Set();
    const func = () => {
        for(let i=0; i<arr.length; i++){
            if(visited[i]) continue;
            visited[i] = true;
            newArr.push(arr[i]);
            set.add(+newArr.join(''));
            func();
            newArr.pop();
            visited[i] = false;
        }
    }
    func();
    let result = 0;
    for(let el of set) if(isPrime(el)) result++;
    return result;
}