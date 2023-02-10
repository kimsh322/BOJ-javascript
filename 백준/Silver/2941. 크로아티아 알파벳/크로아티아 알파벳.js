let a = require('fs').readFileSync('/dev/stdin').toString().trim();
let b = "";
while (true) {
  if (a.indexOf("dz=") !== -1) {
    a = a.replace("dz=", "1");
    continue;
  }
  a = a.replace("c=", "1");
  a = a.replace("c-", "1");
  a = a.replace("d-", "1");
  a = a.replace("lj", "1");
  a = a.replace("nj", "1");
  a = a.replace("s=", "1");
  a = a.replace("z=", "1");
  if (a === b) break;
  b = a;
}
console.log(a.length);