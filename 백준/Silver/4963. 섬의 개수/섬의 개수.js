const input = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let i=0;
let dx = [1,1,1,0,0,-1,-1,-1];
let dy = [1,0,-1,1,-1,1,0,-1];

let result = '';
while(true){
  let [w,h] = input[i].split(' ').map(Number);
  let num=0;
  if(w===0 && h===0) break;
  let map = [];
  for(let j=i+1; j<=i+h;j++){
    map.push(input[j].split(' ').map(Number));
  }
  let visited = Array(h).fill(0).map(() => Array(w).fill(false));

  const search = (x,y) => {
    visited[y][x] = true;

    for(let i=0; i<8; i++){
      let curX = x+dx[i];
      let curY = y+dy[i];
      if(curX>=0 && curX<w && curY>=0 && curY<h){
        if(map[curY][curX] === 1 && !visited[curY][curX]){
          search(curX,curY);
        }
      }
    }
  }

  for(let x=0; x<w ; x++){
    for(let y=0; y<h; y++){
      if(map[y][x] ===1 && !visited[y][x]){
        search(x,y);
        num++;
      }
    }
  }
  result += num + '\n';
  i += h+1;
}


console.log(result);