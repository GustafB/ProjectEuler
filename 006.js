function sumOfSquares(n1, n2) {
  var nums = getRange(n1, n2);
  return nums.map((a) => Math.pow(a, 2)).reduce((a, b) => a + b);
}

function squareOfSum(n1, n2) {
  var nums = getRange(n1, n2);
  return Math.pow(nums.reduce((a, b) => a + b), 2);
}

function squareDiff(argument) {
	return squareOfSum(1,20) - sumOfSquares(1,20);
}