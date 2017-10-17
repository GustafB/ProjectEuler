function maxProd(nums) {
  var numbers = nums.split('');
  var max = 0;
  for(var i = 0 ; i < numbers.length - 12 ; i++){
    var prod = numbers.slice(i, i + 13).reduce((a, b) => a * b);
    if(prod > max){
      max = prod;
    }
  }
  return max;
}