function pythaTriplet() {
	var triplets = [];
	for(var i = 1 ; i < 1000 ; i++){
		for(var j = i + 1 ; j < 1000 ; j++){
			for(var k = i + 2 ; k < 1000 ; k++){
				if(Math.pow(i,2) + Math.pow(j,2) === Math.pow(k,2)){
					triplets.push([i,j,k])
				}
			}
		}
	}
	return triplets[triplets.map((a) => a.reduce((b,c) => b + c)).indexOf(1000)];
}