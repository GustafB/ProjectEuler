import math



def factors(n):
	divs = [1]
	for i in xrange(2,int(math.sqrt(n))+1):
		if n%i == 0:
			divs.extend([i,n/i])
	return list(set(divs))


def isAmicable(n):
	facts = list(factors(n))
	factSum = sum(facts)
	if sum(factors(factSum)) == n and factSum != n:
	  return True


def amicableSum(n):
	amicableNums = []
	for i in range(2,n):
		if isAmicable(i):
			amicableNums.append(i)
	return sum(amicableNums)

print(amicableSum(10000)) # ==> 31626
