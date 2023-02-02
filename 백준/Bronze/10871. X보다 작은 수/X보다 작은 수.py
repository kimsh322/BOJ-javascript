n, x = map(int,input().split())
numlist = list(map(int,input().split()))
result=[]
for i in numlist :
    if i<x :
        result.append(i)
print(*result)