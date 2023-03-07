function solution(strings, n) {
    strings.sort();
    strings.sort((a,b) => a[n] >= b[n] ? 1 : -1);
    return strings;
}