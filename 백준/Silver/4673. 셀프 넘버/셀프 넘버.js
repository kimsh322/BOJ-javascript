for(let i=1; i<=1000; i++){
    let bool = true
    for(let j=1; j<i; j++){
        let a = '' + j;
        let b = a.split('').reduce((a,el) => a+(+el),0);
        if(j + b === i) {
            bool=false;
            break;
        }
    }
    if(bool) console.log(i);
}
for(let i=1001; i<=10000; i++){
    let bool = true
    for(let j=parseInt(i*0.95); j<i; j++){
        let a = '' + j;
        let b = a.split('').reduce((a,el) => a+(+el),0);
        if(j + b === i) {
            bool=false;
            break;
        }
    }
    if(bool) console.log(i);
}