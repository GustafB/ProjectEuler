
function collatz(n) {
	var sequence = [];
	while(n > 1){
		n = n % 2 == 1 ? (3 * n) + 1 : n / 2;
		sequence.push(n)
	}
	return sequence.length;
}

function longestCollatz(n) {
	var longestSequence = 0;
	var sequenceNum = 0;
	for(var i = 0 ; i < n ; i++){
		var len = collatz(i);
		if(len > longestSequence){
			longestSequence = len;
			sequenceNum = i
		}
	}
	return sequenceNum;
}

console.log(longestCollatz(1000000))