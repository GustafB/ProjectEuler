var largestPrimeFactor = function() {
  var number = 600851475143
  var max = 0

  for (var i = 2; i <= number; i++) {
    while (number % i == 0) {
      max = i
      number /= i
    }
  }

  return max
}