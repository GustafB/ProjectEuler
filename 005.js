function smallestMult() {
  for(var i = 20; i <= 10000000000000; i++){
      var found = true;
      for(var e = 2; e <= 20; e++){
          if (i % e != 0) {
              found = false;
              break; // stop testing other divisors
          }
      }
      if (found) {
          return i;
      }
    }
}