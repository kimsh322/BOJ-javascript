import sys
sys.setrecursionlimit(10 ** 6)

def dfs(cur):
    global count
    if visited[cur]:
        done[cur] = True
        count = count + 1
    else:
        visited[cur] = True

    if not done[arr[cur]]:
        dfs(arr[cur])
    visited[cur] = False
    done[cur] = True


t = int(input())
for _ in range(t):
    n = int(input())
    arr = list(map(int, sys.stdin.readline().split()))
    arr.insert(0, 0)
    visited = [False] * (n + 1)
    done = [False] * (n + 1)
    count = 0

    for i in range(1, n + 1):
        if not done[i]:
            dfs(i)

    print(n - count)