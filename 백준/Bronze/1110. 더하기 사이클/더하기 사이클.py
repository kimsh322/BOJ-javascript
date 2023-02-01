a= int(input())
n=0
aa = a
while True :
    b = a//10 + a%10
    a = (a%10) *10 + b%10
    n = n+1
    if aa==a :
        print(n)
        break;