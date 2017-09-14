function isPalindrome(num) {
  var str = num.toString()
  return str.split('').reverse().join('') === str;
}


function largestPalindrome() {
  var arr = [];
  for(var i = 100 ; i < 999 ; i++){
    for(var j = 100 ; j < 999 ; j++){
      var prod = j * i;
      if(isPalindrome(prod)){
        arr.push(prod)
      }
    }
  }
  return Math.max(...arr)
}