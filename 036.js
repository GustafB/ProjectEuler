
function isPalindrome(n) {
	return n.toString().split('').reverse().join('') == n.toString();
}

function doubleBasePalindrome(n) {
	var palidromeSum = 0;
	for(var i = 0 ; i < n ; i++){
		var binary = i.toString(2);
		if(isPalindrome(binary) && isPalindrome(i)){
			palidromeSum += i;
		}
	}
	return palidromeSum;
}

console.log(doubleBasePalindrome(1000000))