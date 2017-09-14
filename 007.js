function isPrime(n) {
  for(var i = 2 ; i < n ; i++){
    if(n % i === 0){
      return false;
    }
  }
  return i > 1;
}

function lastPrime() {
  var i = 0;
  var primes = [];
  while(primes.length < 10001){
    i++;
    if(isPrime(i)){
      primes.push(i);
    }
  }
  return primes[primes.length -1];
}