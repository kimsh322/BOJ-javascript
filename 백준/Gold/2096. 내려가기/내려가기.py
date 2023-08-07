import sys

n = int(input())
init = list(map(int, sys.stdin.readline().split()))
maxDp = init
minDp = init
for _ in range(n - 1):
    a, b, c = map(int, sys.stdin.readline().split())
    maxDp = [a + max(maxDp[0], maxDp[1]), b + max(maxDp), c + max(maxDp[1], maxDp[2])]
    minDp = [a + min(minDp[0], minDp[1]), b + min(minDp), c + min(minDp[1], minDp[2])]

print(max(maxDp), min(minDp))