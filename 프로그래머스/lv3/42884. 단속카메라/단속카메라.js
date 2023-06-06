function solution(routes) {
    let result = 1;
    routes.sort((a,b) => a[1] - b[1]);
    let curCam = routes[0][1];
    for(let i=0; i<routes.length; i++){
        if(curCam >= routes[i][0] && curCam <= routes[i][1]) continue;
        result++;
        curCam = routes[i][1];
    }
    return result;
}