function fibonacci(n) {
	var fibs = [];
	var begin = 0;
	while(fibs.length <= n){
		if(begin === 0 || begin === 1){
			fibs.push(begin);
			begin++;
		} else {
			var last = fibs[begin - 1];
			var secondLast = fibs[begin - 2];
			fibs.push(last + secondLast)
			begin++
		}
	}
	return fibs.slice(1);
}



function sumUpTo(n) {
	var arr = fibonacci(n);
	var sum = 0;
	for(var i = 0 ; i < arr.length ; i++){
		var ele = arr[i];
		if(ele % 2 === 0 && ele < 4000000){
			sum += ele;
		}
	}
	return sum;
}
console.log(sumUpTo(50))