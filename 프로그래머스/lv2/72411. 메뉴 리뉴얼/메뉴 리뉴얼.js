function solution(orders, course) {
    const isSatisCourse = (a) => {
        let count=0;
        for(let order of orders) {
            if(a.length > order.length) continue;
            let isTrue = true;
            for(let i=0; i<a.length; i++) {
                if(!isTrue) break;
                if(!order.includes(a[i])) isTrue = false;
            }
            if(isTrue) count++;
        }
        return count ;
    }
    
    let allCourse = new Set();
    const tempArr = [];
    const visited = Array(26).fill(false);
    
    // 가능한 모든 course 구하기
    const getAllCourse = (a,index,order) => {
        if(tempArr.length >= a) {
            allCourse.add(tempArr.join(''));
            return;
        }
        
        for(let i=index; i<order.length ;i++) {
            if(visited[i]) continue;
            visited[i] = true;
            tempArr.push(order[i]);
            getAllCourse(a,i,order);
            tempArr.pop();
            visited[i] = false;
        }
    }
    
    const result = [];

    for(let number of course) {
        allCourse = new Set();
        for(let order of orders) {
            order = order.split('').sort().join('');
            getAllCourse(number,0,order);
        }

        let countArr = [];
        for(let course of allCourse) {
            let count = isSatisCourse(course);
            countArr.push([course,count]);
        }
        if(countArr.length === 0) continue;
        countArr.sort((a,b) => b[1] - a[1]);
        const max = countArr[0][1];
        if(max < 2) continue;
        for(let i=0; i<countArr.length; i++) {
            if(countArr[i][1] < max) break;
            result.push(countArr[i][0]);
        }
    }
    return result.sort();
    
}