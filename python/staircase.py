def staircase(n):
    for i in range(n):
        i += 1
        print(" "*(n-i) + "#"*i)

staircase(6)
