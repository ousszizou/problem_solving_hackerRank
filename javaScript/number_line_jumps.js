// x1=0 v1=3    x2=4 v2=2

// 0 .... 10000

// k1 => 0 3 6 9  12 15 ...
// k2 => 4 6 8 10 12 14 ...

// 0     50      100
//          k2
//                 k1

const kangaroo = (x1, v1, x2, v2) => {
  if (x2 > x1 && v2 >= v1) {
    return "NO"
  }
  for (let i = x1;; i += v1) {
    console.log(x1 + v1, x2 + v2);
    if (x2+v2 < x1+v1) {
      return "NO";
    }
    if (x1+v1 == x2+v2) {
      return "YES";
    }
    x1 += v1;
    x2 += v2;
  }
};

console.log(kangaroo(0, 2, 5, 3));
console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(2, 1, 1, 2));
console.log(kangaroo(0, 4, 5, 1));
