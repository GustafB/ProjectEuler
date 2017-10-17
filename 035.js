function isPrime(n) {
	var limit = Math.sqrt(n),
		div = 3;
	if(n == 2 || n == 3){
		return true
	}
	else if(n % 2 == 0){
		return false;
	} else {
		while(div <= limit){
			if(n % div == 0){
				return false;
			} else {
				div += 2;
			}
		}
	}
	return n > 1;
}

Array.prototype.rotate = function() {
  this.push(this.shift());
  return this;
}

function getRotations(n) {
	var rotations = [],
		flips = 0,
		n = n.toString().split('');
	while(flips < n.length){
		rotations.push(Number(n.rotate().join('')));
		flips++;
	}
	return rotations.filter((a) => !isPrime(a));
}

function getCircularPrimes(n) {
	var count = 0;
	for(var i = 0 ; i < n ; i++){
		if(isPrime(i)){
			if(getRotations(i).length == 0){
				count++;
			}
		}
	}
	return count;
}
