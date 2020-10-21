// [ 3 2 1 3 ]
// sort => [1 2 3 3]
// filter by (last item) => result = [3 3]
// get length of result => 2

const birthdayCakeCandles = (candles) => {
  candles.sort((a,b) => a - b);
  return candles.filter(num => num === candles[candles.length - 1]).length;
  
};

console.log(birthdayCakeCandles([3,2,1,3]));
