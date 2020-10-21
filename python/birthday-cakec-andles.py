def birthdayCakeCandles(candles):
  candles.sort()
  return candles.count(candles[-1])


print(birthdayCakeCandles([3,1,2,3]))
