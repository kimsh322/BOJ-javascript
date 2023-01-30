import sys
input = sys.stdin.readline

num = int(input())
for i in range(1,num+1) :
    a,b = map(int,input().split())
    print("Case #{}: {} ".format(i,a+b))