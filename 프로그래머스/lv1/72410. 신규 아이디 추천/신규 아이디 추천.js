function solution(new_id) {
    const floor1 = new_id.toLowerCase();
    
    const valid = '1234567890abcdefghijklmnopqrstuvwxyz-_.'
    const floor2 = [];
    for(let i=0; i<floor1.length; i++){
        if(valid.includes(floor1[i])) {
            floor2.push(floor1[i]);
        }
    }
    
    const floor3 = [];
    for(let i=1; i<floor2.length; i++) {
        if(floor2[i-1] === '.' && floor2[i] === '.') {
            floor2[i-1] = '';
        }
    }
    for(let i=0; i<floor2.length; i++) {
        if(floor2[i] !== '') floor3.push(floor2[i]);
    }
    
    // floor4
    while(floor3[0] === '.') floor3.shift();
    while(floor3[floor3.length-1] === '.') floor3.pop();
    
    // floor5
    if(floor3.length === 0) floor3.push('a');
    
    // floor6
    const floor6 = floor3.slice(0,15);
    while(floor6[floor6.length-1] === '.') floor6.pop();
    
    // floor7
    while(floor6.length<3) floor6.push(floor6[floor6.length-1]);
    
    return floor6.join('')
    
}