const [n, ...input] = require("fs").readFileSync('/dev/stdin').toString().trim().split("\n");
let obj = {};
for (let i = 0; i < n; i++) {
  let [a, b, c] = input[i].split(" ");
  obj[a] = [];
  obj[a].push(b, c);
}

const result1 = () => {
  let visited = {};
  for (let key in obj) visited[key] = false;

  let result = "";
  const dfs = (node) => {
    if (!visited[node]) {
      result += node;
      visited[node] = true;
    }
    for (let el of obj[node]) {
      if (el !== ".") dfs(el);
    }
  };
  dfs("A");
  console.log(result);
};

const result2 = () => {
  let visited = {};
  for (let key in obj) visited[key] = false;

  let result = "";
  const dfs = (node) => {
    if (obj[node][0] && obj[node][0] !== ".") dfs(obj[node][0]);
    if (!visited[node]) {
      result += node;
      visited[node] = true;
    }
    if (obj[node][1] && obj[node][1] !== ".") dfs(obj[node][1]);
  };
  dfs("A");
  console.log(result);
};

const result3 = () => {
  let visited = {};
  for (let key in obj) visited[key] = false;

  let result = "";
  const dfs = (node) => {
    for (let el of obj[node]) {
      if (el !== ".") dfs(el);
    }
    if (!visited[node]) {
      result += node;
      visited[node] = true;
    }
  };
  dfs("A");
  console.log(result);
};

result1();
result2();
result3();