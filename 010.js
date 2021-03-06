function sumPrimes(num) {

  // determine if a number is prime
  function isPrime(n) {
    if (n === 2) return true;
    if (n === 3) return true;
    if (n % 2 === 0) return false;
    if (n % 3 === 0) return false;

    var  i = 5;
    var  w = 2;
    while (i * i <= n) {
        if (n % i === 0) {
            return false;
        }
        i += w;
        w = 6 - w;
    }
    return true;
  }

  // subtract 1 for 'not being prime' in my context
  var sum = isPrime(num) ? num - 1 : -1;

  for (var x = 0; x < num; x++) {
    if (isPrime(x)) {
      sum += x;
    }
  }

  return sum;
}