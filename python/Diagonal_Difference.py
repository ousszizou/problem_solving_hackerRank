def diagonalDifference(arr):
  sum_primaryD = 0
  sum_secondaryD = 0
  for i in range(len(arr)):
    for j in range(len(arr)):
      if i == j:
        sum_primaryD += arr[i][j]
    sum_secondaryD += arr[i][len(arr)-(i+1)]
  
  return abs(sum_primaryD - sum_secondaryD)

n = int(input().strip())

arr = []

for _ in range(n):
    arr.append(list(map(int, input().rstrip().split())))

result = diagonalDifference(arr)

print("the absolute diagonal difference: ",result)
